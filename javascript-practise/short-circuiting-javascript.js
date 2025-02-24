///////////////////////////////////////
// properties of logical operators
//  1. can have any datatype
//  2. return any datatype
//  3. short-ciruiting - two values that are not necessarily booleans, 
///////////////////////////////////////



console.log(3 || 'Jonas'); //in case of or, if the first value is a truthy value, it returns the first element

console.log('' || 'somnath');

console.log(true || 0);

console.log(undefined || null); //undefined is a falsy value thus null is returned

console.log(undefined || 0 || '' || 'Hello' || 23 || null); //hello is truthy and hence its short-circuits all the values and returns the truth value

console.log('----- AND ------');

console.log(0 && 'Jonas'); //for and operators the falsy value would short circuit all the values
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

//applications 
// if (restaurant.orderPizza) {
//     restaurant.orderPizza('mushrooms','spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms','spinach');
// in the above scenario it checks if the orderpizza is initialized or not,
// if it's not initialized that means its becomes undefined and its falsy, 
// then it would not execute anything.


// nullish coalescing
let restaurant = {};
//evaluation is based on boolean value
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);


//evaluation is based on the nullish value
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);


const rest1 = {
    name: 'Capri',
    // numGuests: 20,
    numGuests: 0,
};

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanno Rossi',
};

// rest1.numberGuests = rest1.numGuests || 10;
// rest2.numberGuests = rest2.numGuests || 10;




//OR assignment operator

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

//Logical Nullish Coalesing operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;


// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner = rest1.owner && '<ANONYMOUS>';

// AND assignment operator assigns a value, if the value is truthy
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

