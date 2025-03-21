/*Define an array of numbers (only let is allowed)  
    Sort them ascending then descending (using array sort method and Arrow functions)  
    Filter numbers larger than 50 (using array filter method and Arrow functions)    
    Display Max and Min Numbers (using math methods and spread operator)*/

let arrOfNum = [1, 97, 9, 67, 6, 10];
console.log("The Original array is: ", arrOfNum);

//sort them according order: 
let ascendingArr = [...arrOfNum].sort((a, b) => a - b);
console.log("Ascending order: ", ascendingArr);

//sort them descending order
let descendingArr = [...arrOfNum].sort((a, b) => b - a);
console.log("Descending order: ", descendingArr);

//filter numbers larger than 50 
let filterArr = arrOfNum.filter(num => num > 50);
console.log("numbers are greater than 50: ",filterArr);

//display max number
console.log("Max number is : ", Math.max(...arrOfNum));

//display min number
console.log("Min number is : ", Math.min(...arrOfNum));
