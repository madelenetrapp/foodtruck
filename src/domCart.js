// skapar overlay
const button = document.querySelector('.cart');
button.textContent = 'klicka';

const overlay = document.createElement('div')
overlay.classList.add('overlay');

const content = document.createElement('div');
content.classList.add('overlay-content');

//ok?
// const cartDisplay = document.createElement('div');
// cartDisplay.classList.add('cart-display');
// overlayContent.appendChild(cartDisplay);


// content.textContent = 'Här är din varukorg';

//tillbaka-knapp
const backButton = document.createElement('button');
backButton.classList.add('overlay-back-button');
backButton.textContent = 'Tillbaka till meny';
content.appendChild(backButton);

overlay.appendChild(content);
document.body.appendChild(overlay);

//visa overlay
button.addEventListener('click', () => {
  overlay.classList.add('active');
})

//stäng via knapp
backButton.addEventListener('click', () => {
  overlay.classList.remove('active')
})


