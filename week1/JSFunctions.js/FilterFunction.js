//CALLBACK !
  
  // FILTER FUNCTION
  // 1. Create an empty array filterArr.
  // 2. Loop through the array elements.
  // 3. Called the filterFun function with curret element as the argument.
  // 4. If the result is true, push the element to the filterArr array.
  // 5. Return filterArr array after going through all the elements.

  const numbers = [1,2,3,4,5]

  // ONE SOLUTION TO FILTER TASK
  function myFilter (array, filterFunc) {
    const filterArray = [];

    for (let i = 0; i < array.length; i++) {
      let result;
      if(filterFunc(array[i])) {
        result = array[i];
        filterArray.push(result);
      }
  }
return filterArray;
}

// const even = myFilter(numbers, (x) => x % 2 == 0)
// console.log(even);

// ANOTHER SOLUTION TO FILTER TASK
function myFilter (array, filterFunc) {
  const filterArray = [];

  for (let i = 0; i < array.length; i++) {
    filterFunc(array[i]) && filterArray.push(array[i]);
}
return filterArray;
}

const even = myFilter(numbers, (x) => x % 2 == 0) // (x) er callback
console.log(even);