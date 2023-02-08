// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   function greeting(name) {
//     console.log(`Hello, ${name}!`);
//     readline.close();
//   }
  
//   function processUserInput(callback) {
//     readline.question(`What's your name? `, callback);
//   }
  
//   processUserInput(greeting);
//   processUserInput(name => console.log(`Hello, ${name}!`.toUpperCase()));

function add(x, y) {
    return x + y;
  }
  
  function multiply(x, y) {
    return x * y;
  }
  
 //Using lamda. 
 const substract = (x, y) => x - y;

  function operateOnNumbers(operator, x, y) {
    return operator(x, y);
  }
  
  console.log(operateOnNumbers(add, 3, 4));   // 7
  console.log(operateOnNumbers(multiply, 3, 4));   // 12
  console.log(operateOnNumbers(substract, 10, 4));   // 6