// a function called calculate that takes 3 parameters: x, y and a callback called operation
// change the function to return a promise instead of a value
function calculate(x, y, operation) {
    return new Promise((resolve, reject) => {
      try {
        const result = operation(x, y);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  function add(x, y) {
    return x + y;
  }
  
  // Call the new calculate function with the appropriate parameters to test your code
  calculate(2, 5, add)
    .then(result => console.log("calculate function with two parameters and cb" + " " + result))
    .catch(error => console.error(error)); // 5

  
  // Now try to chain add, subtract, divide and multiply using the .then syntax to the new calculator functions that returns a promise. 
  // How is that possible?? Explain!!
  
  const substract = (x, y) => x - y;
  
  function divide(x, y) {
    if (y === 0) {
      throw new Error("Cannot divide by zero");
    }
    return x / y;
  }
  
  const multiply = (x, y) => x + y;


  calculate(5, 2, add) // 7
  .then(result => calculate(result, 2, substract)) //result = 7. 
  .then(result => calculate(result, 2, multiply)) // 7 - 2 because substact cb ergo 5
  .then(result => calculate(result, 2, divide)) // 5 / 2 
  .then(result => console.log("calculate with multiple then chained to calculate" + " " + result)) // 3.5
   .catch(error => console.error(error)); 
  
  
  // Change the calculate function to use the async/await syntax instead of promises
  async function calculate(x, y, operation) {
    try {
      const result = await operation(x, y);
      return result;
    } catch (error) {
      throw error;
    }
  }
  
// chains af operationer er muligt fordi  hvert .then kald returnerer et nyt promise med en outcome
// fra tidligere promise. 
// Første calculate funktion med result bliver først videre ned i chains som argument



// The async/await syntax is used to make asynchronous programming in JavaScript easier to read and 
// write, compared to using promises directly. With the async/await syntax, the code inside an async
//  function can be written in a way that resembles synchronous code, even though it is asynchronous.
//   The await keyword is used to wait for a promise to be resolved, and it automatically unwraps the value 
//   from the resolved promise, so you don't need to use .then handlers to access the result.