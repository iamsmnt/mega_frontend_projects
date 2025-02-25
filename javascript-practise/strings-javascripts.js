const airline = "Akasa Air";
const plane = "Airbus";

console.log(plane[0]);
console.log(airline.length);


//getting the first occurance of the index
console.log(airline.indexOf('r'));

//last index
console.log(airline.lastIndexOf('A'));

//strings slice methods
console.log(airline.slice(4)); // <---- this is a substring

console.log(airline.slice(0,airline.indexOf(' ')));

//negative index starts from the end
console.log(airline.slice(-1));

const checkMiddleSeat = function(seat) {
    //B and E are middle seats
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E')
    console.log('You got the middle Seat 😩')
    else console.log('You got lucky 😎')
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Somnath'));
console.log(typeof new String('Somnath'));


//changing the case of the string

console.log(airline.toLocaleLowerCase());
console.log(airline.toUpperCase());

//fix capitalization in name
const passenger = 'hsOmNaTh ' //Somnath

const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1)
console.log(passengerCorrect)


//to remove whitespaces from strings
const trimmedPassenger = passenger.trim();
console.log(trimmedPassenger);

//replacing values of strings - doesn't mutate the original string it creates a new string, also it only replaces the first occurances
console.log(passenger.replace('h',"D"));

//to replace all occurences
console.log(passenger.replaceAll('h','D'));

const trending = "the life in Instagram seems so beautiful, we just look at the asthetic and forget the hard work behind that"

//regular expressions
console.log(trending.replace(/the/g, 'The'));

//Booleans
const planes = 'A320neo';
console.log(planes.includes('A320'));
console.log(planes.startsWith('AN'));


//split method
console.log('my+beautiful+wife'.split('+'));
const [firstName, lastName] = 'Bishakha Mahato'.split(' ');


//join method
const newName = ['Ms.',firstName,lastName].join(' ');
console.log(newName);

//Padding
const message = "You will be mine";
console.log(message.padStart(25,"+").padEnd(35,'+'));
console.log('Bishakha'.padStart(25,'+').padEnd(35,'+'));

const maskCreditCard = function(number) {
    const str = number + ' '; //<- when one operand is string then everything will be string
    const last = str.slice(-4);
    return last.padStart(str.length, "X");
}

console.log(maskCreditCard(43224232525));
console.log(maskCreditCard("23928349923434"));

//Repeat 
const message2 = 'Bad Weather.... All Departures delayed....  \n';
console.log(message2.repeat(5));