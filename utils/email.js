/**
 * EmailJS Delivery Utility
 * 
 * To set up EmailJS for your portfolio:
 * 1. Sign up at https://www.emailjs.com/
 * 2. Add an Email Service linked to: mdarafathuddin7@gmail.com
 * 3. Create an Email Template with the following placeholders:
 *    - {{from_name}}
 *    - {{from_email}}
 *    - {{subject}}
 *    - {{message}}
 *    - Set the "To Email" in your template settings to: mdarafathuddin10@gmail.com
 * 4. Paste your Service ID, Template ID, and Public Key into the constants below.
 */

// Replace these with your actual EmailJS credentials
const EMAILJS_CONFIG = {
  PUBLIC_KEY: '9tlspF2Lm6PfQzCo_WR3P', // e.g., 'user_xxxxxxxxxxxxxx'
  SERVICE_ID: 'service_pd8xr2y', // e.g., 'service_xxxxxxx'
  TEMPLATE_ID: 'template_vng1qfn' // e.g., 'template_xxxxxxx'
};

/**
 * Sends a message via EmailJS. Falls back to a mock success if keys are not set,
 * to allow local development testing.
 * 
 * @param {Object} params
 * @param {string} params.name
 * @param {string} params.email
 * @param {string} params.subject
 * @param {string} params.message
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function sendEmail({ name, email, subject, message }) {
  // If the keys are default/placeholder, log warning and use mock response for testing
  if (
    EMAILJS_CONFIG.PUBLIC_KEY.startsWith('YOUR_') ||
    !EMAILJS_CONFIG.PUBLIC_KEY
  ) {
    console.warn(
      'EmailJS is not fully configured. Using mock delivery. Configure in utils/email.js'
    );
    // Simulate API network call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simulate successful delivery locally
    return {
      success: true,
      message: 'Mock delivery successful! (Please configure your EmailJS credentials in utils/email.js for live delivery).'
    };
  }

  try {
    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    if (response.status === 200) {
      return { success: true, message: 'Message sent successfully!' };
    } else {
      throw new Error(`Failed to send. Status code: ${response.status}`);
    }
  } catch (error) {
    console.error('EmailJS Error:', error);
    return {
      success: false,
      message: error.message || 'An unexpected error occurred during submission.'
    };
  }
}
