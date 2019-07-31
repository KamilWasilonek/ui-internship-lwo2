/* eslint-disable max-len */
import {validateContactForm} from '../helper-functions.js';

import {components} from './contact-components.js';

export function addContactFormValidation() {
  components.then((response) => {
    response.contactForm.addEventListener('submit', () => {
      event.preventDefault();
      validateContactForm(response);
    });
  });
}
