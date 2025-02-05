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
    }
}

const arr = [2,4,6]

const [a,b,c] = arr; //<------ array destructuring
console.log(a,b,c);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main,secondary] = [secondary,main]
console.log(main, secondary);

const [starter, mainCourse] = console.log(restaurant.order(2,0));
console.log(starter,mainCourse);