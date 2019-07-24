/* eslint-disable max-len */
import {
  isInputNotEmpty,
  isEmailFormatCorrect,
  isPasswordCorrect,
  isNameCorrect,
} from '../helper-functions.js';

import {components} from './banner-components.js';

export function addBannerFormValidation() {
  components.then((response) => {
    const {
      bannerForm,
      errorMessages,
      nameInput,
      emailInput,
      passwordInput,
    } = response;

    bannerForm.addEventListener('submit', () => {
      event.preventDefault();
      validateBannerForm();
    });

    function validateBannerForm(inputToCheck) {
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

      // Password validation
      if (
        !isInputNotEmpty(
            passwordInput,
            errorMessages[2],
            'Password is required'
        ) ||
        !isPasswordCorrect(
            passwordInput,
            errorMessages[2],
            'Min 6 characters, required: 1 capital letter, 1 lower-case letter, 1 digit, 1 special character'
        )
      ) {
        result = false;
      } else {
        errorMessages[2].innerHTML = '';
      }

      // Send message
      if (result) {
        window.alert('Message sent');
        bannerForm.reset();
      }
      return result;
    }
  });
}

