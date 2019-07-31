export const components = new Promise((resolve) => {
  document.addEventListener('DOMContentLoaded', () => {
    const accordionsList = document.getElementsByClassName('accordion');
    const panelsList = document.getElementsByClassName('services__panel');
    const imgElement = document.querySelector('.services__img');
    const accordionsContainer = document.querySelector('.services__container');

    const images = [
      './assests/images/services/img-0.jpg',
      './assests/images/services/img-1.jpg',
      './assests/images/services/img-2.jpg',
    ];

    resolve({
      accordionsList,
      panelsList,
      imgElement,
      accordionsContainer,
      images,
    });
  });
});
