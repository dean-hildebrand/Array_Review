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

// let numbers = [9, 2, 3, 400, 1, 51, 1];

// const max = getMax(numbers);

// console.log(max);

// function getMax(array) {
//   if (array.length === 0) return undefined;

//   let max = array[0];
//   for (let element of array) {
//     if (element > max) max = element;
//   }
//   return max;
// }

//------------------ Get Max ---------------------------

const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

//All the movies in 2018 with rating > 4
//Sort by rating in descending order
//Pick title and display on console

// function moviesWith4Rating(array) {
//   let newArr = [];
//   for (let movie in array) {
//     if (array[movie].year === 2018) newArr.push(array[movie]);
//   }
//   return newArr;
//   const titles = array
//     .filter((movie) => movie.year === 2018 && movie.rating >= 4)
//     .sort((a, b) => a.rating - b.rating)
//     .reverse()
//     .map((movie) => movie.title);
//   console.log(titles);
// }

// console.log(moviesWith4Rating(movies));

//----------------FUNCTIONS PRACTICE-----------------------------

// const numArr = [1, 2, 3];

function sum(...items) {
  if ((items.length = 1 && Array.isArray(items[0]))) {
    items = [...items[0]];
  }
  return items.reduce((a, b) => a + b);
}

console.log(sum([1, 2, 3, 4]));
