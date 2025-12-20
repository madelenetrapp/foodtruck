//overlay 2

// overlay
const etaOverlay = document.createElement('div');
etaOverlay.classList.add('overlay', 'eta-overlay');

//innehåll overlay
const etaContent = document.createElement('div');
etaContent.classList.add('eta-overlay-content');

//bild till wonton tillagas
const wontonImage = document.createElement('img');
wontonImage.src = 'img/boxtop.svg'; 

// wontonImage.alt = 'Dina wonton tillagas';
wontonImage.classList.add('wonton-header-image'); 

// Lägg bilden överst i etaContent, innan rubrik
etaContent.prepend(wontonImage);

//texi i div
const etaTitle = document.createElement('h2');
etaTitle.textContent = 'DINA WONTONS';
etaTitle.classList.add('eta-title');

//texi till API
const etaTime = document.createElement('p');
etaTime.textContent = 'ETA ... MIN';

etaContent.append(etaTitle, etaTime);
etaOverlay.appendChild(etaContent);
document.body.appendChild(etaOverlay);

export { etaOverlay, etaTime }

//ny beställning button
const newOrderButtan = document.createElement('button');
newOrderButtan.textContent = 'GÖR EN NY BESTÄLLNING';
newOrderButtan.classList.add('eta-new-order-button');

etaContent.appendChild(newOrderButtan);

//klick stänga overlay- START NEW GAME HAHAHAHA
newOrderButtan.addEventListener('click', () => {
  etaOverlay.classList.remove('active');
})

//funktion API hämta id
function getItemIds(items) {
  return Object.values(items)
  .flat()
  .map(item => item.id);
}

//stoppa cklick (kunna komma tillbaka till vy1 genom att klicka på kundkorgen)
etaContent.addEventListener('click', e => {
  e.stopPropagation();
});


//lägg till ETA och text

// etaContent.appendChild(etaText);

// const eta = await fetchEta();
// etaText.textContent = 'ETA ${eta} MIN';

