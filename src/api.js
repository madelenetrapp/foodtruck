const apiKey = "yum-BHRyCR5Lgznl28Tr"; //hämtar en gång

async function sendTenantRequest(url, apiKey) { //bortkommenterad längre ner får fel 500 <----
  try {
    console.log('send tenant request', url, apiKey);
    const response = await fetch(url, {
      method: "POST", headers: { 'x-zocom': apiKey, 'Content-Type': 'application/json' },
      body:({ name: "Madelene Trapp" }) //
    })

    console.log("STATUS:", response.status)

    if (!response.ok) { //
      console.log('request wasen´t successful. Code:' + response.status)
      return null
    }
    const data = await response.json()
    return data
  }
  catch {
    if (!response) {
    }
    else if (!data) {
    }
    return null
  }
}

async function sendRequest(url) {
  try {
    const response = await fetch(url, { headers: { 'x-zocom': apiKey }, method: "GET" })
    if (response.status !== 200) {

      return null
    }
    const data = await response.json()
    return data
  }
  catch {
    if (!response) {
    }
    else if (!data) {

    }
    return null
  }
}


async function requestWonton() {

  let result = await sendRequest('https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/menu?type=wonton');

  let tenantResult = await sendTenantRequest('https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/tenants', apiKey)

  return result;
}

async function requestDip() {

  let result = await sendRequest('https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/menu?type=dip');

  return result;
}

async function requestDrink() {

  let result = await sendRequest('https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/menu?type=drink');

  return result;
}

export { requestDrink, requestWonton, requestDip };