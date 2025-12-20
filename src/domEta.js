import { resetCart } from './domCart.js';

const etaOverlay = document.createElement('div');
etaOverlay.classList.add('overlay', 'eta-overlay');

const etaContent = document.createElement('div');
etaContent.classList.add('eta-overlay-content');

const wontonImage = document.createElement('img');
wontonImage.src = 'img/boxtop.svg';

wontonImage.classList.add('wonton-header-image');

etaContent.prepend(wontonImage);

const etaTitle = document.createElement('h2');
etaTitle.textContent = 'DINA WONTONS';
etaTitle.classList.add('eta-title');

const etaTime = document.createElement('p');
etaTime.textContent = 'ETA ... MIN';

let etaInterval;

const etaOrderId = document.createElement('p');
etaOrderId.classList.add('eta-order-id');

etaContent.append(etaTitle, etaTime);
etaContent.appendChild(etaOrderId);
etaOverlay.appendChild(etaContent);
document.body.appendChild(etaOverlay);

export { etaOverlay, etaTime, etaOrderId }

const newOrderButtan = document.createElement('button');
newOrderButtan.textContent = 'GÖR EN NY BESTÄLLNING';
newOrderButtan.classList.add('eta-new-order-button');

etaContent.appendChild(newOrderButtan);

newOrderButtan.addEventListener('click', () => {
  etaOverlay.classList.remove('active');
  document.body.classList.remove('overlay-active');

  resetCart();
})

function getItemIds(items) {
  return Object.values(items)
    .flat()
    .map(item => item.id);
}

etaContent.addEventListener('click', e => {
  e.stopPropagation();
});

export function calculateEtaMinutes(etaIsoString) { 
  const now = new Date();
  const eta = new Date(etaIsoString);

  const diffMs = eta - now;         
  return Math.ceil(diffMs / 60000); 
}



