function calcAge(birthYear) {
    const age = 2025 - birthYear;

    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const firstName = "Somnath";
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a,b) {
                return a + b;
            }
        }
        console.log(millenial);

    }
    printAge();
    return age;
}

const firstName = "Somnath"
calcAge(1993)
