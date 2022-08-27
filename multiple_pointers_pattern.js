// To find the elements in an array whose sum is zero
function sumZero(array) {
  if (array.length === 0) {
    return "Array is empty";
  }
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([3, 5, 2, 6, -5, -6, -3, -3]));
console.log("hello");

//Count unique values in an array

function unique(array) {
  let i = 0;
  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  }
  return `The array has ${i + 1} unique values`;
}
console.log(unique([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]));
