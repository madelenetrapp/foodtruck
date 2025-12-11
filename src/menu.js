console.log('hej');

import {requestWonton, requestDip, requestDrinks} from './api.js';
let wontonResult = await requestWonton();
let dipResult = await requestDip();
let drinksResult = await requestWonton();

//button for cart TODO: lägg till bild
const btn = document.querySelector('.cart');
btn.textContent = 'Klicka';
btn.addEventListener('click', () => {
  console.log('Klick');
});

//TODO:varje div ska vara click- en funktion?
//funktion for div wonton
function addWontonInformation(wontonInformation) {

  
  const wontonItem = document.createElement('div');
  const wontonRow = document.createElement('div');
  const wontonPrice = document.createElement('div');
  const wontonIngredients = document.createElement('div');

  wontonItem.classList.add('wonton-item');
  wontonRow.classList.add('wonton-row');
  wontonPrice.classList.add('wonton-price');
  wontonIngredients.classList.add('wonton-ingredients');

  wontonItem.innerText = wontonInformation.name;
  wontonPrice.innerText = wontonInformation.price;
  wontonIngredients.innerText = wontonInformation.ingredients;

  const domWontonInformation = document.querySelector('.wonton-information');

  domWontonInformation.appendChild(wontonItem);
  domWontonInformation.appendChild(wontonRow);
  domWontonInformation.appendChild(wontonPrice);
  domWontonInformation.appendChild(wontonIngredients);

}

wontonResult.items.forEach(entry => {
  addWontonInformation(entry);
})


//function for div dip
function addDipInformation(dipItem) {

  const dipSauce = document.createElement('div')
  const dottedRow = document.createElement('div');
  const price = document.createElement('div')
 

  dipSauce.classList.add('dipSauce');
  dottedRow.classList.add('dotted-row');
  price.classList.add('dip-price');


  dipSauce.innerText = dipItem.name;
  price.innerText = dipItem.price;

  const domDipInformation = document.querySelector('.dipsauce');

  domDipInformation.appendChild(dipSauce);
  domDipInformation.appendChild(dottedRow);
  domDipInformation.appendChild(price);
}

dipResult.items.forEach(entry => {
  addDipInformation(entry);
})

function addDrinksInformation(drinksItem) {

  const drinks = document.createElement('div')
  const dottedRow = document.createElement('div');
  const price = document.createElement('div')
  const fantaOrange = document.createElement('div');
  const fantaExotic = document.createElement('div');
  const cocaCola = document.createElement('div');
  const sprite = document.createElement('div');
  const lokaGranatäpple = document.createElement('div');
  const lokaCitrus = document.createElement('div');

  drinks.classList.add('drinks');
  dottedRow.classList.add('dotted-row');
  price.classList.add('dip-price');
  fantaOrange.classList.add('fanta-orange');
  fantaExotic.classList.add('fanta-exotic');
  cocaCola.classList.add('coca-cola');
  sprite.classList.add('sprite');
  lokaGranatäpple.classList.add('loka-granatäpple');
  lokaCitrus.classList.add('loka-citrus');

  dipSauce.innerText = drinksItem.name;
  dottedRow.innerText = drinksItem.row;
  price.innerText = drinksItem.price;
  fantaOrange.innerText = drinksItem.price;
  fantaExotic.innerText = drinksItem.price;
  cocaCola.innerText = drinksItem.price;
  sprite.innerText = drinksItem.price;
  lokaGranatäpple.innerText = drinksItem.price;
  lokaCitrus.innerText = drinksItem.price;

  const DomDrinksItem = document.querySelector('.drinks-options');

  foodOptions.appendChild(dipSauce);
  foodOptions.appendChild(dottedRow);
  foodOptions.appendChild(price);
  foodOptions.appendChild(fantaOrange);
  foodOptions.appendChild(fantaExotic);
  foodOptions.appendChild(cocaCola);
  foodOptions.appendChild(sprite);
  foodOptions.appendChild(lokaGranatäpple);
  foodOptions.appendChild(lokaCitrus);
}

drinksResult.items.forEach(entry => {
  addDrinksInformation(entry);
})