export const components = new Promise((resolve) => {
  document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.forms['contact__form'];
    const errorMessagesElements = contactForm.getElementsByClassName(
        'contact-form__val-error'
    );
    const nameInput = contactForm.elements['username'];
    const emailInput = contactForm.elements['email'];
    const passwordInput = contactForm.elements['password'];
    const submitBtn = contactForm.elements['submit'];

    resolve({
      contactForm,
      errorMessagesElements,
      nameInput,
      emailInput,
      passwordInput,
      submitBtn,
    });
  });
});
