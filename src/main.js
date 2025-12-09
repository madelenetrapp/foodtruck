//skapar en constant variabel, nyckel till meny
const apiKey = "yum-BHRyCR5Lgznl28Tr";


async function sendTenantRequest(url, apiKey) {
  try {
    const response = await fetch(url, {
      method: "POST", headers: { 'x-zocom': apiKey }, body: {
        "name": "Madelene Trapp"
      }
    })
    if (response.status !== 200) {
      console.log('request wasen´t successful. Code:' + response.status)
      return null
    }
    const data = await response.json()
    return data // success
  }
  catch {
    if (!responce) {
    }
    else if (!data) {
    }
    return null
  }
}

//deklarerar en funktion som tar parameter url
async function sendRequest(url) {
  try {
    const response = await fetch(url, { headers: { 'x-zocom': apiKey }, method: "GET" })
    if (response.status !== 200) {
      //HTTP anrop med fetch
      //anger HTTP metoden GET
      //resultatet lagras i variabeln response
      // console.log('request wasen´t successful. Code:' + response.status)
      return null
    }
    const data = await response.json()
    return data // success
  }
  catch {
    if (!responce) {
      //1. fatch faild totally
    }
    else if (!data) {
      //2. fetch was successfull, but we dont get a JSON responce
    }
    return null
  }
}

//hämtar info från back-end. Anropar sendRequest med URL, väntar på svaret, resultatet lagras i variabeln result
let result = await sendRequest('https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/menu?type=wonton');

//gör ett div element, sparar i variabeln container

// const itemContainer = document.createElement('div');
//funktionen addMenuInformation tar argumentet item
function addMenuInformation(item) { 


  //skapar ett p-element och lagrar den i varibeln wonton
  const wonton = document.createElement('div');
  const price = document.createElement('div');
  const ingredients = document.createElement('div');
  // console.log('')


  //lägger till en css klass menuItem på elementet
  wonton.classList.add('menuItem');
  price.classList.add('menuprice');
  ingredients.classList.add('ingredients');

  //hämtar första elementet i DOM:en som har klassen .food-option och lagrar det i foodOption
 

  wonton.innerText = item.name;
  price.innerText = item.price;
  ingredients.innerText = item.ingredients.join(',');
 const foodOptions = document.querySelector('.food-options');
  //lägger till den skapade wonton-diven som ett barn till elementet .food-options
  foodOptions.appendChild(wonton);
  foodOptions.appendChild(price);
  foodOptions.appendChild(ingredients);
  //sätter textinnehållet i wonton-diven till värdet av item.name


}
//loopar igenom arrayen result.items, för varje element anropas funktionen addMenuInformation med objektet som argument
//
result.items.forEach(entry => {
  addMenuInformation(entry);
})






// const bodyToSend = {
//     name: 'Ann di Feynd'
// }
// const options = {
//     method: 'POST',
//     body: JSON.stringify(bodyToSend),
//     headers: {
//         "Content-Type": 'application/json'
//         // body innehåller JSON
//     }
// }
// fetch(url, options)


// rätt foodtyp till varje anrop




// let result = await sendRequest('https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/keys');
// result = result.key;

let tenantResult = await sendTenantRequest('https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/tenants', result)
