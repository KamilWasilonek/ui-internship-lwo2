export const components = new Promise((resolve) => {
  document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.forms['contactForm'];
    const errorMessagesElements = contactForm.getElementsByClassName(
        'contact__val-error'
    );
    const nameInput = contactForm.elements['username'];
    const emailInput = contactForm.elements['email'];
    const subjectInput = contactForm.elements['subject'];
    const messageTextArea = contactForm.elements['message'];

    resolve({
      contactForm,
      errorMessagesElements,
      nameInput,
      emailInput,
      subjectInput,
      messageTextArea,
    });
  });
});
