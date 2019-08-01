export function checkName(nameInput) {
  let emptyResult = isInputNotEmpty(nameInput);
  let formatResult = isNameCorrect(nameInput);
  if (emptyResult.length !== 0) {
    return emptyResult;
  } else if (formatResult.length !== 0) {
    return formatResult;
  }
  return '';
}

export function checkEmail(emailInput) {
  let emptyResult = isInputNotEmpty(emailInput);
  let formatResult = isEmailFormatCorrect(emailInput);
  if (emptyResult.length !== 0) {
    return emptyResult;
  } else if (formatResult.length !== 0) {
    return formatResult;
  }
  return '';
}

export function checkPassword(passwordInput) {
  let emptyResult = isInputNotEmpty(passwordInput);
  let formatResult = isPasswordCorrect(passwordInput);
  if (emptyResult.length !== 0) {
    return emptyResult;
  } else if (formatResult.length !== 0) {
    return formatResult;
  }
  return '';
}

export function findErrorElement(errorMessagesElements, errorName) {
  return Array.from(errorMessagesElements).find(function(element) {
    return element.dataset.errorName === errorName;
  });
}

function setError(error, message) {
  // eslint-disable-next-line no-param-reassign
  error.innerHTML = message;
}

export function showInputStatus(
    validationResult,
    errorMessagesElements,
    fieldName
) {
  const error = findErrorElement(errorMessagesElements, fieldName);
  setError(error, validationResult);
  if (validationResult.length !== 0) {
    return false;
  } else {
    return true;
  }
}

export function disableSubmitButton(button) {
  // eslint-disable-next-line no-param-reassign
  button.disabled = true;
  button.classList.add('contact-form__submit--disabled');
}

export function enableSubmitButton(button) {
  // eslint-disable-next-line no-param-reassign
  button.disabled = false;
  button.classList.remove('contact-form__submit--disabled');
}

export function checkFormStatus(result, button) {
  if (!Object.values(result).includes(false)) {
    enableSubmitButton(button);
  } else {
    disableSubmitButton(button);
  }
}

function isInputNotEmpty(input) {
  if (input.value.trim().length === 0) {
    return 'This field is required';
  }
  return '';
}

function isNameCorrect(input) {
  const nameRegex = /^[a-zA-Z]+$/g;
  if (!input.value.trim().match(nameRegex)) {
    return 'Only latin letters';
  }
  return '';
}

function isEmailFormatCorrect(input) {
  // eslint-disable-next-line max-len
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!input.value.trim().match(emailRegex) || input.value.trim().length < 6) {
    return 'Email is invalid';
  }
  return '';
}

function isPasswordCorrect(input) {
  // eslint-disable-next-line max-len
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
  if (!input.value.trim().match(passwordRegex)) {
    // eslint-disable-next-line max-len
    return 'Min 6 characters, required: 1 capital letter, 1 lower-case letter, 1 digit, 1 special character';
  }
  return '';
}
