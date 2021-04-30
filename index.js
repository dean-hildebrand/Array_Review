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

//------------------ Includes Function ---------------------------

// const numbers = [2, 3, 5];

// console.log(includes(numbers, 5));

// function includes(array, searchElement) {
//   for (let element of array) {
//     if (element === searchElement) {
//       return true;
//     }
//     return false;
//   }
// }

//------------------ Excludes Function ---------------------------

// const numbers = [1, 2, 3, 4, 5];

// const output = except(numbers, [2, 5]);

// console.log(output);

// function except(array, excluded) {
//   const output = [];
//   for (let element of array) {
//     if (!excluded.includes(element)) {
//       output.push(element);
//     }
//   }
//   return output;
// }

//------------------ Moving an element ---------------------------

// const numbers = [1, 2, 3, 4, 5];

// const output = move(numbers, 0, -5);

// console.log(output);

// function move(array, index, offset) {
//   const position = index + offset;
//   if (position >= array.length || position < 0) {
//     console.error("Invalid offset");
//     return;
//   }

//   const output = [...array];
//   const element = output.splice(index, 1)[0];
//   output.splice(position, 0, element);
//   return output;
// }

//------------------ Count Occurences ---------------------------

// const numbers = [1, 2, 3, 4, 1, 5, 1];

// const count = countOccurences(numbers, 5);

// console.log(count);

// function countOccurences(array, searchElement) {
//   let count = 0;
//   for (let element of array) {
//     if (element === searchElement) count++;
//   }
//   return count;
// }

// function countOccurences(array, searchElement) {
//   return array.reduce((accumulator, currentValue) => {
//     const occurence = currentValue === searchElement ? 1 : 0;
//     console.log(accumulator, currentValue, searchElement);
//     return accumulator + occurence;
//   }, 0);
// }

//------------------ Get Max ---------------------------

let numbers = [9, 2, 3, 400, 1, 51, 1];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
  if (array.length === 0) return undefined;

  let max = array[0];
  for (let element of array) {
    if (element > max) max = element;
  }
  return max;
}
