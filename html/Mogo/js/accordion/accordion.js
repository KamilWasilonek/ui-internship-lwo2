import {components} from './components.js';
import {
  hideEveryPanel,
  showPanel,
  activeAccordion,
  deactivateAccordions,
  togglePannel,
} from './helper-functions.js';

export function addAccordionEffect() {
  components.then(
      ({
        accordionsList,
        panelsList,
        imgElement,
        accordionsContainer,
        images,
      }) => {
        activeAccordion(accordionsList[0]);
        showPanel(panelsList[0]);

        accordionsContainer.addEventListener('click', (event) => {
          let target = event.target;
          if (
            target.classList.contains('services__accordion') ||
          target.classList.contains('accordion__img') ||
          target.classList.contains('accordion__arrow')
          ) {
            if (!target.classList.contains('services__accordion')) {
              target = target.parentElement;
            }

            hideEveryPanel(panelsList);
            deactivateAccordions(accordionsList);

            target.classList.toggle('accordion--active');
            target
                .querySelector('.accordion__arrow')
                .classList.toggle('accordion__arrow--active');
            // eslint-disable-next-line no-param-reassign
            imgElement.src = images[target.dataset.id];

            const panelElement = target.nextElementSibling;
            togglePannel(panelElement);
          }
        });
      }
  );
}
