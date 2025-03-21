/*1 - receive an array of numbers from user it's size will determined from user , 
	then receive it and make sure all values is Number
	then ask user to enter one of the following letter
	after each selected choice you have to ask user 
	if he | she want to repeated running */


function enterArr() {
	var arrOfNum = [];
	var len = parseInt(prompt('enter number of elements: '));
	for (var i = 0; i < len ; i++){
		var num = Number(prompt('Enter number ' + (i + 1) + ':'));
        
        if (isNaN(num)) {
            console.log('Please enter a valid number');
            return enterArr();  // Restart if invalid input
        }
        arrOfNum.push(num);
    }
    return arrOfNum;
}


//? a : to display array with the same receiving order
function aPrintArr(arr) {
	console.log('Array elements in the same order: ', arr);
}

//? b: to display array with ascending order : don't edit original object
function bSortArr(arr) {
    var sortedArr = arr.slice().sort((a, b) => a - b);
    console.log('Sorted array (ascending):', sortedArr);
}

// ?c : to display array with descending order
function cSortArr(arr) {
    var sortedArr = arr.slice().sort((a, b) => b - a);
    console.log('Sorted array (descending):', sortedArr);
}

// ?d : to reversed version of original array
function dReverseArr(arr) {
    console.log('Reversed array:', arr.slice().reverse());
}


//?e : to display even numbers only from array
//?if there no even numbers , display alert to inform user with that
function eEvenNum(arr) {
    var evenArr = arr.filter(num => num % 2 === 0);
    if (evenArr.length === 0) {
        alert("There are no even elements.");
    } else {
        console.log('Even numbers:', evenArr);
    }
}

//?f : display all numbers from array which divisible by received number , 
//?if there no result inform user with that
function fDivisibleArr(arr) {
	var num = Number(prompt("Enter a number to check divisibility:"));

    if (isNaN(num) || num === 0) {
        console.log("Invalid number entered.");
        return;
    }

	var divArr = arr.filter(value => value % num === 0);
	
    if (divArr.length === 0) {
        console.log("No numbers are divisible by", num);
    } else {
        console.log('Numbers divisible by ', divArr);
    }
}

// g: Apply 30% discount to all numbers
function gDiscountArr(arr) {
    var disArr = arr.map(num => num * 0.7);
    console.log('Array with 30% discount:', disArr);
}

// h: Concatenate array elements into a string
function hStrArr(arr) {
    console.log('String representation of array:', arr.join(''));
}

// Function to handle user choice
function choiceLetter(arr) {
    var char_ = prompt('Enter a, b, c, d, e, f, g, or h:').toLowerCase();

    switch (char_) {
        case 'a': aPrintArr(arr); break;
        case 'b': bSortArr(arr); break;
        case 'c': cSortArr(arr); break;
        case 'd': dReverseArr(arr); break;
        case 'e': eEvenNum(arr); break;
        case 'f': fDivisibleArr(arr); break;
        case 'g': gDiscountArr(arr); break;
        case 'h': hStrArr(arr); break;
        default:
            console.log("Invalid choice! Please enter a valid letter.");
            choiceLetter(arr);
    }
}

// Main function to run the program
function runProgram() {
    var arr = enterArr();
    choiceLetter(arr);
    
    var repeat = confirm('Do you want to run the program again?');
    if (repeat) {
        runProgram();
    }
}

runProgram();











