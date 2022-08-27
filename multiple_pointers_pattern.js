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
      console.log([array[left], array[right]]);
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([3, 5, 2, 6, -5, -6, -3, -3]));
console.log("hello");
