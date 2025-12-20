import { requestWonton, requestDip, requestDrink } from './api.js';
import { addToCart } from './domCart.js';

let wontonResult = await requestWonton(); 
let dipResult = await requestDip();
let drinkResult = await requestDrink();

const cartButton = document.querySelector('.cart'); 

const img = document.createElement('img');
img.src = './img/cart btn.svg'; 

cartButton.appendChild(img);
cartButton.addEventListener('click', () => {
  console.log('Klick');
});

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
  wontonIngredients.innerText = wontonInformation.ingredients.join(' ');

  button.appendChild(wontonItem); 
  button.appendChild(wontonRow);
  button.appendChild(wontonPrice);
  button.appendChild(wontonIngredients);

  button.addEventListener('click', () => {
    addToCart(wontonInformation) 
  });
  

  document.querySelector('.wonton-information').appendChild(button);
}

wontonResult.items.forEach(entry => {
  addWontonInformation(entry);     
})

function addDipInformation(dipItem) {

  const button = document.createElement('button'); 
  button.classList.add('dipsauce-wrapper');

  const dipSauce = document.createElement('div') 
  const dipRow = document.createElement('div');
  const price = document.createElement('div')

  const lowerCase = s => s.toLowerCase();

  dipSauce.classList.add('dipSauce');
  dipRow.classList.add('dotted-row');
  price.classList.add('dip-price');

  dipSauce.innerText = lowerCase(dipItem.name);

  button.appendChild(dipSauce); 
  button.appendChild(price);

  button.addEventListener('click', () => {
     addToCart(dipItem)       
  });
  document.querySelector('.dipsauce-information').appendChild(button);
}

dipResult.items.forEach(entry => {
  addDipInformation(entry);
})

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
 
  button.appendChild(drink);     
  button.appendChild(price);

  button.addEventListener('click', () => {
     addToCart(drinkItem)                     
  });
  document.querySelector('.drink-information').appendChild(button);
}

drinkResult.items.forEach(entry => {
  addDrinkInformation(entry);
})