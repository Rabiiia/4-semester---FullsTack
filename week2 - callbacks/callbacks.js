
// a function called calculate that takes 3 parameters: x, y and a callback called operation
function calculate(x, y, operation) {
    return operation(x, y);
  }
  
  // a function called add that takes 2 parameters: x and y and returns the sum of x and y
  function add(x, y) {
    return x + y;
  }
  
  // Call the calculate function with the appropriate parameters to test your code
  const result = calculate(2, 3, add);
  console.log(result); // 5