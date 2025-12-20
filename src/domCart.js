import { etaOverlay, etaTime } from './domEta.js';
import { calculateEtaMinutes } from './domEta.js';
import { sendOrderRequest } from './api.js';


// cart array
const cart = [];

// overlay
const cartButton = document.querySelector('.cart');
const overlay = document.createElement('div');
overlay.classList.add('overlay');
const content = document.createElement('div');
content.classList.add('overlay-content');
document.body.appendChild(overlay);

// counter på cart-knappen
const counter = document.createElement('span');
counter.className = 'cart-counter';
counter.textContent = '0'; 
cartButton.appendChild(counter);

// update counter
export function addToCart(item) {
  cart.push(item);
  counter.textContent = cart.length;
  refreshCartView();
  console.log(cart);
}

// eta-overlay backbutton
etaOverlay.addEventListener('click', () => etaOverlay.classList.remove('active'));

// cart image
const cartImage = document.createElement('img');
cartImage.classList.add('overlay-cart-image');
content.appendChild(cartImage);

// cart-display
const cartDisplay = document.createElement('div');
cartDisplay.classList.add('cart-display');
content.appendChild(cartDisplay);

// total
const totalDiv = document.createElement('div');
totalDiv.classList.add('overlay-total');
content.appendChild(totalDiv);

// pay button
const payButton = document.createElement('button');
payButton.classList.add('overlay-pay-button');
payButton.textContent = 'TAKE MY MONEY!';
content.appendChild(payButton);

payButton.addEventListener('click', async () => {
  overlay.classList.remove('active');
  etaOverlay.classList.add('active');
  if (!cart.length) return;
  const orderResponse = await sendOrderRequest(cart);
console.log(orderResponse);

  if (!orderResponse) return;

  ///
  const etaMinutes = calculateEtaMinutes(orderResponse.order.eta);
  etaTime.textContent = `ETA ${orderResponse.etaMinutes} MIN`;
});

overlay.appendChild(content);
document.body.appendChild(overlay);

// cart funktioner
function addCartInformation(cartInformation) {
  const firstItem = cartInformation[0];

  const amount = cart.filter(i => i.id === firstItem.id).length;

  const cartWrapper = document.createElement('div');
  cartWrapper.classList.add('cart-wrapper');

  const namePriceRow = document.createElement('div');
  namePriceRow.classList.add('name-price-row');

  const itemDiv = document.createElement('div');
  itemDiv.classList.add('cart-item-name');
  itemDiv.textContent = firstItem.name;

  const priceDiv = document.createElement('div');
  priceDiv.classList.add('cart-item-price');
  priceDiv.textContent = firstItem.price + ' SEK';

  namePriceRow.append(itemDiv, priceDiv);

  const buttonRow = document.createElement('div');
  buttonRow.classList.add('button-row');

  const minusButton = document.createElement('button');
  minusButton.textContent = '-';

  const amountSpan = document.createElement('span');
  amountSpan.classList.add('item-amount');
  amountSpan.textContent = `${amount} stycken`;

  const plusButton = document.createElement('button');
  plusButton.textContent = '+';

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

  buttonRow.append(plusButton, amountSpan, minusButton);
  cartWrapper.append(namePriceRow, buttonRow);
  cartDisplay.appendChild(cartWrapper);
}

//räka ut totalen
function refreshCartView() {
  const orderedItems = identifyOrderedItems();
  updateCartInformation(orderedItems);

  counter.textContent = cart.length;

  const total = calculateTotal(cart);
  totalDiv.textContent = '';

  const left = document.createElement('div');
  left.className = 'block1';
  const title = document.createElement('div');
  title.className = 'titel';
  title.textContent = 'TOTAL';
  const subtitle = document.createElement('div');
  subtitle.className = 'subtitel';
  subtitle.textContent = 'inkl 20% moms';
  left.append(title, subtitle);

  const right = document.createElement('div');
  right.className = 'block2';
  right.textContent = `${total.toFixed(2)} SEK`;

  totalDiv.append(left, right);
}

//uppdatera cart
function updateCartInformation(items) {
  cartDisplay.innerHTML = '';
  for (const item in items) addCartInformation(items[item]);
}

//räkna totalen
function calculateTotal(cart) {
  return cart.reduce((sum, item) => sum + item.price, 0);
}

//identifiera items
function identifyOrderedItems() {
  const items = {};
  cart.forEach(item => {
    if (!items[item.id]) items[item.id] = [];
    items[item.id].push(item);
  });
  return items;
}

// öppna overlay
cartButton.addEventListener('click', () => {
  overlay.classList.add('active');
  refreshCartView();
});
