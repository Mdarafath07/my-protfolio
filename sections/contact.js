import { contactInfo } from '../data/contact.js';
import { sendEmail } from '../utils/email.js';

export function renderContact() {
  const contactPlaceholder = document.querySelector('#contact-placeholder');
  if (!contactPlaceholder) return;

  const languagesHtml = contactInfo.languages.map(l => `
    <span class="lang-tag">${l.name} (${l.level})</span>
  `).join('');

  contactPlaceholder.innerHTML = `
    <section id="contact" class="section contact">
      <canvas id="contactCanvas" class="contact-canvas"></canvas>
      <div class="container">
        <div class="section-header reveal">
          <div class="section-tag">Let's Connect</div>
          <h2 class="section-title">Start a <span class="gradient-text">Project</span></h2>
          <p class="section-subtitle">Have an idea? I'd love to hear it and build something amazing together</p>
        </div>

        <div class="contact-grid">

          <div class="contact-info reveal">
            <div class="contact-card">
              <div class="contact-card-glow"></div>
              <h3>Let's Build Something <span class="gradient-text">Extraordinary</span></h3>
              <p>I'm always open to discussing new projects, client contracts, mentoring opportunities, or remote mobile dev roles. Drop me a message!</p>

              <div class="contact-items">
                <a href="mailto:${contactInfo.email}" class="contact-item">
                  <div class="contact-item-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <div class="contact-item-label">Email</div>
                    <div class="contact-item-value">${contactInfo.email}</div>
                  </div>
                </a>
                <a href="tel:${contactInfo.phone}" class="contact-item">
                  <div class="contact-item-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 4.94 2 2 0 0 1 3.59 2.76h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17"/>
                    </svg>
                  </div>
                  <div>
                    <div class="contact-item-label">Phone</div>
                    <div class="contact-item-value">${contactInfo.phone}</div>
                  </div>
                </a>
                <div class="contact-item">
                  <div class="contact-item-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <div class="contact-item-label">Location</div>
                    <div class="contact-item-value">${contactInfo.location}</div>
                  </div>
                </div>
              </div>

              <div class="contact-languages">
                <div class="lang-header">Languages:</div>
                <div class="lang-row">
                  ${languagesHtml}
                </div>
              </div>

            </div>
          </div>

          <div class="contact-form-wrap reveal">
            <form class="contact-form" id="contactForm" novalidate>
              <div class="form-glow"></div>
              <div class="form-row">
                <div class="form-group">
                  <label for="contactName" class="form-label">Full Name</label>
                  <input type="text" id="contactName" name="name" class="form-input" placeholder="John Doe" required autocomplete="name" />
                </div>
                <div class="form-group">
                  <label for="contactEmail" class="form-label">Email Address</label>
                  <input type="email" id="contactEmail" name="email" class="form-input" placeholder="john@company.com" required autocomplete="email" />
                </div>
              </div>
              <div class="form-group">
                <label for="contactSubject" class="form-label">Subject</label>
                <input type="text" id="contactSubject" name="subject" class="form-input" placeholder="Flutter App Development" required />
              </div>
              <!-- Removed Budget Range field as requested -->
              <div class="form-group">
                <label for="contactMessage" class="form-label">Project Details</label>
                <textarea id="contactMessage" name="message" class="form-input form-textarea" placeholder="Tell me about your project, timeline, and any specific requirements..." required rows="5"></textarea>
              </div>
              <button type="submit" class="btn-primary btn-full" id="contactSubmit">
                <span class="btn-glow"></span>
                <span id="submitText">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                  Send Message
                </span>
                <span id="submitLoading" style="display:none">
                  <div class="btn-spinner"></div>
                  Sending...
                </span>
              </button>
              
              <!-- Success Alert Box -->
              <div class="form-success" id="formSuccess" style="display:none">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span id="successMsg">Message sent! I'll get back to you soon.</span>
              </div>

              <!-- Error Alert Box -->
              <div class="form-error" id="formError" style="display:none">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <span id="errorMsg">Failed to send message. Please try again.</span>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  `;

  initContactFormLogic();
}

function initContactFormLogic() {
  const form = document.querySelector('#contactForm');
  const submit = document.querySelector('#contactSubmit');
  const btnText = document.querySelector('#submitText');
  const loading = document.querySelector('#submitLoading');
  const successBox = document.querySelector('#formSuccess');
  const errorBox = document.querySelector('#formError');
  const successMsg = document.querySelector('#successMsg');
  const errorMsg = document.querySelector('#errorMsg');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Hide any previous alert state
    successBox.style.display = 'none';
    errorBox.style.display = 'none';

    // Show loading
    btnText.style.display = 'none';
    loading.style.display = 'flex';
    submit.disabled = true;

    // Gather data
    const formData = {
      name: document.querySelector('#contactName').value.trim(),
      email: document.querySelector('#contactEmail').value.trim(),
      subject: document.querySelector('#contactSubject').value.trim(),
      message: document.querySelector('#contactMessage').value.trim()
    };

    // Send email using EmailJS wrapper
    const result = await sendEmail(formData);

    // Reset button states
    btnText.style.display = 'flex';
    loading.style.display = 'none';
    submit.disabled = false;

    if (result.success) {
      successMsg.textContent = result.message;
      successBox.style.display = 'flex';
      form.reset();
      setTimeout(() => {
        successBox.style.display = 'none';
      }, 7000);
    } else {
      errorMsg.textContent = result.message;
      errorBox.style.display = 'flex';
      setTimeout(() => {
        errorBox.style.display = 'none';
      }, 7000);
    }
  });
}
