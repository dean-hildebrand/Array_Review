// let array1 = [1, 2, , 3, 4, 5];

// let found = array1.find((elem) => {
//   return elem > 4;
// });

// const sum = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );

// console.log(sum);

//-------------- Array From Range ----------------------------

// const number = arrayFromRange(-1, 4);

// function arrayFromRange(min, max) {
//   let arr = [];
//   for (let i = min; i <= max; i++) arr.push(i);
//   return arr;
// }

// console.log(number);

//------------------ Includes ---------------------------

const numbers = [2, 3, 5];

console.log(includes(numbers, 5));

function includes(array, searchElement) {
  for (let element of array) {
    if (element === searchElement) {
      return true;
    }
    return false;
  }
}
