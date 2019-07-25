import {
  checkName,
  checkSubject,
  checkMessage,
  checkEmail,
} from '../helper-functions.js';

import {components} from './contact-components.js';

export function addContactFormValidation() {
  components.then((respose) => {
    const {
      contactForm,
      errorMessages,
      nameInput,
      emailInput,
      subjectInput,
      messageTextArea,
    } = respose;

    contactForm.addEventListener('submit', () => {
      event.preventDefault();
      validateContactForm();
    });

    function validateContactForm() {
      let result = [];

      // Name validation
      result.push(checkName(nameInput, errorMessages[0]));

      // Email validation
      result.push(checkEmail(emailInput, errorMessages[1]));

      // Subject validation
      result.push(checkSubject(subjectInput, errorMessages[2]));

      // Message validation
      result.push(checkMessage(messageTextArea, errorMessages[3]));

      // Send message
      if (!result.includes(false)) {
        window.alert('Message sent');
        contactForm.reset();
      }
      return result;
    }
  });
}
