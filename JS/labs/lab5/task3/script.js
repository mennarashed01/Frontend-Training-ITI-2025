
//count the number of 'e' characters in the string
var str = prompt('enter your string to count the number of "e" characters in the string: ');
var count = 0;
for (var i = 0; i < str.length; i++){
    if (str[i] == 'e') {
        count += 1;
    }
}
document.write("The number of 'e' character in the string:  " + count+ "<br><br> <hr>");

//palindrome    
var _str = prompt('Enter the string to check palindrome: ');
var sens = confirm("Consider case sensitivity of the entered string?");

// Handle case sensitivity
if (!sens) {
    _str = _str.toLowerCase();
}

var arrOfChar = _str.split('');
var isPalindrome = true;

for (var i = 0; i < arrOfChar.length / 2; i++) {
    if (arrOfChar[i] !== arrOfChar[arrOfChar.length - 1 - i]) {
        isPalindrome = false;
        break;       // Exit early if not a palindrome
    }
}
//print result
if (isPalindrome) {
    document.write('Palindrome');
} else {
    document.write('Not palindrome');
}
