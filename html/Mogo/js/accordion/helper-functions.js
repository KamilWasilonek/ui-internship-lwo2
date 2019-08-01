function hideEveryPanel(panelsList) {
  for (let i = 0; i < panelsList.length; i++) {
    hidePanel(panelsList[i]);
  }
}

function deactivateAccordions(accordionsList) {
  for (let i = 0; i < accordionsList.length; i++) {
    accordionsList[i].classList.remove('accordion--active');
    accordionsList[i]
        .querySelector('.accordion__arrow')
        .classList.remove('accordion__arrow--active');
  }
}

function activateAccordion(accordion) {
  accordion.classList.add('accordion--active');
  accordion
      .querySelector('.accordion__arrow')
      .classList.add('accordion__arrow--active');
}

function hidePanel(panelElement) {
  panelElement.classList.remove('services__panel--active');
}

function showPanel(panelElement) {
  panelElement.classList.add('services__panel--active');
}

function togglePannel(panelElement) {
  if (panelElement.style.maxHeight) {
    hidePanel(panelElement);
  } else {
    showPanel(panelElement);
  }
}

export {
  hideEveryPanel,
  hidePanel,
  deactivateAccordions,
  showPanel,
  activateAccordion,
  togglePannel,
};
