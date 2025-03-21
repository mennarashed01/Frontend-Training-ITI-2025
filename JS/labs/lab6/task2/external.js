//eval() executes a string of JavaScript code

var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function sumAll(numbersArray) {
    //sum calculation using eval 
    var sum = eval(numbersArray.join('+'));
    console.log("sum: " + sum);

    //product calculation using eval
    var product = eval(numbersArray.join("*"));
    console.log("product: " + product);
}

sumAll(numbersArray);

//without parameters
function sumAll() {
    var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    //sum calculation using eval
    var sum = eval(numbersArray.join('+'));
    console.log('sum: ' + sum);

    //product calculation using eval
    var product = eval(numbersArray.join('*'));
    console.log("product: " + product);
}

sumAll();