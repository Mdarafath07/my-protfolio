import { contactInfo } from '../data/contact.js';
import { sendEmail } from '../utils/email.js?v=2';

const contactItems = [
  {
    label: 'Email',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    i: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>'
  },
  {
    label: 'Phone / WhatsApp',
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone}`,
    i: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 4.94 2 2 0 0 1 3.59 2.76h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17"/></svg>'
  },
  {
    label: 'Location',
    value: contactInfo.location,
    href: null,
    i: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>'
  }
];

export function renderContact() {
  const host = document.querySelector('#contact-placeholder');
  if (!host) return;

  host.innerHTML = `
    <section id="contact" class="section contact">
      <div class="container">
        <div class="contact-wrap reveal">
          <div class="section-head" style="margin-bottom:clamp(1.5rem,4vw,2.75rem)">
            <span class="eyebrow"><span class="idx">08</span> Contact</span>
            <h2>Have a project <span class="it">in mind?</span></h2>
            <p class="lead">Tell me what you're building. I reply within one business day — usually much faster.</p>
          </div>

          <div class="contact-grid">
            <div>
              <div class="contact-list">
                ${contactItems.map(item => `
                  ${item.href
                    ? `<a href="${item.href}">
                         <span class="ci" aria-hidden="true">${item.i}</span>
                         <span class="cd"><b>${item.label}</b><span>${item.value}</span></span>
                       </a>`
                    : `<div>
                         <span class="ci" aria-hidden="true">${item.i}</span>
                         <span class="cd"><b>${item.label}</b><span>${item.value}</span></span>
                       </div>`}
                `).join('')}
              </div>

              <div class="socials-row">
                <span class="lbl">Socials</span>
                <a class="icon-btn" href="${contactInfo.github}" target="_blank" rel="noopener" aria-label="GitHub profile">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a class="icon-btn" href="${contactInfo.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn profile">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>

            <form class="form-card" id="contactForm" novalidate>
              <div class="fc-head">
                <h3>Send a <span class="it">message</span></h3>
                <p>I'll get back to you with honest, practical answers.</p>
              </div>

              <div class="form-grid">
                <div class="form-field">
                  <label for="contactName">Name <span class="req" aria-hidden="true">*</span></label>
                  <input class="in" type="text" id="contactName" name="name" autocomplete="name" placeholder="Jane Doe" required />
                </div>
                <div class="form-field">
                  <label for="contactEmail">Email <span class="req" aria-hidden="true">*</span></label>
                  <input class="in" type="email" id="contactEmail" name="email" autocomplete="email" placeholder="jane@company.com" required />
                </div>
                <div class="form-field">
                  <label for="contactSubject">Subject <span class="req" aria-hidden="true">*</span></label>
                  <input class="in" type="text" id="contactSubject" name="subject" placeholder="Flutter app for my business" required />
                </div>
                <div class="form-field">
                  <label for="contactMessage">Project details <span class="req" aria-hidden="true">*</span></label>
                  <textarea class="in" id="contactMessage" name="message" rows="5" placeholder="What are you building, and when do you need it?" required></textarea>
                </div>
              </div>

              <button type="submit" class="btn btn-primary btn-block" id="contactSubmit" style="margin-top:1.1rem" data-magnetic>
                <span id="submitText">Send message</span>
                <span id="submitLoading" style="display:none">Sending…</span>
              </button>

              <div class="alert" id="formAlert" role="status" aria-live="polite"></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;

  initForm();
}

function initForm() {
  const form = document.querySelector('#contactForm');
  if (!form) return;
  const submit = document.querySelector('#contactSubmit');
  const text = document.querySelector('#submitText');
  const loading = document.querySelector('#submitLoading');
  const alert = document.querySelector('#formAlert');

  const showAlert = (type, title, msg) => {
    alert.className = `alert show alert--${type}`;
    alert.innerHTML = type === 'ok'
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg><span><b>' + title + '</b>' + msg + '</span>'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg><span><b>' + title + '</b>' + msg + '</span>';
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    alert.classList.remove('show');
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    text.style.display = 'none';
    loading.style.display = 'inline';
    submit.disabled = true;

    const result = await sendEmail({
      name: form.contactName.value.trim(),
      email: form.contactEmail.value.trim(),
      subject: form.contactSubject.value.trim(),
      message: form.contactMessage.value.trim()
    });

    text.style.display = 'inline';
    loading.style.display = 'none';
    submit.disabled = false;

    if (result.success) {
      if (result.fallback) {
        showAlert('ok', 'Almost sent.', 'Your mail app opened with the message ready to send — press send there.');
        if (result.reason) {
          alert.innerHTML += `<small class="alert__why">Server said: ${result.reason}</small>`;
        }
      } else {
        showAlert('ok', 'Message sent.', 'Thanks for reaching out — I\'ll reply soon, usually within a day.');
      }
      form.reset();
    } else {
      showAlert('err', 'Couldn\'t send.', 'Please try again, or email me directly at mdarafathuddin10@gmail.com.');
    }

    // While setting the service up, the reason helps (browser console)
    if (result.reason) console.warn('[contact] delivery reason:', result.reason);
  });
}
