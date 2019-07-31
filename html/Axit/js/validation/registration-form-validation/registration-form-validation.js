/* eslint-disable max-len */
import {validateRegistrationForm} from '../helper-functions.js';
import {components} from './registration-components.js';

export function addRegistrationFormValidation() {
  components.then(
      (response) => {
        response.bannerForm.addEventListener('submit', () => {
          event.preventDefault();
          validateRegistrationForm(response);
        });
      }
  );
}
