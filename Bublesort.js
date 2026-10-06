let numbers = [5, 3, 15, 8, 19, 4, 2, 1, 7, 11];
console.log(numbers);

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let check = false;
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        let number = array[j];
        array[j] = array[j + 1];
        array[j + 1] = number;
        check = true;
      }
    }
    if (!check) {
      break;
    }
  }
  return array;
}

console.log(bubbleSort(numbers));
