//* contain all assignments of functions

//? a- Function accept 2 inputs with any type and return the summation result 
function sumNum(num1, num2) {
    return num1 + num2;
}

//?b-Function accept first , middle and last name of the user and return user
//? full name (what if any value is undefined at the time of calling ??)
function fullName(fname, mName, lName) {
    if (fname  == undefined && mName == undefined && lName == undefined)
        return 'plz enter your full name '
    else if (mName == undefined && lName == undefined)
        return fname
    else if (lName == undefined)
        return fname + " " + mName 
    else 
        return fname + " " + mName + " " + lName
}

//? c- Function accept one input take from user and return the factorial 
function factorial(_num) {
    if ( _num <= 0)
        return ' you must enter positive number';
    else if (_num == 1)
        return 1;  //because  !1 = 1
    else{
        return _num * factorial(_num - 1);
    }
}

/*?
d- Create calculator as JavaScript Function that  accept 3 inputs 
from user (number1,number2,operation)  and return the 
mathematical operation according to the type of operator and 
show result at alert */
function cal(number1, number2, operation) {
    var result = 0;
    switch(operation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 == 0) {
                alert('Error: division by zero is not allowed ');
                return;
            }
            result = number1 / number2;
            break;
        default:
            alert("Invalid operation. Please use +, -, *, or /.");
            return;
    }
    alert('Result: ' + result);
        
}

//?e- Create JavaScript function that take the degree of student from 
//? user and calculate  the grade (Excellent,VGood,Goog,Fail) 
function grade(degree) {
    if (degree >= 85)
        return 'Excellent';
    else if (degree >= 70)
        return 'vGood';
    else if (degree >= 50)
        return 'Good';
    else
        return 'Fail';
}

//? f- Function that take two inputs with default values and try all
//? case for return the summation as local variable

function sumFn(num1 = 10, num2 = 20) {
    var sum = num1 + num2;
    return sum;
}

//? g- Make a function to indicate the meaning of
//? (local ,global, hosting )data with debugging it
// _data(); //undefined (because function name hosting inside the memory and doesn't )
function _data(x) {
    //x is defined in the _data function
    console.log(x); //will display 10 not 5 because he take value of it from global scope
    var x = 5;  
}
// _data(); //undefined
var y = 10;
// _data(y);


//! h- (Bouns)
//? function that take string input and return the char code for it
function charCode(str) {
    charArr = [];
    for (var i = 0; i < str.length; i++){
        charArr[i] = str[i].charCodeAt();
    }
    return charArr.join(' ');
}