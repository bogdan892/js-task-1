let numbers = [5, 3, 15, 8, 19, 4, 2, 1, 7, 11];
console.log(numbers);

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    let number = array[i];
    array[i] = array[minIndex];
    array[minIndex] = number;
  }
  return array;
}

console.log(selectionSort(numbers));
