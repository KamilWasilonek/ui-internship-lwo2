import {checkName, checkEmail, checkPassword} from '../helper-functions.js';
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

    function validateBannerForm() {
      let result = [];

      // Name validation
      result.push(checkName(nameInput, errorMessages[0]));

      // Email validation
      result.push(checkEmail(emailInput, errorMessages[1]));

      // Password validation
      result.push(checkPassword(passwordInput, errorMessages[2]));

      // Send message
      if (!result.includes(false)) {
        window.alert('Message sent');
        bannerForm.reset();
      }
      return result;
    }
  });
}
