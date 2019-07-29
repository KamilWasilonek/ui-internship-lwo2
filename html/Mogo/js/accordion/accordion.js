import {components} from './components.js';
import {hideEveryPanel, hidePanel, showPanel} from './helper-functions.js';

export function addAccordionEffect() {
  components.then((response) => {
    const {accordion, panelElements, imgElement} = response;

    let visibleAccordionId = null;
    let currentClickedAccorionId = null;

    for (let i = 0; i < accordion.length; i++) {
      accordion[i].addEventListener('click', (event) => {
        currentClickedAccorionId = event.target.id;
        hideEveryPanel(panelElements, accordion);

        if (currentClickedAccorionId !== visibleAccordionId) {
          event.target.classList.toggle('accordion--active');
          event.target.children[1].classList.toggle('accordion__arrow--active');
          imgElement.src = './assests/images/services/img-' + i + '.jpg';

          const panelElement = event.target.nextElementSibling;

          if (panelElement.style.maxHeight) {
            hidePanel(panelElement);
          } else {
            showPanel(panelElement);
          }
          visibleAccordionId = event.target.id;
        } else {
          visibleAccordionId = null;
          currentClickedAccorionId = null;
        }
      });
    }
  });
}
