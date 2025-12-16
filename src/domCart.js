// import { cart } from './domMenu.js'

// skapar overlay
const button = document.querySelector('.cart');
button.textContent = 'klicka';

const overlay = document.createElement('div')
overlay.classList.add('overlay');

const content = document.createElement('div');
content.classList.add('overlay-content');
// content.textContent = 'Här är din varukorg';

//lägger till item i cart TODO
const cart = [];

export function addToCart(item) {
  cart.push(item);
  console.log(cart);
  identifyOrderdItems();
  updateCartInformation();
}
//skapar och fyller divar till varukorgen
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

// funktion anropa funktionen när det ska köras TODO
function updateCartInformation() {
  const cartDisplay = document.querySelector('.cart-display');
  cartDisplay.innerText = '',

    Object.keys(orderdItems).forEach(category => {
      orderdItems[category].forEach(item => {
        addCartInformation(item);
      })
    });
}

//container för + och - knapparna
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');

content.appendChild(buttonContainer);
//ANVÄNDER APPENDcHILDE FÖR ATT LÄGGA TILL BUTTONCONTAINER I DOM??

//knapp för fler antal items
const itemSelected = document.createElement('button');
itemSelected.textContent = '+';
itemSelected.classList.add('item-selected');
buttonContainer.appendChild(itemSelected);

//knapp för färre antal items
const itemDismissed = document.createElement('button');
itemDismissed.textContent = '-';
itemDismissed.classList.add('item-dismissed');
buttonContainer.appendChild(itemDismissed);


//bild i högra hörnet
const cartImage = document.createElement('img');
cartImage.src = './img/sc'; //varför går det inte att skriva adressen?
cartImage.classList.add('overlay-cart-image');
content.appendChild(cartImage);

//ny div för items
const cartDisplay = document.createElement('div');
cartDisplay.classList.add('cart-display');
content.appendChild(cartDisplay);   //deklarera före användning?

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
document.body.appendChild(overlay);  //BODY??

//struktur för orderd items TODO
const orderdItems = {
  wonton: [],
  dip: [],
  drink: [],
};

//identifiera items, sorterar cart i categorier TODO
function identifyOrderdItems() {
  orderdItems.wonton = [];
  orderdItems.dip = [];
  orderdItems.drink = [];

  cart.forEach(item => {
    if (item.category === 'wonton') orderdItems.wonton.push(item);
    if (item.category === 'dip') orderdItems.dip.push(item);
    if (item.category === 'drink') orderdItems.drink.push(item);
  })
  console.log(orderdItems);
}

// function addCartInformation(cartInformation) {
//   const cartWrapper = document.createElement('div');
//   cartWrapper.classList.add('cart-wrapper');

//   const item = document.createElement('div');
//   const price = document.createElement('div');

//   item.innerText = cartInformation.name;
//   price.innerText = cartInformation.price + 'SEK';

//   cartWrapper.appendChild(item);
//   cartWrapper.appendChild(price);

//   cartDisplay.appendChild(cartWrapper);
// }

// uppdatera overlay
// function updateCartInformation() {
//   cartDisplay.innerText = '';
//   cart.forEach(entry => addCartInformation(entry));
// }

//visa overlay
button.addEventListener('click', () => {
  overlay.classList.add('active');

  identifyOrderdItems();
  updateCartInformation(); //gör ett anrop (anropar funktionen när man klickar på knappen)
})

//stäng via knapp
backButton.addEventListener('click', () => {
  overlay.classList.remove('active')
})


