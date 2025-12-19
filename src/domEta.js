//overlay 2

// overlay
const etaOverlay = document.createElement('div');
etaOverlay.classList.add('overlay', 'eta-overlay');

//innehåll overlay
const etaContent = document.createElement('div');
etaContent.classList.add('overlay-content');

//texi i div
const etaTitle = document.createElement('h2');
etaTitle.textContent = 'DINA WONTONS TILLAGAS!';

//texi till API
const etaTime = document.createElement('p');
etaTime.textContent = 'ETA ... MIN';

etaContent.append(etaTitle, etaTime);
etaOverlay.appendChild(etaContent);
document.body.appendChild(etaOverlay);

export { etaOverlay, etaTime }

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

