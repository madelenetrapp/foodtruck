console.log('hej');

import { requestWonton, requestDip, requestDrink } from './api.js';
let wontonResult = await requestWonton();
let dipResult = await requestDip();
let drinkResult = await requestDrink();

//button for cart TODO: lägg till bild
const btn = document.querySelector('.cart');
btn.textContent = 'Klicka';
btn.addEventListener('click', () => {
  console.log('Klick');
});

//function för att lägga in information i varukorgen
function addToCart(name, price) {
  const cartList = document.querySelector('.cart-list');

  const item = document.createElement('div');
  item.classList.add('cart-item');
  item.innerText = `${name} - ${price}`;

  cartList.appendChild(item);
}

function addWontonInformation(wontonInformation) {

  const button = document.createElement('button');
  button.classList.add('wonton-wrapper');

  const wontonItem = document.createElement('div');
  const wontonRow = document.createElement('div');
  const wontonPrice = document.createElement('div');
  const wontonIngredients = document.createElement('div');

  wontonItem.classList.add('wonton-item');
  wontonRow.classList.add('wonton-row');
  wontonPrice.classList.add('wonton-price');
  wontonIngredients.classList.add('wonton-ingredients');

  wontonItem.innerText = wontonInformation.name;
  wontonPrice.innerText = wontonInformation.price + ' SEK';
  wontonIngredients.innerText = wontonInformation.ingredients.join(', ');

  // const domWontonInformation = document.querySelector('.wonton-information');
  //TODO: vad gör jag med denna??

  button.appendChild(wontonItem);
  button.appendChild(wontonRow);
  button.appendChild(wontonPrice);
  button.appendChild(wontonIngredients);

  button.addEventListener('click', () => {
    addToCart(wontonItem.name, wontonPrice.name)
  });

  document.querySelector('.wonton-information').appendChild(button);

}

wontonResult.items.forEach(entry => {
  addWontonInformation(entry);
})


//function for div dip
function addDipInformation(dipItem) {

  const button = document.createElement('button');
  button.classList.add('dipsauce-wrapper');

  const dipSauce = document.createElement('div')
  const dipRow = document.createElement('div');
  const price = document.createElement('div')


  dipSauce.classList.add('dipSauce');
  dipRow.classList.add('dotted-row');
  price.classList.add('dip-price');


  dipSauce.innerText = dipItem.name;
  price.innerText = dipItem.price;

  // const domDipSauceInformation = document.querySelector('.dipsauce');
  //TODO: vad gör jag med denna??

  button.appendChild(dipSauce);
  button.appendChild(dipRow);
  button.appendChild(price);

  button.addEventListener('click', () => {
     addToCart(dipItem.name, dipPrice.name)
  });
  document.querySelector('.dipsauce-information').appendChild(button);
}

dipResult.items.forEach(entry => {
  addDipInformation(entry);
})

//function för drinks
function addDrinkInformation(drinkItem) {

  const button = document.createElement('button');
  button.classList.add('drink-wrapper');

  const drink = document.createElement('div')
  const drinkRow = document.createElement('div');
  const price = document.createElement('div')

  drink.classList.add('drink');
  drinkRow.classList.add('dotted-row');
  price.classList.add('dip-price');

  drink.innerText = drinkItem.name;
  price.innerText = drinkItem.price;

  // const DomDrinkItem = document.querySelector('.drink-options');
  //Vad gör jag med denna??

  button.appendChild(drink);
  button.appendChild(drinkRow);
  button.appendChild(price);

  button.addEventListener('click', () => {
     addToCart(drinkItem.name, drinkPrice.name)
  });
  document.querySelector('.drink-information').appendChild(button);
}

drinkResult.items.forEach(entry => {
  addDrinkInformation(entry);
})