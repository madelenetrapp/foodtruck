// skapar overlay
const button = document.querySelector('.cart');
button.textContent = 'klicka';

const overlay = document.createElement('div')
overlay.classList.add('overlay');

const content = document.createElement('div');
content.classList.add('overlay-content');

//lägger till item i cart 
const cart = [];

export function addToCart(item) {
  cart.push(item);
  console.log(cart);
  identifyOrderdItems();
}

//skapar och fyller divar till varukorgen
function addCartInformation(cartInformation) { //cart info = ett array

  //spar hur långt det är och sparar det första item
  let amount = cartInformation.length //sparar längden på cart info
  let firstItem = cartInformation[0]; //hämtar ut första item i arreyen, för att det är null

  const cartWrapper = document.createElement('div');
  cartWrapper.classList.add('cart-wrapper');

  const Item = document.createElement('div');
  const showAmount = document.createElement('div');
  const Row = document.createElement('div');
  const Price = document.createElement('div');
  // const cartInfoDiv = document.querySelector('.cart-display');

  Item.classList.add('cart-item');
  showAmount.classList.add('amount-items');
  Row.classList.add('cart-row');
  Price.classList.add('cart-price');

  Item.innerText = firstItem.name;
  showAmount.innerText = amount;
  Price.innerText = firstItem.price + ' SEK';

  cartWrapper.appendChild(Item);
  cartWrapper.appendChild(showAmount);
  cartWrapper.appendChild(Row);
  cartWrapper.appendChild(Price);
  // cartInfoDiv.appendChild(cartWrapper);

  const cartInfoDiv = document.querySelector('.cart-display');
  // cartInfoDiv.innerText = '';
  cartInfoDiv.appendChild(cartWrapper);
}

// funktion anropa funktionen när det ska köras TODO
function updateCartInformation(items) {
  const cartDisplay = document.querySelector('.cart-display');
  cartDisplay.innerText = '';

  for (const item in items) { //kör en loop för varje items som man klickar på //of eller in går ingenom alla (loopar igenom) proportis ett objekt har
    // items.forEach(item => {
    console.log('hej')
    console.log(item)
    addCartInformation(items[item]); //hämtar ut högen
  };
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
// cartImage.src = './img/sc'; //varför går det inte att skriva adressen?
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
// const orderdItems = {
//   wonton: [],
//   dip: [],
//   drink: [],
// };

//identifiera items, sorterar cart i categorier TODO
function identifyOrderdItems() {

  let items = {};  //ett tomt objekt med arrayer

  cart.forEach(item => {
    if (items[item.id]) {
    }
    else {
      items[item.id] = [];
    }
    items[item.id].push(item); //skapar en tom rad och lägger till item även om det första gången är null
  })
  console.log(items);

  return items;
}

// uppdatera overlay
// function updateCartInformation() {
//   cartDisplay.innerText = '';
//   cart.forEach(entry => addCartInformation(entry));
// }

//visa overlay
button.addEventListener('click', () => {
  overlay.classList.add('active');

  const orderdItems = identifyOrderdItems();
  updateCartInformation(orderdItems); //gör ett anrop (anropar funktionen när man klickar på knappen)

})

//stäng via knapp
backButton.addEventListener('click', () => {
  overlay.classList.remove('active')
})


