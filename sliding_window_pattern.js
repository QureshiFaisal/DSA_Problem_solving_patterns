function maxSum(array, num) {
  if (array.length < num) {
    return null;
  }
  let tempSum = 0;
  let maxSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += array[i];
  }
  tempSum = maxSum;
  for (let i = num; i < array.length; i++) {
    tempSum = tempSum - array[i - num] + array[num];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}
console.log(maxSum([1, 3, 4, 6, 7, 8, 2, 9], 3));

function maxSubarraySum(array, num) {
  if (array.length < num) return null;
  let tempSum = 0;
  let maxSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += array[i];
  }

  tempSum = maxSum;

  for (let i = 1; i < array.length; i++) {
    tempSum = tempSum - array[i - 1] + array[i];

    maxSum = Math.max(maxSum, tempSum);
    num++;

    if (num >= array.length) break;
  }
  return maxSum;
}
console.log(maxSubarraySum([100, 200, 300, 400, 500], 2));

function minSubArrayLen(arr, n) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < arr.length) {
    if (end < arr.length && total < n) {
      total += arr[end];
      end++;
    } else if (total >= n) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start++;
    } else {
      break;
    }
    console.log(start, end, "total = ", total);
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
