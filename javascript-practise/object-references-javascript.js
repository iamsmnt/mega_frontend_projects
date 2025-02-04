const mia = {
    firstName: "Mia",
    lastName: "Melano",
    age: 16,
    family:['Diana','Leah']
};

const myMia = mia;
myMia.lastName = "Mahato";

console.log('Before: ', mia);
console.log('After: ', myMia);

marriedMia = {...mia}  //copies only first level objects not nested objects
marriedMia.lastName = "Mahato"
marriedMia.family.push("Lana")



//Deep Clone/Copy

const miaClone = structuredClone(mia); //<--------- structured clones can do a deep clone

miaClone.lastName = "Mahato"
miaClone.family.push("Lana")

console.log('Before: ', mia);
console.log('After: ', miaClone);