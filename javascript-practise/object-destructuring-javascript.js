"use strict";

const restaurant = {
    "name": "Classico Italiano",
    "location": 'Via Angelo Tavanti 12, Firenze, Italy',
    "categories": ['Italian','Pizzeria','Vegeterian','Organic'],
    "starterMenu":['Focaccia','Bruschetta','Garlic Bread','Caprese Salad'],
    "mainMenu":["Pizza","Pasta","Risoto"],
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex],
                this.mainMenu[mainIndex]];
     },
    openingHours: {
        thu: {
            open:12,
            close: 22,
        },
        fri: {
            open:11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        }
    },
    orderDelivery : function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
            will be delivered to ${address} at ${time}`);
    },

    orderPizza: function(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
}
;

restaurant.orderDelivery(
    {
        time: '22:30',
        address: 'SpringDale Layout, Whitefield',     //<----------- passing an object to object function
        mainIndex: 2,
        starterIndex: 2,
    }
);

restaurant.orderDelivery(
    {
        address: '42 Om Shakti Nilaya, Silver Springs Layout',     //<----------- passing an object to object function
        starterIndex: 2,
    }
);


// console.log(restaurant.orderDelivery);

// console.log(restaurant.openingHours);

const {name, openingHours, categories} = restaurant;  //<------- object destructuring to variables

// console.log(name);
// console.log(openingHours);
// console.log(categories);

const {name: restaurantName, 
       openingHours: hours, 
       categories: tags,} = restaurant;  //<-------- changing variable names for 3rd party api compatibility
       
// console.log(restaurantName);
// console.log(hours);
// console.log(tags);      

const {
    menu = [],
    starterMenu: starters = []  //<------------- setting default values to variables
} = restaurant;

// console.log(menu, starters);

let a = 111;
let b = 999;                        // <-------------- mutating variables
const obj = {a:23, b: 7, c: 14};

({a,b} = obj);   // we cannot directly assign values to code blocks, adding parantheses would help 

// console.log(a,b);

const {fri:{open,close}} = openingHours;
// console.log(open,close);

//////////////////////////////////////////////////
//
// spread operators
//
//////////////////////////////////////////////////

const arr = [7,8,9]

const newArr = [1, 2, ...arr];
// console.log(newArr);

//shallow copy array
const mainMenuCopy = [...restaurant.mainMenu];

//combining two arrays
const menu_mix = [...restaurant.starterMenu, ...restaurant.mainMenu]; 
// console.log(menu_mix);

// iterables are arrays, strings, maps and sets but not objects
// we can use spread operator on strings

const str = "Somnath";
const letters = [...str, ' ', 'M.']
console.log(letters);
console.log(...str);
console.log("S","o");
// console.log(`${...str} Mahato`); // multiple values separated by comma is expected when we pass 
// arguments into function or when we built a new array 



//spread operators accepting variable number of arguments
const add = function(...numbers) {
    //console.log(numbers);
    let sum = 0;
    for(let i=0; i<numbers.length; i++) sum += numbers[i];
    console.log(sum);
}

add(2,3)
add(5,3,7,2) //<----- arbitrary amount of arguments

const x = [23,5,7]

add(...x);


restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinachs');