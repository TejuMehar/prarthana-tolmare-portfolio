import emailjs from '@emailjs/browser';

// EmailJS configuration
export const EMAILJS_CONFIG = {
  publicKey: 'bRWSlOpWx5lzwKGYk',
  serviceId: 'service_bbv8chh',
  templateId: 'template_qkxnd5l'
};

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.publicKey);

// Email service function
export const sendEmail = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_name: 'Aditi Yadav',
  };

  return emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    templateParams
  );
};