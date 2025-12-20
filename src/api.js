///
console.log('API.JS LOADED - VERSION 123'); //TODO


const apiKey = "yum-BHRyCR5Lgznl28Tr"; // hämtar en gång
const tenantKey = "izu6"; // hämtas en gång

//API request
async function sendRequest(url) {
  try {
    const response = await fetch(url, {
      headers: { 'x-zocom': apiKey },
      method: "GET"
    });

    if (response.status !== 200) {
      return null;
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error(error);
    return null;
  }
}

// meny
async function requestWonton() {
  return await sendRequest(
    'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/menu?type=wonton'
  );
}

async function requestDip() {
  return await sendRequest(
    'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/menu?type=dip'
  );
}

async function requestDrink() {
  return await sendRequest(
    'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/menu?type=drink'
  );
}

export { requestDrink, requestWonton, requestDip };


//tenant
async function sendOrderRequest(items) {
  console.log('SEND ORDER CALLED');

  const itemIds = items.map(item => item.id);
  console.log('ITEM IDS:', itemIds);

  const response = await fetch(
    `https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/${tenantKey}/orders`,
    {
      method: "POST",
      headers: {
        'x-zocom': apiKey,
        'content-type': 'application/json'
      },
      body: JSON.stringify({ items: itemIds })
    }
  );

  console.log('STATUS:', response.status);

  const data = await response.json();
  console.log('PARSED RESPONSE:', data);

  return data;
}


export { sendOrderRequest };


//order
