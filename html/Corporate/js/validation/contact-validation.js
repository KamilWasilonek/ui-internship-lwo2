import {
  checkEmail,
  checkName,
  checkPassword,
  checkFormStatus,
  disableSubmitButton,
  showInputStatus,
} from './helper-functions.js';
import {components} from './components.js';

export function validateContactForm() {
  components.then((response) => {
    const {
      contactForm,
      errorMessagesElements,
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

    let result = {
      isNameValid: false,
      isEmailValid: false,
      isPasswordValid: false,
    };
    contactForm.addEventListener('focusout', (event) => {
      let target = event.target;
      if (target.tagName === 'INPUT') {
        let fieldName = target.name;
        if (fieldName === 'username') {
          const nameValidationResult = checkName(nameInput);
          // eslint-disable-next-line max-len
          result.isNameValid = showInputStatus(
              nameValidationResult,
              errorMessagesElements,
              'username'
          );
        } else if (fieldName === 'email') {
          const emailValidationResult = checkEmail(emailInput);
          // eslint-disable-next-line max-len
          result.isEmailValid = showInputStatus(
              emailValidationResult,
              errorMessagesElements,
              'email'
          );
        } else if (fieldName === 'password') {
          const passwordValidationResult = checkPassword(passwordInput);
          result.isPasswordValid = showInputStatus(
              passwordValidationResult,
              errorMessagesElements,
              'password'
          );
        }
        checkFormStatus(result, submitBtn);
      }
    });
  });
}
