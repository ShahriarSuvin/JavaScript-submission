 //Problem 1: Write a function to calculate the area of a triangle.
    function areaOfTriangle(base, height){
        if(base <= 0 || height <= 0){
            return "all must be positive number";
        }else{
            //formula is 1/2*base*height.
            let area = (1 / 2) * base * height;
            return area;
        }
    }

    console.log("The area of the triangle is: " + areaOfTriangle(5,2));

    //Problem 2: Write a function to convert degrees to radians.
    function degreeToRadians(degrees){
        //formula
        let radians = (degrees * Math.PI) / 180 ;
        return radians;
    }

    console.log("Degrees to Radians is : " + degreeToRadians(90));

    //Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.
    function calculateFactorial(number){
        if(number === 0 || number === 1){
            return 1;
        }

        let factorial = 1;
        for(let i = 2; i <= number; i++){
            factorial *= i;
        }

        //2nd way by recursion
        //factorial = number * calculateFactorial(number -1);

        return factorial;
    }

    console.log(calculateFactorial(5));

    //Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.
    function isPrime(number){
        for(let i = 2; i <= number; i++){
            if(number % i !== 0){
                return true;
            }else return false;
        }
    }

    console.log(isPrime(12));

    //Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.
    function mergeArrays(arr1, arr2){
        return arr1.concat(arr2);
    }

    let arr1 = [1,2,4];
    let arr2 = [3,5];

    console.log(mergeArrays(arr1,arr2));

    //Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.
    function isLeapYear(year){
        //formula is :- it will divisible by 4 and 400 but 100
        if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
            return "This is a leap year";
        }else return "Not Leap year";
    }
console.log(isLeapYear(1996));

//Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.
function removeDuplicates(array){
    const uniqueArray = [];

    for(let item of array){
        if(!uniqueArray.includes(item)){
            uniqueArray.push(item);
        }
    }
    return uniqueArray;
}

console.log(removeDuplicates([]));

//Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.
function convertToCelsius(fahrenheit){
        //formula is: celsius = (fahrenheit - 32) * 5 / 9.
        let celsius = (fahrenheit - 32) * 5 / 9;

        return celsius;
}

console.log(convertToCelsius(32));

//Problem 9: Write a function to find the maximum of five numbers.
function findMax(a, b, c, d, e) {
    let max = a;
  
    if (b > max) {
      max = b;
    }
  
    if (c > max) {
      max = c;
    }
  
    if (d > max) {
      max = d;
    }
  
    if (e > max) {
      max = e;
    }
  
    return max;

    //return Math.max(a, b, c, d, e); "second way"
  }
  
  const a = 10;
  const b = 25;
  const c = 7;
  const d = 42;
  const e = 15;
  
  const maxNumber = findMaxOfFive(a, b, c, d, e);
  console.log("Maximum number is: " + maxNumber);

  //Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]
  function evenOdd(str){
    let length = str.length;
    if(length % 2 === 0){
        return "even";
    }else return "true"; 
  }
  

