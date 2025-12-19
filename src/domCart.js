import { etaOverlay, etaTime } from './domEta.js';
import { sendOrderRequest } from './api.js';

// skapar overlay
const button = document.querySelector('.cart');
button.textContent = 'klicka';

const overlay = document.createElement('div');
overlay.classList.add('overlay');

const content = document.createElement('div');
content.classList.add('overlay-content');
document.body.appendChild(overlay);

// cart hur den ser ut
const cart = [];
export function addToCart(item) {
  cart.push(item);
  console.log(cart);
}

// cart function
function addCartInformation(cartInformation) {
  const amount = cartInformation.length;
  const firstItem = cartInformation[0];

  const cartWrapper = document.createElement('div');
  cartWrapper.classList.add('cart-wrapper');

  // rad 1: namn + pris
  const namePriceRow = document.createElement('div');
  namePriceRow.classList.add('name-price-row');

  //item namn i varukorgen
  const itemDiv = document.createElement('div');
  itemDiv.classList.add('cart-item-name');
  itemDiv.textContent = firstItem.name;

  //item pris i varukorgen
  const priceDiv = document.createElement('div');
  priceDiv.classList.add('cart-item-price');
  priceDiv.textContent = firstItem.price + ' SEK';

  namePriceRow.appendChild(itemDiv);
  namePriceRow.appendChild(priceDiv);

  // rad 2: knappar + antal
  const buttonRow = document.createElement('div');
  buttonRow.classList.add('button-row');

  //minus knapp
  const minusButton = document.createElement('button');
  minusButton.textContent = '-';

  //hur många items
  const amountSpan = document.createElement('span');
  amountSpan.classList.add('item-amount');
  amountSpan.textContent = `${amount} stycken`;

  //plus knapp
  const plusButton = document.createElement('button');
  plusButton.textContent = '+';

  //refresh
  plusButton.addEventListener('click', () => {
    cart.push(firstItem);
    refreshCartView();
  });

  //minus knapp
  minusButton.addEventListener('click', () => {
    const index = cart.findIndex(item => item.id === firstItem.id);
    if (index !== -1) {
      cart.splice(index, 1);
      refreshCartView();
    }
  });

  buttonRow.appendChild(plusButton);
  buttonRow.appendChild(amountSpan);
  buttonRow.appendChild(minusButton);

  cartWrapper.appendChild(namePriceRow);
  cartWrapper.appendChild(buttonRow);

  document.querySelector('.cart-display').appendChild(cartWrapper);
}

// refresh visa totalen
function refreshCartView() {
  const orderdItems = identifyOrderdItems();
  updateCartInformation(orderdItems);

  const total = calculateTotal(cart);
  const totalWithVat = total * 1.2;
  totalDiv.textContent = `TOTALT (inkl 20% moms): ${totalWithVat.toFixed(2)} SEK`;
}

//uppdatera varukorg med items
function updateCartInformation(items) {
  const cartDisplay = document.querySelector('.cart-display');
  cartDisplay.innerText = '';

  for (const item in items) {
    addCartInformation(items[item]);
  }
}

//bild
const cartImage = document.createElement('img');
cartImage.classList.add('overlay-cart-image');
content.appendChild(cartImage);

//cart-display
const cartDisplay = document.createElement('div');
cartDisplay.classList.add('cart-display');
content.appendChild(cartDisplay);

//total-overlay
const totalDiv = document.createElement('div');
totalDiv.classList.add('overlay-total');
content.appendChild(totalDiv);

//räkna ut totalen
function calculateTotal(cart) {
  return cart.reduce((sum, item) => sum + item.price, 0);
}

//betal knapp med text
const payButton = document.createElement('button');
payButton.classList.add('overlay-pay-button');
payButton.textContent = 'TAKE MY MONEY!';
content.appendChild(payButton);

//btal knapp
payButton.addEventListener('click', async () => {
  overlay.classList.remove('active');
  etaOverlay.classList.add('active');

  if (!cart.length) return;

  const orderResponse = await sendOrderRequest(cart);
  if (!orderResponse) return;

  etaTime.textContent = `ETA ${orderResponse.etaMinutes} MIN`;
});

//tillbaka till menyn
const backButton = document.createElement('button');
backButton.classList.add('overlay-back-button');
backButton.textContent = 'Tillbaka till meny';
content.appendChild(backButton);

overlay.appendChild(content);
document.body.appendChild(overlay);

//beställda items identifiera id
function identifyOrderdItems() {
  const items = {};
  cart.forEach(item => {
    if (!items[item.id]) items[item.id] = [];
    items[item.id].push(item);
  });
  return items;
}

//overlay click refresh
button.addEventListener('click', () => {
  overlay.classList.add('active');
  refreshCartView();
});

//overlay backbutton click refresh
backButton.addEventListener('click', () => {
  overlay.classList.remove('active');
});
