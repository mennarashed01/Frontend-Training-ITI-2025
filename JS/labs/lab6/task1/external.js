//define array of numbers and print it.
var arrOfNumber = [10, 3, 3, 54, 10, 1, 4, 0, 0,60,66];
console.log("array elements: ", arrOfNumber);


//function to remove duplicate items from an array.
function dupFun(arr) {
    unDupArr = [];
    for (var i = 0; i < arr.length; i++){
        //check if the element already in the unDupFnArr or not
        if ((unDupArr.indexOf(arr[i]) == -1))
        {
            unDupArr.push(arr[i]);
        }
    }
    console.log('Array elements without duplicate values: ',unDupArr);
}
dupFun(arrOfNumber);

//sort array numbers ascending order (using callback function)
function AsSortFun(arr) {
    // Sorting in ascending order   
    //if a is smaller it remains before b 
    //if a is greater it swaps positions
    arr.sort((a, b) => a - b);
    console.log('sorted array according to ascending: ' + arr);
}
AsSortFun(arrOfNumber);

//sort according to descending order: (using callback function)
function deSortFun(arr) {
    // Sorting in DEscending order
    //if a is greater it remains before b 
    //if a is smaller it swaps positions
    arr.sort((a, b) => b - a); 
    console.log('sorted array according to descending: ' + arr);
}
deSortFun(arrOfNumber);


//Filter numbers larger than 50 (user defined )
function filterFun(ele) {
    return ele > 50;
}
for (var i = 0; i < arrOfNumber.length; i++){
    if(filterFun(arrOfNumber[i]))
        console.log(arrOfNumber[i]);
}

//Filter numbers larger than 50 (built in function)
var filterArr = arrOfNumber.filter(function (ele) { return ele > 50; });
console.log("filter array numbers >50 ",filterArr);

//maximum number (user defined function)
function maxFun(arr) {
    var maxNum = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] > maxNum)
            maxNum = arr[i];
    }
    console.log("max number is: ", maxNum);
}

maxFun(arrOfNumber);

//maximum number (built in function)
function mXFun(arr) {
    var maxNum = arr[0];
    for (var i = 1; i < arr.length; i++){
        maxNum = Math.max(maxNum, arr[i]);
    }
    console.log("Max number: ", maxNum);
}
mXFun(arrOfNumber);



//minimum number (user defined function 
function minFun(arr) {
    var minNum = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] < minNum)
            minNum = arr[i];
    }
    console.log("min number is: ", minNum);
}
minFun(arrOfNumber);

//minimum number (built in function)
function mIFun(arr) {
    var minNum = arr[0];
    for (var i = 1; i < arr.length; i++){
        minNum = Math.min(minNum, arr[i]);
    }
    console.log("MIN number: ", minNum);
}
mIFun(arrOfNumber);