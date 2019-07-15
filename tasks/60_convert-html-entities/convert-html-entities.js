export function convertHTML(str) {
  const signs = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;',
  };
  [...str].forEach((letter) => {
    for (let sign in signs) {
      if (sign === letter) {
        // eslint-disable-next-line no-param-reassign
        str = str.replace(letter, signs[sign]);
      }
    }
  });
  return str;
}

