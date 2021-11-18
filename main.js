"use strict"

var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

function renderCoffee(coffee) {
    var div = '';
    div += '<div class=card><h3>' + coffee.name + '</h3><p class=roast>' + coffee.roast + '</p></div>';
    return div;
}

function renderCoffees(coffees) {
    var div =  '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        div += renderCoffee(coffees[i]);
    }
    return div;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    // var selectedRoast = roastSelection.value;
    // var filteredCoffees = [];

    // if(selectedRoast === 'all'){
    //     filteredCoffees = coffees
    // } else coffees.forEach(function(coffee) {
    //     if (coffee.roast === selectedRoast) {
    //         filteredCoffees.push(coffee);
    //     }
    // });

    var userRoast = userCoffeeSelection.value.toLowerCase().trim();
    console.log(userRoast);
    var searchCoffees = [];
    coffees.forEach(function(coffee){
        if(coffee.name.toLowerCase().includes(userRoast)){
            searchCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(searchCoffees);//, renderCoffees(filteredCoffees)
}

function updateCoffeesByList(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];

    if(selectedRoast === 'all'){
        filteredCoffees = coffees
    } else coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide

var roastSelection = document.querySelector('#roast-selection');
roastSelection.addEventListener('change', updateCoffeesByList)

var tbody = document.querySelector('#coffees');
tbody.innerHTML = renderCoffees(coffees);

var submitButton = document.querySelector('#submit');
var userCoffeeSelection = document.querySelector('#userCoffeeSelection');
submitButton.addEventListener('click', updateCoffees);