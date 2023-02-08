

  //CALLBACK !
  

  //MAP FUNCTION
  // 1. create a function
  // 2. create a new array, that array will be returned
  // 3. Loop through the array
  // 4. For each element, call the function

  const numbers = [1,2,3,4,5]

  function map(array, mapFunc) {
    const mapArr = [];

    for (let i = 0; i < array.length; i++) {
        const result = mapFunc(array[i], i); //element, index //mapFunc er callback function
        mapArr.push(result);
    }

    return mapArr;
  }

  
  const square = map(numbers, (num, i) => num ** 2); //element, callbackfunction?
  console.log(square);

  //print evenNumbers
  const evenNumbers = numbers.filter(x => x % 2 == 0 )
  console.log(evenNumbers)
  

