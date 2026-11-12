/**
 * Contact form delivery — EmailJS (Gmail) with a mailto fallback.
 *
 * SETUP (one time):
 *   1. https://dashboard.emailjs.com -> sign in with mdarafathuddin7@gmail.com
 *   2. Account -> Public Key          -> PUBLIC_KEY below
 *   3. Email Services -> Add New -> Gmail, connect mdarafathuddin7@gmail.com
 *      (Gmail needs an App Password: turn on 2-Step Verification, then create
 *       one at https://myaccount.google.com/apppasswords)
 *   4. Email Templates -> Add New:
 *        To Email  : mdarafathuddin10@gmail.com   <- the mail lands here
 *        From Name : {{from_name}}
 *        Reply To  : {{from_email}}
 *        Subject   : New portfolio message — {{subject}}
 *        Message   : {{from_name}} ({{from_email}}) wrote:\n\n{{message}}
 *   5. Email Services -> Service ID   -> SERVICE_ID below
 *   6. Verify BOTH the service and the template (green tick).
 *
 * The Gmail App Password is only ever typed into the EmailJS dashboard —
 * it must never appear in this file, because the whole project folder is
 * published as a static site.
 */

let emailjsPromise = null;

/* Loaded on demand: if the CDN is blocked the page still works. */
function loadEmailJS() {
  if (!emailjsPromise) {
    emailjsPromise = new Promise((resolve) => {
      if (window.emailjs) return resolve(window.emailjs);

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
      script.async = true;
      script.onload = () => resolve(window.emailjs || null);
      script.onerror = () => {
        console.warn('[contact] EmailJS could not be loaded.');
        resolve(null);
      };
      document.head.appendChild(script);
    });
  }
  return emailjsPromise;
}

/* The keys live in a local, git-ignored file (utils/email.local.js) so they
   never reach the repository. The site loads that file before this module; when
   it is missing the form falls back to the visitor's mail app. */
const EMAILJS_CONFIG = window.__EMAILJS_CONFIG__ || {
  PUBLIC_KEY: '',
  SERVICE_ID: '',
  TEMPLATE_ID: ''
};

// The mail is sent from the Gmail service, and lands in this inbox.
const MAIL_TO = 'mdarafathuddin10@gmail.com';
const MAIL_FROM = 'mdarafathuddin7@gmail.com';

const clean = (v) => (v || '').trim();

const configured = () =>
  Boolean(
    clean(EMAILJS_CONFIG.PUBLIC_KEY) &&
    clean(EMAILJS_CONFIG.SERVICE_ID) &&
    clean(EMAILJS_CONFIG.TEMPLATE_ID) &&
    !clean(EMAILJS_CONFIG.PUBLIC_KEY).startsWith('YOUR_')
  );

// Which key is this page really using? Open the console to compare with the
// dashboard (Account -> Public Key). A stale cached module shows up here.
console.info(
  '[contact] EmailJS public key in use:',
  clean(EMAILJS_CONFIG.PUBLIC_KEY).slice(0, 8) + '… (' + clean(EMAILJS_CONFIG.PUBLIC_KEY).length + ' chars)'
);

/** Opens the visitor's mail app with the message ready to send. */
function mailtoFallback({ name, email, subject, message }) {
  const body = `${message}\n\n—\nFrom: ${name}\nEmail: ${email}`;
  const href = `mailto:${MAIL_TO}?subject=${encodeURIComponent(subject || 'Portfolio enquiry')}&body=${encodeURIComponent(body)}`;
  window.location.href = href;
  return {
    success: true,
    message: 'Your mail app opened with the message ready to send.',
    fallback: true
  };
}

/**
 * Sends a message through EmailJS.
 * @returns {Promise<{success: boolean, message: string, fallback?: boolean, reason?: string}>}
 */
export async function sendEmail({ name, email, subject, message }) {
  if (!configured()) {
    console.warn('[contact] EmailJS is not configured — falling back to the mail app.');
    return mailtoFallback({ name, email, subject, message });
  }

  try {
    const emailjs = await loadEmailJS();
    if (!emailjs) throw new Error('EmailJS library unavailable.');

    const response = await emailjs.send(
      clean(EMAILJS_CONFIG.SERVICE_ID),
      clean(EMAILJS_CONFIG.TEMPLATE_ID),
      {
        from_name: name,
        from_email: email,
        reply_to: email,
        subject,
        message,
        to_email: MAIL_TO,
        from_account: MAIL_FROM
      },
      clean(EMAILJS_CONFIG.PUBLIC_KEY)
    );

    if (response.status === 200) {
      return { success: true, message: 'Message sent successfully.' };
    }

    throw new Error(`EmailJS replied with status ${response.status}.`);
  } catch (error) {
    console.error('[contact] EmailJS delivery failed:', error);

    // EmailJS replies with a precise reason (status + text). Keep it — it is
    // the only way to tell a wrong key from a wrong password.
    let reason = error?.text || error?.message || 'unknown error';
    try {
      const res = error?.response;
      if (res && typeof res.text === 'function') {
        const body = await res.text();
        try {
          const parsed = JSON.parse(body);
          if (parsed?.message) reason = `${parsed.status || error?.status || ''}: ${parsed.message}`.trim();
        } catch (e) {
          reason = `${error?.status || ''}: ${body}`.trim();
        }
      } else if (error?.status) {
        reason = `${error.status}: ${reason}`;
      }
    } catch (e) { /* keep the original reason */ }

    // Never lose a message: hand it to the visitor's mail app instead.
    const fallback = mailtoFallback({ name, email, subject, message });
    fallback.message = 'Email delivery is not active yet — your mail app opened with the message ready to send.';
    fallback.reason = reason;
    return fallback;
  }
}
