console.log(this); //this refers to the global browser object

function abc () {
    "use strict";
    return this; //within a simple function this keyword with strict mode will be 
    // undefined without strict mode it will be referring the global browser object
}

console.log(abc());

let sample = () => console.log(this); //in a arrow function it refers to this of 
// the parent that is the global browser object

sample();



const somnath = {
    year: 1993,
    calcAge: function () {
        console.log(this); //here this refers to the object itself i.e; somnath object
        console.log(2030 - this.year);
    }
};

somnath.calcAge();

const bc = somnath.calcAge;

bc(); //referring global object since this is not in strict mode else it would have been undefined!

