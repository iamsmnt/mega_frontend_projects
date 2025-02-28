'use strict';

//function with default parameters

const bookings = []

const createBooking = function(flightNum, numPassengers=1, price=199 * numPassengers) { //initializes default values with previously defined param

    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123',2,399);
createBooking('LH123',2);
createBooking('LH123',5);

//not allowed to skip any params
createBooking('LH124',1000);

//to skip any params
createBooking('KLM21', undefined, 1000);


//how passing arguments works: values vs. reference

const flight = 'KM43'
const somnath = {
    name: 'Somnath Mahato',
    passport: 2353434315
}

const checkIn = function(flightNum, passenger) {
    flightNum = '6E234';
    passenger.name = 'Mr. ' + passenger.name;
    if(passenger.passport === 2353434315){
        console.log("CheckedIN")
    } else {
        console.log('Wrong Passport')
    }
}

checkIn(flight,somnath);
console.log(flight);
console.log(somnath);

//whenever we pass an object to a function, its reference is being sent to the function
//when we copy an object to a variable the copied object has the same reference in the heap


const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 100000000000)
}

newPassport(somnath);     //two functions using same object to modify the property and its getting changed
checkIn(flight,somnath);

///Higher Order Functions

const oneWord = function(str) {
    return str.replace(/ /g,'').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...others]= str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

//function accepting another function as parameter
const transformer = function(str, fn) {
    console.log(`Original String: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);  //name is a property of js function
}

// transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord); //<---- callback function oneWord - higher order function - transformer

const high5 = function() {
    console.log('👋');
};

// higher order functions in js are usually abstractions

['Somnath','Abhishekh','Monu','Roshan'].forEach(high5);


//functions returning other functions - traditional

// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting} ${name}`);
//     }
// }



//function returning another function using arrow functions
const greet = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');
greeterHey('Somnath'); //closures
greeterHey('Suchismita'); //closures

greet('Good Evening')('Bengaluru!');



//call methods

const indigo = {
    airline: 'Indigo',
    iataCode: '6E',
    bookings: [],
    book(flightNum,name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
        this.bookings.push({flight: `${this.iataCode} ${flightNum}`,name});
    }
    
}

indigo.book(239, 'Somnath Mahato');
indigo.book(635, 'Suchismita Mahato');

const akasair = {
    airline: 'Akasa Air',
    iataCode: 'AAI',
    bookings: []
};

const book = indigo.book; //<----- book function is assigned from the indigo object

// book(23,'Bisakha Mahato'); this doesnot work because the this keyword doesn't know that it should point to the akasair function

book.call(akasair,23,'Bisakha Mahato');
console.log(akasair)

book.call(indigo, 432, 'Rituparna Mahato');
console.log(indigo);


//apply methods
const flightData = [823,'Soma Mahato'];
book.apply(akasair,flightData);  //not used more in modern javascripts
console.log(akasair);

book.call(akasair,...flightData); //mostly used in modern javascript


//bind method - sets this to any function called, however it returns new fucntions

const bookAkasa = book.bind(akasair);
const bookIndigo = book.bind(indigo);

bookAkasa(235,'Cute Bombyat');
bookIndigo(454,'Heavy Arsenal');

//bind also accepts multiple/single arguments

const book6E = book.bind(indigo,76); //function only books flight for 76 flight number
book6E('Mia Melano');
book6E('Lah Goeteh');


//with event listeners

indigo.planes = 300
indigo.buyPlane = function() {
    console.log(this);
    this.planes++                   //in an event handler function
    console.log(this.planes);
};


//---------------------------    IMPORTANT      -------------------------------------------
// document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane);  
// In an event handler function, the this keyword always points to the element on which the handler is attached to
// in above function it points to the button element
// the above function this keyword can point to the object passed using the bind keyword
// document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(indigo));  

//partial application - means we can pre-set parameters

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1,200));

const addVAT = addTax.bind(null,0.23); //parameters position are crucial

console.log(addVAT(100));




const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0), 
    registerNewAnswer() {
        // const answer = prompt(`${this.question}\n`)
    }
}

poll.registerNewAnswer();


//Immediately Invoked Function Expressions (IIFE)

const runOnce = function () {
    console.log('This will never run again');
};
runOnce();

//example iife
(function () {
    console.log('This will never run again');
})();

(() => console.log('This will also never run again!'))();



//Closures;


//example 1
let f;

const g = function () {
    let a = 23;
    f = function (){
        a = 2 * a;
        console.log(a);
    }
}

const h = function() {
    const b = 223;
    f = function() {
        console.log(b * 2);
    }
}

g(); //Even after g is executed 
f(); //f still have variable a's access
h();
f();


console.dir(f);


//example 2

const boardPassengers = function(n,wait) {
    const perGroup = n/3;

    setTimeout(function(){
        console.log(`we are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`will start boarding in ${wait} seconds`);
};

boardPassengers(180,3);



 

