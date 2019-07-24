/* eslint-disable no-undef */
import {
  isInputNotEmpty,
  isEmailFormatCorrect,
  isNameCorrect,
  isMessageCorrect,
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
      let result = true;

      // Name validation
      if (
        !isInputNotEmpty(nameInput, errorMessages[0], 'Name is required') ||
        !isNameCorrect(nameInput, errorMessages[0], 'Only latin letters')
      ) {
        result = false;
      } else {
        errorMessages[0].innerHTML = '';
      }

      // Email validation
      if (
        !isInputNotEmpty(emailInput, errorMessages[1], 'Email is required') ||
        !isEmailFormatCorrect(emailInput, errorMessages[1], 'Email is invalid')
      ) {
        result = false;
      } else {
        errorMessages[1].innerHTML = '';
      }

      // Subject validation
      if (
        !isInputNotEmpty(subjectInput, errorMessages[2], 'Subject is required')
      ) {
        result = false;
      } else {
        errorMessages[2].innerHTML = '';
      }

      // Message validation
      if (
        !isMessageCorrect(
            messageTextArea,
            errorMessages[3],
            'Message should have min 1m max 250 characters'
        )
      ) {
        result = false;
      } else {
        errorMessages[3].innerHTML = '';
      }

      // Send message
      if (result) {
        window.alert('Message sent');
        contactForm.reset();
      }
      return result;
    }
  });
}
