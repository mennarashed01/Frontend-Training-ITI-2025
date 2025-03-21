// 3- Try the following assignments and write your comment 

//a- Try to print firstName before the line of the variable definition? 
console.log("first name before definition: ", fname);  //undefined
var fname = "menna";
console.log("first name after definition: ", fname);   //menna

console.log("first name before definition: ", fName);  //undefined
var fName;
fName = "mahmoud";
console.log("first name after definition: ", fName);  //mahmoud

// console.log("first name before definition: ", Fname);   //error (stop interpretation until you fix this error )
Fname = "rashed";
console.log("first name after definition: ", Fname);    //rashed

/*b- According to assignment a ,What if you define the firstName with
var ? what will appear on console!*/
//  undefined

/*c- Create another embedded script before external script in html and 
try to call firstName ? does the result change if we define firstName 
with or without var keyword */
// NO , will make error in two cases (with or without var keyword)

//d- Try to change your firstName character at index 3
// ,firstName[3]=’A’ Then print firstName variable.
var firstName = "";
for (var i = 0; i < Fname.length; i++){
    if (i == 3)    // to change index 3 
        firstName = firstName + "A";
    else 
        firstName = firstName + Fname[i];
}
console.log("first name after change index 3 : ",firstName);


