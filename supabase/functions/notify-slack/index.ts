import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/slack/api';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
  if (!LOVABLE_API_KEY) {
    return new Response(JSON.stringify({ error: 'LOVABLE_API_KEY is not configured' }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  const SLACK_API_KEY = Deno.env.get('SLACK_API_KEY');
  if (!SLACK_API_KEY) {
    return new Response(JSON.stringify({ error: 'SLACK_API_KEY is not configured' }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const { type, email, name, enquiry_type, looking_for, size, message } = await req.json();

    let text: string;
    if (type === 'mailing_list') {
      text = `📬 *New Mailing List Signup*\n• Email: ${email}`;
    } else if (type === 'contact_enquiry') {
      const lines = [
        `📩 *New ${enquiry_type === 'purchase' ? 'Purchase' : 'Commission'} Enquiry*`,
        `• Name: ${name}`,
        `• Email: ${email}`,
      ];
      if (looking_for) lines.push(`• Looking for: ${looking_for}`);
      if (size) lines.push(`• Size: ${size}`);
      if (message) lines.push(`• Message: ${message}`);
      text = lines.join('\n');
    } else {
      return new Response(JSON.stringify({ error: 'Unknown notification type' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Send to #website-notifications channel (or general if it doesn't exist)
    // First, find the channel
    const channelsRes = await fetch(`${GATEWAY_URL}/conversations.list?types=public_channel&limit=200`, {
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'X-Connection-Api-Key': SLACK_API_KEY,
      },
    });
    const channelsData = await channelsRes.json();
    
    let channelId: string | null = null;
    if (channelsData.ok && channelsData.channels) {
      const target = channelsData.channels.find((c: any) => c.name === 'website-notifications');
      const general = channelsData.channels.find((c: any) => c.name === 'general');
      channelId = target?.id || general?.id || null;
    }

    if (!channelId) {
      throw new Error('No suitable Slack channel found');
    }

    // Join the channel first (no-op if already a member)
    await fetch(`${GATEWAY_URL}/conversations.join`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'X-Connection-Api-Key': SLACK_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ channel: channelId }),
    });

    const response = await fetch(`${GATEWAY_URL}/chat.postMessage`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'X-Connection-Api-Key': SLACK_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        channel: channelId,
        text,
        username: "Fagan's Woodwork",
        icon_emoji: ':wood:',
      }),
    });

    const data = await response.json();
    if (!response.ok || !data.ok) {
      throw new Error(`Slack API error [${response.status}]: ${JSON.stringify(data)}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    console.error('Error sending Slack notification:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
