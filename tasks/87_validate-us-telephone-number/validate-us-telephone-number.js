/* eslint-disable no-useless-escape */
export function telephoneCheck(telephone) {
  // eslint-disable-next-line max-len
  let regex = /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/g;
  return regex.test(telephone);
}
