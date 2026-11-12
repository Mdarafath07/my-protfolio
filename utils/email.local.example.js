/* Template for the local EmailJS credentials.
 *
 * Copy this file to `utils/email.local.js` and fill in the three values from
 * your EmailJS dashboard (https://dashboard.emailjs.com):
 *
 *   PUBLIC_KEY   Account tab -> Public Key
 *   SERVICE_ID   Email Services -> your Gmail service
 *   TEMPLATE_ID  Email Templates -> your template
 *
 * `utils/email.local.js` is git-ignored on purpose — the keys never reach the
 * repository. The site loads it before the app starts; when it is missing the
 * contact form falls back to the visitor's mail app, pre-filled.
 *
 * All three values must come from the SAME EmailJS account.
 */
window.__EMAILJS_CONFIG__ = {
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY',
  SERVICE_ID: 'YOUR_SERVICE_ID',
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID'
};
