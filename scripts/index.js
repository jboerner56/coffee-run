// function for the API url
function urlForPage (){
    // return the actual url so it can be used
    const API_URL = 'api/coffee.json';
    // return api data so it can be used
    return API_URL;
}

function retrievePageOfCharacters() {
    fetch(API_URL)
    // convert the api data to json
    .then(function (response) {
        return response.json(); 
    })
    // log to make sure it if pulling the data
    .then(function (orders) {
        console.log(orders);

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

// takes each individual order and adds them to the page

function drawMultipleToPage(coffeeOrders){
    const listArea = document.querySelector('[data-list]');
    listArea.textContent = '';
    drawMultipleToPage.forEach(singleOrder);
}

// function to be able to sort by the email's beginning letter
function filterByLetter(letter) {
    console.log(letter);
    if (letter.length === 1) {
        const filtered = coffeeOrders.filter(function (email) {
            return email.startsWith(letter.toUpperCase());
        });
        drawMultipleToPage(filtered);
    } else {
        drawMultipleToPage();
    }
}


// function to ad the ability to click on the letters to show those orders that the email
// begins ith that letter
function addClickToLetters() {
    const letters = document.querySelectorAll('[data-index] a');
    letters.forEach(function (letter) {
        letter.addEventListener('click', function () {
            filterByLetter(letter.textContent);
        });
    });
}