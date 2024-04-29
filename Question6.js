{/*
Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
Addendum:
Please, keep in mind, that JavaScript is by default sorting objects alphabetically

*/}

function flattenAndSort(array) {

//flatten a two dimensional array
const flattenArray = array.reduce((acc, curr) => acc.concat(curr), []);

//sort the array
const sortedArray = flattenArray.sort((a,b) => a - b);

//return the sorted array
return sortedArray;
    
}


const array = [[3, 2, 1], [7, 9, 8], [6, 4, 5]];

console.log(flattenAndSort(array));


