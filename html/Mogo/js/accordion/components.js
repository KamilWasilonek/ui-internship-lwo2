export const components = new Promise((resolve) => {
  document.addEventListener('DOMContentLoaded', () => {
    const accordion = document.getElementsByClassName('accordion');
    const panelElements = document.getElementsByClassName('services__panel');
    const imgElement = document.querySelector('.services__img');

    resolve({
      accordion,
      panelElements,
      imgElement,
    });
  });
});
