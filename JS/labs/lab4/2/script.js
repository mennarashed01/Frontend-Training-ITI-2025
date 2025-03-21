/*
2- Now inside the html create an embedded tag , then apply the 
following assignments and print the result on console (console.log 
function) 
*/

//define variables
var number1 = 10;
var number2 = 20;
var number3 = 30;
var flag = true;
var firstName = "menna";
var lastName = "rashed";

//a- Summation of number1 and number2 
var sum1 = number1 + number2;
console.log(number1 + " + " + number2 + " = " + sum1);  //30

//b- Summation of number1 and numbers 
var sum2 = number1 + number2 + number3 ;
console.log(number1 + " + " + number2 + ' + '+  number3 +  " = " + sum2); //60

//c- Summation of flag and number2 
sum3 = number2 + flag;
console.log('result= ' + sum3);    //21 because in this case flag = 1(true)

// d- Summation of firstName and flag 
console.log(firstName + flag);    //mennatrue 

// e- Summation of number1 and firstName 
res = number1 + firstName
console.log(res);      //10menna

// f- Multiplication of number1 and flag 
var mul = number1 * flag;
console.log('mul = ' + mul);    //10*1 = 10

// g- Divide number1 and latName 
var divide = number1 / lastName;
console.log("divide = ", divide);  //NaN => not a number (when you divide number on the string)

// h- Print your full Name using firstName and lastName variables 
fullname = firstName + " " + lastName; //concatenate between two string 
console.log("My full name is : ", fullname);    //menna rashed

// i- Display lastName characters on console as array of characters
for (var i = 0; i < lastName.length; i++){
    console.log(lastName[i]);   //print each character in the lastName
}