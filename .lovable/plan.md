

## Slack Notifications for New Signups and Enquiries

**What this does:** Every time someone signs up to your mailing list or submits a contact enquiry, you'll get an instant Slack message with the details.

**Cost:** Works with Slack's free plan — no paid subscription needed.

### How it works

1. **Connect Slack** — You'll be prompted to connect your Slack workspace through Lovable's built-in Slack connector. This takes about 30 seconds.

2. **Create a backend function** — A serverless function that sends a formatted Slack message whenever it's called. It will send to a channel you choose (e.g. `#website-notifications`).

3. **Update the mailing list and contact forms** — After saving to the database, each form will also call the backend function to trigger the Slack notification.

### What the Slack messages will look like

- **Mailing list signup:** Channel gets a message like "New mailing list signup: john@example.com"
- **Contact enquiry:** Channel gets a message with name, email, enquiry type, and message preview

### Technical details

- Edge function `notify-slack` handles sending messages via the Slack connector gateway
- Both `MailingListSection` and `ContactSection` will call this function after successful database inserts using `supabase.functions.invoke('notify-slack', ...)`
- The Slack connector provides authentication automatically — no manual API keys needed
- `config.toml` updated with `verify_jwt = false` for the notify function (public forms, no auth)

### Steps

1. Connect Slack connector to project
2. Create `notify-slack` edge function
3. Update `MailingListSection.tsx` to call the function after insert
4. Update `ContactSection.tsx` to call the function after insert

