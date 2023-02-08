//CALLBACK !

// REDUCE FUNCTION

const array1 = [1,2,3,4]

//0 + 1 + 2 + 3 + 4
const initialValue = 2;
const sumWithInitial = array1.reduce (
  (accumulator, currenValue) => accumulator * currenValue, initialValue);

console.log(sumWithInitial);

// 1. Create a variable sum and assign it to 0.
// 2. Loop through the array elements.
// 3. Add the current element to the sum variabel
// 4. Return the sum variable after going through all elements.

const numbers = [1,2,3,4,5]

const reduce = (arr, reduceFunc, initialValue) => {
    let sum = initialValue;
    for (let i = 0; i < arr.length; i++) {
        sum = reduceFunc(sum, arr[i])
    }
    return sum;
}


// 5. Use the reduce funtion to sum up all the numbers in the array.
// 6. Use the reduce funtion to multiply all the numbers in the array.
const sum = reduce(numbers, (sum, num) => sum + num, 0); 
const multiply = reduce(numbers, (sum, num) => sum * num, 1);

console.log(multiply);

