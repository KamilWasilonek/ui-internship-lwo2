/* eslint-disable no-useless-escape */
/* eslint-disable max-len */
export function isInputNotEmpty(input, errorInput, errorMessage) {
  const localErrorInput = errorInput;
  if (input.value.trim().length === 0) {
    localErrorInput.textContent = errorMessage;
    return false;
  }
  return true;
}

export function isNameCorrect(input, errorInput, errorMessage) {
  const nameRegex = /^[a-zA-Z]+$/g;
  const localErrorInput = errorInput;
  if (!input.value.trim().match(nameRegex)) {
    localErrorInput.textContent = errorMessage;
    return false;
  }
  return true;
}

export function isMessageCorrect(input, errorInput, errorMessage) {
  const localErrorInput = errorInput;
  if (input.value.trim().length < 1 || input.value.trim().length > 255) {
    localErrorInput.textContent = errorMessage;
    return false;
  }
  return true;
}

export function isEmailFormatCorrect(input, errorInput, errorMessage) {
  const localErrorInput = errorInput;
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!input.value.trim().match(emailRegex) || input.value.trim().length < 6) {
    localErrorInput.textContent = errorMessage;
    return false;
  }
  return true;
}

export function isPasswordCorrect(input, errorInput, errorMessage) {
  const localErrorInput = errorInput;
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
  if (!input.value.trim().match(passwordRegex)) {
    localErrorInput.textContent = errorMessage;
    return false;
  }
  return true;
}
