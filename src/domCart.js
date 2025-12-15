// import { cart } from './domMenu.js'

// skapar overlay
const button = document.querySelector('.cart');
button.textContent = 'klicka';

const overlay = document.createElement('div')
overlay.classList.add('overlay');

const content = document.createElement('div');
content.classList.add('overlay-content');
// content.textContent = 'Här är din varukorg';

const cart = [];

export function addToCart(item) {
  cart.push(item);
  console.log(cart);
}

function addCartInformation(cartInformation) {

  const cartWrapper = document.createElement('div');
  cartWrapper.classList.add('cart-wrapper');

  const Item = document.createElement('div');
  const Row = document.createElement('div');
  const Price = document.createElement('div');
  const cartInfoDiv = document.querySelector('.cart-display');


  Item.classList.add('cart-item');
  Row.classList.add('cart-row');
  Price.classList.add('cart-price');

  Item.innerText = cartInformation.name;
  Price.innerText = cartInformation.price + ' SEK';

  content.appendChild(Item);
  content.appendChild(Row);
  content.appendChild(Price);
  cartInfoDiv.appendChild(cartWrapper);

}

// funktion anropa funktionen när det ska köras
function updateCartInformation() {
  const cartDisplay = document.querySelector('.cart-display');
  cartDisplay.innerText = '',

    cart.forEach(entry => {
      addCartInformation(entry);
    });

}

//bild i högra hörnet
const cartImage = document.createElement('img');
cartImage.src = './img/sc'; //varför går det inte att skriva adressen?
cartImage.classList.add('overlay-cart-image');
content.appendChild(cartImage);

//ny div för items
const cartDisplay = document.createElement('div');
cartDisplay.classList.add('cart-display');
content.appendChild(cartDisplay);

// div för total
const totalDiv = document.createElement('div');
totalDiv.classList.add('overlay-total');
totalDiv.textContent = 'TOTALT inkl 20% moms';
content.appendChild(totalDiv);

//take my money-knapp
const payButton = document.createElement('button');
payButton.classList.add('overlay-pay-button');
payButton.textContent = 'TAKE MY MONEY!';
content.appendChild(payButton);

//tillbaka-knapp
const backButton = document.createElement('button');
backButton.classList.add('overlay-back-button');
backButton.textContent = 'Tillbaka till meny';

//?????????
content.appendChild(backButton);
overlay.appendChild(content);
document.body.appendChild(overlay);

//visa overlay
button.addEventListener('click', () => {
  overlay.classList.add('active');

  updateCartInformation();
})

//stäng via knapp
backButton.addEventListener('click', () => {
  overlay.classList.remove('active')
})


