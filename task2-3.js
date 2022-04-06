function worker (arr) {
    let sum = 0; 
      for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
  }
  
  function worker2 (arr) {
    let max = -1000; 
    let min = 1000;
    let diff = 0;
    
      for(var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
        max = arr[i];
      }
      
      if (arr[i] < min) {
        min = arr[i];
      }
      diff = Math.abs(max - min);
    }
    return diff;
  }
  
  function randArr (arr) {
    arr = [];
    for (let i = 0; i <= 3; i++) {
        arr.push(Math.round(Math.random() * 201) - 100);
    }
    return arr;
  }
  
  let array = [];
  
  let arrOfArr = []
  for (let i = 0; i <= 3; i++) {
        arrOfArr[i] = randArr(array);
  }
  
  console.log (arrOfArr);
  
  function makeWork(arrOfArr, func) {
    let finalMax = -1000;
    for (let i = 0; i <= 3; i++) {
      if (finalMax < func(arrOfArr[i])) {
        finalMax = func(arrOfArr[i]);
      }
      return finalMax;
    }
  }
  
  let result = makeWork(arrOfArr,worker);
  console.log ('Наибольшая сумма: ' + result);
  
  let result2 = makeWork(arrOfArr,worker2);
  console.log ('Наибольшая разность наибольшего и наименьшего: ' + result2);