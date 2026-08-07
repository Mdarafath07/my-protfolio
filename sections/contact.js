import { contactInfo } from '../data/contact.js';
import { sendEmail } from '../utils/email.js';

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
    <section id="contact" class="section contact" style="background:var(--bg-soft);border-block:1px solid var(--border)">
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow">Contact</span>
          <h2>Have a project in mind?</h2>
          <p class="lead">Tell me what you're building. I reply within one business day — usually much faster.</p>
        </div>

        <div class="contact-grid">
          <div class="reveal">
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
            <p style="margin-top:1.25rem;font-size:0.86rem;color:var(--text-3)">
              Prefer socials?
              <a style="color:var(--accent)" href="${contactInfo.github}" target="_blank" rel="noopener">GitHub</a>
              ·
              <a style="color:var(--accent)" href="${contactInfo.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
            </p>
          </div>

          <form class="form-card reveal" id="contactForm" novalidate>
            <div class="fc-head">
              <h3>Send a message</h3>
              <p>I'll get back to you with honest, practical answers.</p>
            </div>

            <div class="form-grid">
              <div class="form-field">
                <label for="contactName">Name</label>
                <input class="in" type="text" id="contactName" name="name" autocomplete="name" placeholder="Jane Doe" required />
              </div>
              <div class="form-field">
                <label for="contactEmail">Email</label>
                <input class="in" type="email" id="contactEmail" name="email" autocomplete="email" placeholder="jane@company.com" required />
              </div>
              <div class="form-field">
                <label for="contactSubject">Subject</label>
                <input class="in" type="text" id="contactSubject" name="subject" placeholder="Flutter app for my business" required />
              </div>
              <div class="form-field">
                <label for="contactMessage">Project details</label>
                <textarea class="in" id="contactMessage" name="message" rows="5" placeholder="What are you building, and when do you need it?" required></textarea>
              </div>
            </div>

            <button type="submit" class="btn btn-primary btn-block" id="contactSubmit" style="margin-top:1.25rem">
              <span id="submitText">Send message</span>
              <span id="submitLoading" style="display:none">Sending…</span>
            </button>

            <div class="alert" id="formAlert" role="status" aria-live="polite"></div>
          </form>
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
      showAlert('ok', 'Message sent.', 'Thanks for reaching out — I\'ll reply soon.');
      form.reset();
    } else {
      showAlert('err', 'Couldn\'t send.', 'Please try again, or email me directly at mdarafathuddin10@gmail.com.');
    }
  });
}