/*
Define javascript function that takes only 2 arguments 
operator and any numbers of integers (using Rest operator) 
then display the result of operation on console on one line  
(using substitution $ with brackets ` ) as follow 
“result of sum operation for 3,1,6,3 is 13"
*/
function calFun(op, ...numbers) {
    return eval(numbers.join(op));
}

console.log(`result of sum operation for 3,1,6,3 is ${calFun('+',3,1,6,3)}`);