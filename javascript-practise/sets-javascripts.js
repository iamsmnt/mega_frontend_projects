//earlier js has only objects and arrays datastructures
//but in es6 they have introduced maps and sets datastructures
//sets are collection of unique objects, can hold mix datatypes, they are iterables 
//elements are uniques, orders are irrelevant

const ordersSet = new Set(['Mutton','Biryani','Beer', 'Mutton']);
console.log(ordersSet);
console.log(new Set('Somnath'));
console.log(ordersSet.size);

//check wheter an element is there in a set
console.log(ordersSet.has('Litti'));
console.log(ordersSet.has('Mutton'));

//adding an element into the set
ordersSet.add('Lassi');
console.log(ordersSet);

//deleting an element from the set
ordersSet.delete('Muttoin');
console.log(ordersSet);

//delete all elements of the set
// ordersSet.clear()


for (const order of ordersSet) console.log(order);

//Example

const staff = ['Waiter','Chef','Manager','Chef','Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);


const italianFoods = new Set([
    'pasta',
    'gnocchi',
    'tomatoes',
    'olive oil',
    'garlic',
    'basil',
  ]);
  
const mexicanFoods = new Set([
    'tortillas',
    'beans',
    'rice',
    'tomatoes',
    'avocado',
    'garlic',
  ]); 


//sets intersection - present in both sets without duplicates

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log(commonFoods);

console.log([...commonFoods]);

//union -  supported only in es2025

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log(italianMexicanFusion);

//difference - order matters here
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log(uniqueItalianFoods);

const uniqueMexicanFoods =  mexicanFoods.difference(italianFoods);
console.log(uniqueMexicanFoods);


