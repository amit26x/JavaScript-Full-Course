//  Learn how to reverse the order of elements in an array.

// let array = [1,2,3,4,5,6]
// function reverseElement(arr){
//     return arr.reverse();
// }
// console.log(reverseElement(array))


// Calculate the sum of elements in an array.

// let array = [1,2,3,4,5,6,7]
// function sumElement(arr){
//     return arr.reduce((acc, val) => acc + val, 0);
// }
// console.log(sumElement(array))



// Find the maximum value in an array.

// let array = [5,6,7,8,8,2,334]
// function maxElement(arr){
//     return Math.max(...arr);
// }
// console.log(maxElement(array))



// Create an array of only even numbers.
// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// function filterEven(arr){
//     return arr.filter(num=> num % 2 === 0);

// }
// console.log(filterEven(array))



// Merge two arrays into one.
// let arr1 = [1,2,3,4,5]
// let arr2 = [6,7,8,9]
// function mergeArray(arr1, arr2){
//     return [...arr1, ...arr2];
// }
// console.log(mergeArray(arr1,arr2))




// Count how many times an element appears in an array.

// let array = [1,2,2,3,3,3,4,4,4,4,5,5,5,5,5]
// function filterElement(arr, element){
//     return arr.filter(x => x === element).length;
// }
// console.log(filterElement(array, 5))



// Remove duplicate elements from an array.
// let array = [1,2,3,3,3,4,4,5]
// function removeElement(arr){
//     return [...new Set(arr)];
// }
// console.log(removeElement(array))




// Multiply each element of an array by a number.

// let array = [1,2,3,4,5,6,7,8,9]
// function multiplyElement(arr, multiplier){
//     return arr.map(x => x*multiplier);
// }
// console.log(multiplyElement(array,5))



//  Find both the minimum and maximum values in an array.
// let array = [1,2,3,4,5,6,7,89,]
// function findMinMax(arr){
//     return {min:Math.min(...arr), max:Math.max(...arr)}
// }
// console.log(findMinMax(array));


// Flatten an array of arrays into a single array.
let array = [[1,2],[3,4],[5,6]]
function flattenArray(arr){
    return arr.flat();
}
console.log(flattenArray(array))