function checkName(nameInput) {
  let emptyResult = isInputNotEmpty(nameInput);
  let formatResult = isNameCorrect(nameInput);
  if (emptyResult.length !== 0) {
    return emptyResult;
  } else if (formatResult.length !== 0) {
    return formatResult;
  }
  return '';
}

function checkEmail(emailInput) {
  let emptyResult = isInputNotEmpty(emailInput);
  let formatResult = isEmailFormatCorrect(emailInput);
  if (emptyResult.length !== 0) {
    return emptyResult;
  } else if (formatResult.length !== 0) {
    return formatResult;
  }
  return '';
}

function checkPassword(passwordInput) {
  let emptyResult = isInputNotEmpty(passwordInput);
  let formatResult = isPasswordCorrect(passwordInput);
  if (emptyResult.length !== 0) {
    return emptyResult;
  } else if (formatResult.length !== 0) {
    return formatResult;
  }
  return '';
}

function checkSubject(subjectInput) {
  let emptyResult = isInputNotEmpty(subjectInput);
  if (emptyResult.length !== 0) {
    return emptyResult;
  }
  return '';
}

function checkMessage(messageTextArea) {
  let emptyResult = isInputNotEmpty(messageTextArea);
  let formatResult = isMessageCorrect(messageTextArea);
  if (emptyResult.length !== 0) {
    return emptyResult;
  } else if (formatResult.length !== 0) {
    return formatResult;
  }
  return '';
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

function isMessageCorrect(input) {
  if (input.value.trim().length < 1 || input.value.trim().length > 255) {
    return 'Message should have min 1m max 250 characters';
  }
  return '';
}

function isEmailFormatCorrect(input) {
  // eslint-disable-next-line max-len
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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

export function findErrorElement(errorMessagesElements, errorName) {
  return Array.from(errorMessagesElements).find(function(element) {
    return element.dataset.errorName === errorName;
  });
}

function setError(error, message) {
  // eslint-disable-next-line no-param-reassign
  error.innerHTML = message;
}

function showInputStatus(validationResult, errorMessagesElements, fieldName) {
  const error = findErrorElement(errorMessagesElements, fieldName);
  setError(error, validationResult);
  if (validationResult.length !== 0) {
    return false;
  } else {
    return true;
  }
}

export function validateRegistrationForm({
  bannerForm,
  errorMessagesElements,
  nameInput,
  emailInput,
  passwordInput,
}) {
  let result = {
    isNameValid: true,
    isEmailValid: true,
    isPasswordValid: true,
  };

  // Name validation
  const nameValidationResult = checkName(nameInput);
  // eslint-disable-next-line max-len
  result.isNameValid = showInputStatus(
      nameValidationResult,
      errorMessagesElements,
      'username'
  );

  // Email validation
  const emailValidationResult = checkEmail(emailInput);
  // eslint-disable-next-line max-len
  result.isEmailValid = showInputStatus(
      emailValidationResult,
      errorMessagesElements,
      'email'
  );

  // Password validation
  const passwordValidationResult = checkPassword(passwordInput);
  result.isPasswordValid = showInputStatus(
      passwordValidationResult,
      errorMessagesElements,
      'password'
  );

  // Send message
  if (!Object.values(result).includes(false)) {
    window.alert('Message sent');
    bannerForm.reset();
  }
}

export function validateContactForm({
  contactForm,
  errorMessagesElements,
  nameInput,
  emailInput,
  subjectInput,
  messageTextArea,
}) {
  let result = {
    isNameValid: true,
    isEmailValid: true,
    isSubjectValid: true,
    isMessageValid: true,
  };

  // Name validation
  const nameValidationResult = checkName(nameInput);
  // eslint-disable-next-line max-len
  result.isNameValid =
      showInputStatus(nameValidationResult, errorMessagesElements, 'username')
  ;

  // Email validation
  const emailValidationResult = checkEmail(emailInput);
  // eslint-disable-next-line max-len
  result.isEmailValid =
      showInputStatus(emailValidationResult, errorMessagesElements, 'email')
  ;

  // Subject validation
  const subjectValidationResult = checkSubject(subjectInput);
  result.isSubjectValid =
      showInputStatus(subjectValidationResult, errorMessagesElements, 'subject')
  ;

  // Message validation
  const messageValidationResult = checkMessage(messageTextArea);
  result.isMessageValid =
      showInputStatus(messageValidationResult, errorMessagesElements, 'message')
  ;

  // Send message
  if (!Object.values(result).includes(false)) {
    window.alert('Message sent');
    contactForm.reset();
  }
}
