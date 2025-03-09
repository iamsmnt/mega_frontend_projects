'use strict';

let arr = ['a','b','c','d','e'];

//slice
//slice does not mutate the original array
//slice(startIndex, endIndex)
//startIndex - index at which to start slicing
//endIndex - index at which to end slicing (exclusive)
console.log(arr.slice(2)); // slices the array from index 2 until the end
console.log(arr.slice(2,4)); // slices the array from index 2 until 4 - 1
console.log(arr.slice(-2)); // slices the array from the end of the array
console.log(arr.slice(-1)); 
console.log(arr.slice(1,-2)); // slices the array from index 1 until the end - 2(exclusive)
console.log(arr.slice()); // creates a shallow copy of the array
console.log([...arr]); // creates a shallow copy of the array


//splice
//splice mutates the original array
//splice(startIndex, deleteCount, itemsToInsert)
//startIndex - index at which to start deleting
//deleteCount - number of elements to delete
//itemsToInsert - elements to insert at startIndex

let myArr = ['a','b','c','d','e'];  
console.log(myArr.splice(2,2,['x','y'])); // deletes all elements from index 2 until the end
console.log(myArr); // ['a','b']


//reverse
//reverse mutates the original array
let arr1 = ['a','b','c','d','e'];
console.log(arr1.reverse());
console.log(arr1);

//concat
//concat does not mutate the original array
let arr2 = ['a','b','c','d','e'];
console.log(arr2.concat(['f','g','h'])); // concatenates the array with the new array and returns a new array
console.log(arr2);

//join
//join does not mutate the original array
let arr3 = ['a','b','c','d','e'];
console.log(arr3.join('-')); // joins the array elements with the separator and returns a string
console.log(arr3);


const arr4 = [23,12,34];
console.log(arr4[0]); // 23
console.log(arr4.at(-1));  //at method to access the element at the specified index


const movements =  [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
    if (movement > 0) {
        console.log(`You deposited ${movement}`);
    }
    else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }   
}

//forEach
//forEach does not return anything
//forEach does not mutate the original array
//forEach(callbackFunction)
//callbackFunction - function to execute on each element of the array
console.log('---forEach---');
movements.forEach(function(movement) {
    if (movement > 0) {
        console.log(`You deposited ${movement}`);
    }
    else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }   
}
);

//forEach with index
console.log('---forEach with index---');    
movements.forEach(function(movement, index, array) {
    if (movement > 0) {
        console.log(`Movement ${index + 1}: You deposited ${movement}`);
    }
    else {
        console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
    }   
}
); // for each always iterate over entire array, cannot break or continue

// for each with maps

//currencies

const currencies = new Map([ 
    ['USD','United States Dollar'], //key value pair
    ['EUR','Euro'],
    ['GBP','Pound Sterling'],
]);

currencies.forEach(function(value,key,map) {
    console.log(`${key}: ${value}`)});


//set
const currenciesUnique = new Set(['USD','GBP','USD','EUR','EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function(value,_,map) {  
    console.log(`${value}: ${value}`)} // in set key and value are same, sets doesn;t have keys and values
);
