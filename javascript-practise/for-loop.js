"use strict";


const openingHours =  {
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
};

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
    openingHours,
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

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];


//for of loop, loops over entire array elements
// for (const item of menu) console.log(item);

//to also get the index and the value 
// for (const item of menu.entries()) {
//     console.log(`${item[0] + 1}: ${item[1]}`); // <------- old skul way 
// }

for (const [i,el] of menu.entries()) { // <------- object destructuring in loops
    console.log(`${i + 1}: ${el}`);
}

// console.log(...menu.entries());

if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open); // <--- this can get messy with lots of optional properties, we avoid 
//this using optional chaining

if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

//Optional Chaining
console.log(restaurant.openingHours.fri?.open); //when we are not sure of the property


//Example

const days = ['mon','tue','wed','thu','fri','sat','sun'];

for(const day of days) {
    // console.log(day);
    const open = restaurant.openingHours[day]?.open ?? 'Closed'; //dynamic parameters has to be added with square brackets
    //nullish coalesing and optional chaining
    console.log(`On ${day}, we open at ${open}`);
}

//Optional chaining can also be used to call Methods, it can check if the method exists or not
console.log(restaurant.order?.(0,1) ?? 'Method doesn\'t exist'); 
console.log(restaurant.orderRisotto?.(0,1) ?? 'Method doesn\'t exist'); 


//Optional Chaining on Arrays
const users = [
    {name:"Somnath",email:"workingwithsomnat@gmail.com"}
]

console.log(users[1]?.name ?? 'User array Empty'); 

//looping over objects

//property names
const properties = Object.keys(openingHours); //Object.keys with the object as parameter return the keys
console.log(properties);


for (const day of Object.keys(openingHours)) {
    console.log(day);
}

//property values
const values = Object.values(openingHours);
console.log(values);

//to iterate over the elements of objects we use entries

const entries = Object.entries(openingHours)
// console.log(entries);

for (const [key,{open,close}] of entries) { //values have been destructured with {open, close}
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}