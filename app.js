//* Array methods
// this methods take callback
// they are higher order function

//* For Each method
// perform task on all the elements of array
// syntax -> arr.forEach(functionName or define function or name);

let arr = [1, 2, 3, 5, 6]

function print(el){
    console.log(el);
}

// arr.forEach(print);

// It is use to perform any task on ALL the element of the array

//* Map
// same as for each but it store all the value in the variable
// length of this new variable is same as array on which map used

let num = [1, 2, 3, 4]
let double = num.map((n) => n**2);

//* Filter
// it is a filter that filter the elements from array
// if the function return true then filter function add that element in new array
// if false then it will not add that in new array

let num1 = [1, 2, 3, 4, 5, 6, 7, 8]

let even = num1.filter((n) => n%2==0);
// -> even variable have -> [2, 4, 6, 8]


//* Every 
// return true if every elements of array gives true for some function. else return false
// all condition need to have true value so the overall output will be true

let arr1 = [2, 4, 6, 8]
console.log(arr1.every((n) => n%2==0));  //* -> return true

//* Some 
// same as every but like or if some of are true then overall output will be true

[1, 2, 3, 4].some((n) => n%2==0); //* -> return -> true


//* Reduce 
// reduce the array to a single value
// syntax -> arr.reduce(reducer function with 2 arguments for(accumulator, element));
// the first argument called accumulator
// second is called element
// accumulator -> after every operation the result value will store in accumulator and used in second call and at last we got our final accumulator as a output

let num2 = [1, 2, 3, 4]
let finalValue = num2.reduce((res, el) => res+el);
// console.log(finalValue); //* -> output will be 10

// first res -> null value in it -> it got added by first element -> the result got transfer to the next accumulator -> another additon done -> at last we got every element added -> return a single value
// 0 + 1 -> 1
// 1 + 2 -> 3
// 3 + 3 -> 6
// 6 + 4 -> 10 
//* final output is 10.



