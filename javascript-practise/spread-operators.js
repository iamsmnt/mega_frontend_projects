const arr = [7,8,9];
const badNewArr = [1,2,arr[0],arr[0]];
// console.log(badNewArr);

const newArr = [1,2, ...arr];  //...variable would add all the values from the specified array
console.log(newArr);

