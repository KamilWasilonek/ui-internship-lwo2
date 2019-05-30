export function titleCase(textToTransform) {
  return textToTransform.toLowerCase()
      .split(' ')
      .map((item) => {
        return item = item.charAt().toUpperCase() + item.slice(1);
      })
      .join(' ');
}
