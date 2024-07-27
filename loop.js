//-------------------For Loop -------------------------------------

// for (let i = 1; i<=5; i++){
//     console.log("Amit Gupta");

// }
 

//Calculate sum of 1 to 5
// let sum = 0;
// let n = 7;
// for (let i = 1; i<=n; i++){
//     sum = sum + i;
// }
// console.log(sum);


//Infinite Loops
// for(let i = 1; i>=0; i++){
//     console.log(i);
// }


//-----------------------------------------------------------


//------------------------While Loop---------------------------

// let i = 1;
// while(i<=5){
//     console.log(i);
//     i++;
// }


//-----------------Do While Loop---------------------------
// let i = 1;
// do{
//     console.log(i);
//     i++;
// }while(i<=5); 



//-------------------For Of Loop ------------------------

// let str = "JavaScript";
// let size = 0;
// for (let i of str ){
//     console.log(i);
//     size++; 
// }
// console.log(size);


//------------------For In Loop-------------------------

// let student = {
//     name: "Amit Gupta",
//     age: 24,
//     cgpa: 7.5,
//     isPass: true,
// }
// for(let key in student){
//     console.log(student[key]);
// }


//--------------------Practice Question------------------------

// for (let num = 0; num <= 100; num++){
//     if(num%2 === 0){
//         console.log(num)
//     }
// }


// for (let num = 0; num <= 100; num++){
//     if(num%2 !== 0){
//         console.log(num);
//     }
// }

// let gameNum = 25;
// let userNum = prompt("Guess the game number:");
// while(userNum != gameNum){
//     userNum = prompt(" You entered worng number. Guess again:");
//     console.log("congratulations, you entered the right number");
// }