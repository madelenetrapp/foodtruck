//overlay 2
// --- DOM ETA OVERLAY ---
const etaOverlay = document.createElement('div');
etaOverlay.classList.add('overlay', 'eta-overlay');

const etaContent = document.createElement('div');
etaContent.classList.add('overlay-content');

const etaTitle = document.createElement('h2');
etaTitle.textContent = 'DINA WONTONS TILLAGAS!';

const etaTime = document.createElement('p');
etaTime.textContent = 'ETA ... MIN';

etaContent.append(etaTitle, etaTime);
etaOverlay.appendChild(etaContent);
document.body.appendChild(etaOverlay);

export { etaOverlay, etaTime };

function getItemIds(items) {
  return Object.values(items)
  .flat()
  .map(item => item.id);
}
//lägg till ETA och text

// etaContent.appendChild(etaText);

// const eta = await fetchEta();
// etaText.textContent = 'ETA ${eta} MIN';

