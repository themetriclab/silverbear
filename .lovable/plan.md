Update the `send-contact-email` edge function so the `to` field sends to `erik@wildlifediscovered.com` instead of `wildlifediscovered@outlook.com`. Also update the brand contact memory to reflect the new recipient.

Files:
- `supabase/functions/send-contact-email/index.ts` — change recipient email
- `mem://project/identity` (and core memory line) — update stored contact email

No other contact info shown publicly on the site changes.