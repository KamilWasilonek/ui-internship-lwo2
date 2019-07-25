/* eslint-disable no-useless-escape */
/* eslint-disable max-len */
export function checkName(nameInput, error) {
  const localError = error;
  if (
    !isInputNotEmpty(nameInput, error, 'Name is required') ||
    !isNameCorrect(nameInput, error, 'Only latin letters')
  ) {
    return false;
  }
  localError.innerHTML = '';
  return true;
}

export function checkEmail(emailInput, error) {
  const localError = error;
  if (
    !isInputNotEmpty(emailInput, error, 'Email is required') ||
    !isEmailFormatCorrect(emailInput, error, 'Email is invalid')
  ) {
    return false;
  }
  localError.innerHTML = '';
  return true;
}

export function checkPassword(passwordInput, error) {
  const localError = error;
  if (
    !isInputNotEmpty(passwordInput, error, 'Password is required') ||
    !isPasswordCorrect(
        passwordInput,
        error,
        'Min 6 characters, required: 1 capital letter, 1 lower-case letter, 1 digit, 1 special character'
    )
  ) {
    return false;
  }
  localError.innerHTML = '';
  return true;
}

export function checkSubject(subjectInput, error) {
  const localError = error;
  if (!isInputNotEmpty(subjectInput, error, 'Subject is required')) {
    return false;
  }
  localError.innerHTML = '';
  return true;
}

export function checkMessage(messageTextArea, error) {
  const localError = error;
  if (
    !isMessageCorrect(
        messageTextArea,
        error,
        'Message should have min 1m max 250 characters'
    )
  ) {
    return false;
  }
  localError.innerHTML = '';
  return true;
}

function isInputNotEmpty(input, errorInput, errorMessage) {
  const localErrorInput = errorInput;
  if (input.value.trim().length === 0) {
    localErrorInput.textContent = errorMessage;
    return false;
  }
  return true;
}

function isNameCorrect(input, errorInput, errorMessage) {
  const nameRegex = /^[a-zA-Z]+$/g;
  const localErrorInput = errorInput;
  if (!input.value.trim().match(nameRegex)) {
    localErrorInput.textContent = errorMessage;
    return false;
  }
  return true;
}

function isMessageCorrect(input, errorInput, errorMessage) {
  const localErrorInput = errorInput;
  if (input.value.trim().length < 1 || input.value.trim().length > 255) {
    localErrorInput.textContent = errorMessage;
    return false;
  }
  return true;
}

function isEmailFormatCorrect(input, errorInput, errorMessage) {
  const localErrorInput = errorInput;
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!input.value.trim().match(emailRegex) || input.value.trim().length < 6) {
    localErrorInput.textContent = errorMessage;
    return false;
  }
  return true;
}

function isPasswordCorrect(input, errorInput, errorMessage) {
  const localErrorInput = errorInput;
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
  if (!input.value.trim().match(passwordRegex)) {
    localErrorInput.textContent = errorMessage;
    return false;
  }
  return true;
}
