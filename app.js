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
// console.log(arr1.every((n) => n%2==0));  //* -> return true

//* Some 
// same as every but like or if some of are true then overall output will be true

// [1, 2, 3, 4].some((n) => n%2==0); //* -> return -> true


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


//* Maximum value in array
// using reduce

let num3 = [2, 3, 4, 5, 7, 6, 8, 10 ]
let maxValue = num3.reduce((max, el) => {
    if(el > max){
        return el;
    } else {
        return max;
    }
});
// console.log(maxValue);

//* Practice Qs

//Qs1

let num4 = [10, 20, 30, 40, 35]
let check = num4.every((n) => n%10==0);
// console.log(check);

//Qs2

let minNum = num3.reduce((min, el) => {
    if(el < min){
        return el; 
    } else {
        return min;
    }
});

//* Default parameters
// if we want to give a default value to our arguments
// syntax -> function func(a, b = 2){ //* -> if we pass only a value then default value for b is always 2
    //do something
//}

function sum(a, b =2){
    return a + b;
}
sum(2); //* -> return 4 
sum(2,5); //* -> return 7


//* Spread
// expand an iterable into multiple values
// if we want to pass all the value of our array then we can use spread

Math.min(...num3); //* -> return 2 
// console.log(..."AnshuGupta"); //* -> return -> A n s h u G u p t a

//* Spread with array literals

let arr3 = [1, 2, 3, 5]
// let newarr3 = arr3 
//   or
// let newarr3 = (...arr3)

let chars = [..."anshu"]
// chars -> ["a", "n", "s", "h", "u"]

let odd = [1, 3, 5, 7]
let evenNum = [2, 4, 6, 8]
let newNum = [...odd, ...evenNum]
// newNum -> [1, 3, 5, 7, 2, 4, 6, 8]



//* Spread with object literals

const data = {
    email: "anshugupta@gamil.com",
    password: 1234
};

const newData = {...data, id: 125};
// we copy the object into new variable
// then we add id key into that


//* Rest 
// opposite of spread
// same syntex as spread
// allows a function to take an indefinite number of arguments and bundle them in an array

function sumArr(...arrgs){   //* this can take lots of arguments
    for(let i=0; i<arrgs.length; i++){
        console.log(`you gave us : ${arrgs[i]}`);
    } 
}


//* Destructuring
// storing value of array into multiple variable
// old array will not change

let name = ["tony", "Anshu", "Anjali", "Anushka"]
let [winner, runnerup, ...others] = name;
console.log(winner, runnerup); //* output -> 'tony' 'Anshu'
// others -> ["Anjali", "Anushka"] (destructuring + rest)


//* Destructuring on objects

const student = {
    name: "Anshu",
    age: 21,
    class: "BCA",
    subject:"computer science",
    usename: "anshugu99",
    password: 1234
};

let {username, password} = student;
// variable usename -> "anshugu99"
// variable password -> 1234
// we need to name our variable same as Key
// other wise it will show undefine
// if we want to save object info into diffrent name variable :-
//* let [username: user] = student;
// now user -> "anshugu99"
 




