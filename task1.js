let n = Number(prompt('Введите количество чисел в массиве: '));

function getArrayParams(arr) {
  let min = 101;
  let max = -101;
  let sum = 0;

  for (i = 0; i <= (n-1); i++) {
    sum += arr2[i];
    
    if (arr2[i] > max) {
      max = arr2[i];
    }
    
    if (arr2[i] < min) {
      min = arr2[i];
    }
  }
  let avg = sum/n;
  let result = [min, max, Number(avg.toFixed(2))];
  return result;
}

let arr2 = [];
for (let i = 0; i <= (n-1); i++) {
	arr2.push(Math.round(Math.random() * 201) - 100);
}

console.log(arr2);

let getArrayParamsRes = getArrayParams(arr2);
console.log (getArrayParamsRes);

