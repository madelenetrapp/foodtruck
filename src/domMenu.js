import { requestWonton, requestDip, requestDrink } from './api.js';
import { addToCart } from './domCart.js';

let wontonResult = await requestWonton(); //anropas och körs i tur och ordning
let dipResult = await requestDip();
let drinkResult = await requestDrink();

//button for cart TODO: lägg till bild
const button = document.querySelector('.cart'); //hittar HTML elementet som matchar css-selektorn
button.textContent = 'Klicka';
button.addEventListener('click', () => { //lyssnar på clicket
  console.log('Klick');
});

//wonton information
function addWontonInformation(wontonInformation) {

  const button = document.createElement('button');
  button.classList.add('wonton-wrapper');

  const wontonItem = document.createElement('div'); //skapar element 
  const wontonRow = document.createElement('div');
  const wontonPrice = document.createElement('div');
  const wontonIngredients = document.createElement('div');

  wontonItem.classList.add('wonton-item'); //lägger till en klass på elementet
  wontonRow.classList.add('wonton-row');
  wontonPrice.classList.add('wonton-price');
  wontonIngredients.classList.add('wonton-ingredients');

  wontonItem.innerText = wontonInformation.name; //lägger till en text på elementet
  wontonPrice.innerText = wontonInformation.price + ' SEK';
  wontonIngredients.innerText = wontonInformation.ingredients.join(', ');

  button.appendChild(wontonItem); //lägger till wontonItem på det skapade elementet
  button.appendChild(wontonRow);
  button.appendChild(wontonPrice);
  button.appendChild(wontonIngredients);

  button.addEventListener('click', () => {
    addToCart(wontonInformation) //addToCart anropas här, när man clickar
  });

  document.querySelector('.wonton-information').appendChild(button);
 //hittar och returnerar första elementet som  matchar css.selectorn wonton-information
}

wontonResult.items.forEach(entry => {
  addWontonInformation(entry);      //loopar igenom listan 
})


//function for div dip
function addDipInformation(dipItem) {

  const button = document.createElement('button'); //gör alla till knappar
  button.classList.add('dipsauce-wrapper');

  const dipSauce = document.createElement('div') //skapar element 
  const dipRow = document.createElement('div');
  const price = document.createElement('div')

  const lowerCase = s => s.toLowerCase();

  dipSauce.classList.add('dipSauce');//lägger till en klass på elementet
  dipRow.classList.add('dotted-row');
  price.classList.add('dip-price');

  dipSauce.innerText = lowerCase(dipItem.name); //gör små bokstäver

  button.appendChild(dipSauce); //lägger till dipSauce på det skapade elementet
  button.appendChild(price);

  button.addEventListener('click', () => {
     addToCart(dipItem)        //addToCart anropas här, när man clickar
  });
  document.querySelector('.dipsauce-information').appendChild(button);
}

dipResult.items.forEach(entry => {
  addDipInformation(entry);
})


//function för drinks
function addDrinkInformation(drinkItem) {

  const button = document.createElement('button'); //gör alla till knappar
  button.classList.add('drink-wrapper');

  const drink = document.createElement('div')
  const drinkRow = document.createElement('div');
  const price = document.createElement('div')

  drink.classList.add('drink');
  drinkRow.classList.add('dotted-row'); //lägger till en klass på elementet
  price.classList.add('dip-price');

  drink.innerText = drinkItem.name;
  // price.innerText = drinkItem.price;


  button.appendChild(drink);        //lägger till dipSauce på det skapade elementet
  // button.appendChild(drinkRow);
  button.appendChild(price);

  button.addEventListener('click', () => {
     addToCart(drinkItem)                     //addToCart anropas här, när man clickar
  });
  document.querySelector('.drink-information').appendChild(button);
}

drinkResult.items.forEach(entry => {
  addDrinkInformation(entry);
})