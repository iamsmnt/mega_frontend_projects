"use strict";
console.log(this); //this refers to the global browser object

function abc () {
    // "use strict";
    return this; //within a simple function this keyword with strict mode will be 
    // undefined without strict mode it will be referring the global browser object
}

// console.log(abc());

let sample = () => console.log(this); //in a arrow function it refers to this of 
// the parent that is the global browser object

// sample();

// var firstName = "Sujata"

const somnath = {
    firstName: "Somnath",
    year: 1993,
    calcAge: function () {
        console.log(this); //here this refers to the object itself i.e; somnath object
        console.log(2030 - this.year);
    },
    greet: function () { 
        console.log(this);
        console.log(`Hey ${this.firstName}`)
    },

};

// somnath.calcAge();

const bc = somnath.calcAge;

// bc(); //referring global object since this is not in strict mode else it would have been undefined!

// somnath.greet();


// function inside a method

const daddy = {
    firstName: "Somnath",
    year: 1993,
    calcAge: function () {
        // console.log(this); //here this refers to the object itself i.e; somnath object
        console.log(2030 - this.year);
        const isMillenial = () => {
            console.log(this)
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    },
    greet: function () { 
        // console.log(this);
        console.log(`Hey ${this.firstName}`)
    },

};

daddy.greet();
daddy.calcAge();


// in situation where we need to consider more arguments in a function
// we use the arguments function this is only applicable for normal functions and not arrow function

const addExpr = function (a,b) {
    console.log(arguments);
    return a+b;
};

const a = addExpr(2,5)
const b = addExpr(3,5,6,7)

console.log(a,b);

var addArrow = (a,b) => {
    console.log(arguments);
    return a + b;
}

addArrow(2,5,5,5);