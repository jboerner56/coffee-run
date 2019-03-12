// function for the API url
function urlForPage (){
    // return the actual url so it can be used
    return 'https://dc-coffeerun.herokuapp.com/api/coffeeOrders';
}
// empty array to pass the order data into.
let coffeeOrders = [];
// function to retrieve the api data
function retrieveData(orders){
    // use fetch to get the data using the urlForPage function
    fetch(urlForPage)
        // process the response
        console.log(urlForPage)
        .then(function(response){
            // return the data so it can be stored
        return response.json();
        })
        .then(function(orders){
            console.log(orders);
        })
}

