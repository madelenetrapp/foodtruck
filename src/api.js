const apiKey = "yum-BHRyCR5Lgznl28Tr"; // hämtar en gång
const tenantKey = "izu6"; // hämtas en gång

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

// ---- MENU REQUESTS ----
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


// ---- ORDER REQUEST ----
async function sendOrderRequest(items) {
  try {

    const itemIds = items.map(item => item.id);

    const response = await fetch(
      `https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/${tenantKey}/orders`,
      {
        method: "POST",
        headers: {
          'x-zocom': apiKey,
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          items: itemIds
        })
      }
    );

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

export { sendOrderRequest };
