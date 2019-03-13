// function for the API url
function urlForPage (){
    // return the actual url so it can be used
    return 'https://dc-coffeerun.herokuapp.com/api/coffeeOrders';
}

function retrievePageOfCharacters(pageNumber) {
    fetch(urlForPage)
    .then(function (response) {      // #2 And then process the response so we can get data out of it
        return response.json(); 
    })
    .then(function (response) {
        console.log(response);

    })   
}
// empty array to pass the order data into.
let coffeeOrders = [];

// function for adding the order data to the page
function drawOrderDataToPage(orderObject){
    // variable that data will be passed into
    const detailArea = document.querySelector('[data-detail]')
    detailArea.textContent = '';
    // divs that the data will be passed into
    const emailDiv = document.createElement('div')
    const coffeeDiv = document.createElement('div')
    const sizeDiv = document.createElement('div')
    const flavorDiv = document.createElement('div')
    // how the data strings will be displayed
    coffeeDiv.textContent = `Coffee: ${coffeeObject.coffee}`;
    sizeDiv.textContent = `Size ${sizeObject.size}`;
    flavorDiv.textContent = `Flavor: ${flavorObject.flavor}`;
    // adding the actual data the the page
    detailArea.appendChild(coffeeDiv);
    detailArea.appendChild(sizeDiv);
    detailArea.appendChild(flavorDiv);
}
// function that will one individual persons info
function singleOrder (orderEmail){
    // variable 
    const orderName = orderObject;
    // if statement for the if/when th order does not have an email
    if(orderName.length === 0){
        return;
    }
    // create anchor element for the order email
    const anchorElement = document.createElement('a');
    anchorElement.textContent = orderName;
    // attach listener function for when an order email is clicked on
    anchorElement.addEventListener('click', function(){
        drawOrderDataToPage(orderEmail);
    })
    // create li for each piece of the order details
    const listItem = document.createElement('li');
    // add thr order details to the page
    listItem.appendChild(anchorElement);

    const listArea = document.querySelector('[data-list')
    listArea.appendChild(listItem);
}