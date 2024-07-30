// Learn How to reverse the order of element in array.


// let array = [1, 2, 3, 4, 5, 6, 7];
// function reversearr(arr){
//     return arr.reverse();
// }
// console.log(reversearr(array))



//calculat the sum of element in array.

// let arr = [1, 2, 3, 4, 5, 6, 6];
// let sum = 0;
// for(let i = 0; i<arr.length; i++){
//     sum = sum + arr[i];
// }
// console.log(sum)




//  Find the maximum value in an array.

// let Arr = [200, 400, 500, 300, 250, 100];
// let maxVal = Arr.reduce((acc, current) => Math.max(acc, current));
// console.log(maxVal)




// Create an array of only even numbers.

let array = [1, 2, 3, 4, 5, 6, ,7 ,8 ,9, 10]
function filterEven(arr){
    return arr.filter(num=> num%2===0)
}
console.log(filterEven(array))