import {
  checkEmail,
  checkName,
  checkPassword,
  checkFormStatus,
  disableSubmitButton,
} from './helper-functions.js';
import {components} from './components.js';

export function validateContactForm() {
  components.then((response) => {
    const {
      contactForm,
      errorMessages,
      nameInput,
      emailInput,
      passwordInput,
      submitBtn,
    } = response;

    contactForm.addEventListener('submit', function() {
      event.preventDefault();
      window.alert('Message sent');
      contactForm.reset();
      disableSubmitButton(submitBtn);
    });

    let result = [];
    contactForm.addEventListener('focusout', (event) => {
      let target = event.target;
      if (target.tagName === 'INPUT') {
        let fieldName = target.name;
        if (fieldName === 'username') {
          result[0] = checkName(nameInput, errorMessages[0]);
        } else if (fieldName === 'email') {
          result[1] = checkEmail(emailInput, errorMessages[1]);
        } else if (fieldName === 'password') {
          result[2] = checkPassword(passwordInput, errorMessages[2]);
        }
        checkFormStatus(result, submitBtn);
      }
    });
  });
}
