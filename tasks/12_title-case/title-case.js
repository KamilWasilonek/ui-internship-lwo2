export function titleCase(textToTransform) {
  return textToTransform.toLowerCase()
      .split(' ')
      .map((item) => {
        // eslint-disable-next-line no-param-reassign
        return item = item.charAt().toUpperCase() + item.slice(1);
      })
      .join(' ');
}
