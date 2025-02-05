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


console.log(restaurant.orderDelivery);

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