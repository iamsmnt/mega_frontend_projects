//map is a datastructure to map values to keys
//in maps keys can have any types e.g; objects, arrays, etc

const rest = new Map();
rest.set('name','Meghana Biryani');
rest.set(1,'Marathahalli, Kundalhalli');
rest.set(2,'KR Puram, Mahadevapura');

rest.set('categories',['Italian','Pizzeria','Vegeterian','Organic'])
    .set('open',11)
    .set('close',23)
    .set(true,'We are open :D')
    .set(false,'We are closed :(')


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

console.log(rest.get('name'));
console.log(rest.get(true));
// console.log(rest);


//to check if the maps has a value
console.log(rest.has('categories'));
rest.delete(2);
// console.log(rest);



//clear
// rest.clear()

//size property
console.log(rest.size);

//arrays keys

rest.set([1,2],'Test');
console.log(rest.get([1,2]));  // both the keys are not same in the heap so the value is not retrieved here

//workaround is to decalre a variable with the array and then use the get method on the object
const arr = [1,2];
rest.set(arr,'Test');
console.log(rest.get(arr));



//setting up values inside a map without using the set method

const question = new Map ([
    ['question','How to impress a girl?'],
    [1,'Compliment her'],
    [2,'Be a pookie'],
    [3, 'both 1 & 2'],
    [4, 'Be a sigma male!'],
    ['correct',4],
    [true,"correct 🎉"],
    [false,'try again!']
]);

console.log(question);

//convert objects to maps
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

//Quiz app
// console.log(question.get('question'));
for (const [key,value] of question) {
    if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

//convert map to array

console.log(...question)