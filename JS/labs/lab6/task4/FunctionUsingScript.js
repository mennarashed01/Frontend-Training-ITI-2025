//*contain calling functions only

//? sum of two numbers
console.log("Sum: ", sumNum(2, 3));

//? fullname
console.log("full name: ", fullName('menna'));
console.log("full name: ", fullName('menna',"mahmoud"));
console.log("full name: ", fullName('menna', 'mahmoud', 'rashed'));

//? calling factorial function
var facNum = prompt('enter the factorial number: ');
console.log('fac: ', factorial(facNum));

//? calling calculation function
var num1 = parseInt(prompt('enter number1: '));
var num2 = parseInt(prompt('enter number2: '));
var op = prompt('enter operation');
cal(num1, num2, op);

//? degree of student
var deg = prompt('enter your degree: ');
console.log('Grade: ', grade(deg));

//? sum of two variables sumFn(10,20)
console.log('Sum is: ', sumFn());
console.log('Sum is: ', sumFn(1));
console.log('Sum is: ', sumFn(1, 2));

//? char code of string
console.log("char code of the string: ", charCode('menna'));