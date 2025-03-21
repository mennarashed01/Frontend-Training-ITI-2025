//todo
/*1- Write a JavaScript function that accepts a string as a parameter and converts the first letter of 
each word of the string in upper case. 
Example : 'the quick brown fox' 
Output : 'The Quick Brown Fox' */
var str = 'the quick brown fox';
var outStr = '';
for (var i = 0; i < str.length; i++){
    //check if this letter is the first character
    if (i == 0) {
        outStr = outStr + str[i].toLocaleUpperCase();
    }
        //check if the letter is the whiteSpace if true add it and convert the 
        //next character to uppercase and add it then skip the next char
    else if(str[i] == " ") {
        outStr = outStr + ' ' + str[i + 1].toUpperCase();
        i = i + 1;
    }
        //if another character add it.
    else {
        outStr = outStr + str[i] 
    }
}
//print the output on the screen
document.write("Input: ", str +"<br>");
document.write("output: "+ outStr + '<hr style="border-top: 5px red dotted" >');

//todo
/*2- Write a JavaScript function that returns a passed string with letters in alphabetical order (Use 
String Methods) 
Example : javascript 
Output : aacijprstv */
var unsortStr = "javascript";
var sortStr = '';
var charArray = unsortStr.split('');  //convert string to an array

//sorting the character of the array according to the number of index
for (var i = 0; i < charArray.length - 1; i++) {
    for (var j = 0; j < charArray.length - i - 1; j++) {
        //if the char is bigger than the next char swap between them 
        if (charArray[j] > charArray[j + 1]) {
            var temp = charArray[j];
            charArray[j] = charArray[j + 1];
            charArray[j + 1] = temp;
        }
    }
}

//convert form array to string
for (var i = 0; i < charArray.length; i++){
    sortStr = sortStr + charArray[i];
}
document.write("Input: ", unsortStr +"<br>");
document.write("Output: "+sortStr + '<hr style="border-top: 5px red dotted" >');

//todo
/*3- Write a JavaScript function that accepts a string as a parameter and find the longest word 
within the string. (Bonus) 
Example : 'Web Development Tutorial' 
Output : 'Development' */
var longStr = 'web Development Tutorial ';
var arr = longStr.split(" ");
var longWord = ''
for (var i = 0; i < arr.length; i++){
    if (arr[i].length > longWord.length) {
        longWord = arr[i]
    }
}
document.write("Input: ", longStr +"<br>");
document.write("Output: "+ longWord + '<hr style="border-top: 5px red dotted" >');

//todo
/*4- Write a JavaScript function which accept a string as input and swap the case of each 
character. 
Example : 'Egypt' 
Output : 'eGYPT' */
var unConStr = 'Egypt';
var conStr = '';
for (var i = 0; i < unConStr.length; i++){
    //Ascii code of letter a is 97 
    //if the the Ascii code of letter greater than or equal 97 than this letter is lowercase.
    if (unConStr[i].charCodeAt() >= 97) {
        conStr = conStr + unConStr[i].toUpperCase();
    }
    else {
        conStr = conStr + unConStr[i].toLowerCase();
    }
}
document.write("Input: ", unConStr +"<br>");
document.write("Output: "+conStr + '<hr style="border-top: 5px red dotted" >');


//todo
/* 5- Write a JavaScript function to extract unique characters from a string. 
Example : "thequickbrownfoxjumpsoverthelazydog" 
Output : "thequickbrownfxjmpsvlazydg" */
var unUniqueStr = "thequickbrownfoxjumpsoverthelazydog";
var uniqueStr = '';
for (var i = 0; i < unUniqueStr.length; i++){
    if (uniqueStr.includes(unUniqueStr[i])){
        continue;
    }
    else {
        uniqueStr = uniqueStr + unUniqueStr[i];
    }
}
document.write("Input: ", unUniqueStr +"<br>");
document.write("Output: "+uniqueStr + '<hr style="border-top: 5px red dotted" >');

//todo
/*6- Write a JavaScript function to Display Random value from 0 to 9 (Use Math Object) */
var ranValue = Math.round(Math.random() * 9);
document.write(" random value : "+ ranValue + '<hr style="border-top: 5px red dotted" >');

//todo
/*7 - Write a JavaScript program to find the area of Circle where the radius is 5 
The area of a circle is π (Pi) times the Radius squared (Use Math Object) */
var radius = 5;
var area = Math.PI * Math.pow(radius, 2);
document.write("area of circle: " +area + '<hr style="border-top: 5px red dotted" >');