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

/* Write a function called averagePair. 
Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average
 of the pair equals the target average. There may be more than one pair that matches the average target.*/

function averagePair(array, avg) {
  if (array.length === 0) return "The array is empty";
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let sum = array[left] + array[right] / 2;
    if (sum === avg) {
      return true;
    } else if (sum < avg) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3, 4, 5, 9, 15, 16], 10));
function findLongestSubstring(str) {
    let longestSubStr = -Infinity;
    let subStrKeys = {};
 
    if(str.length === 0) return 0;
 
    let pos = 0;
    let subStrLen = 0;
    
    while(pos < str.length) {
        if(!(str[pos] in subStrKeys)) {
            subStrKeys[str[pos]] = pos;
            pos++;
            subStrLen++;
        } else{
            if( longestSubStr < subStrLen) longestSubStr = subStrLen ;

            newPos = subStrKeys[pos] + 1;
            subStrKeys = {};

            pos = newPos;
            subStrLen = 0;
        }
    }
 
    if(longestSubStr < subStrLen) longestSubStr = subStrLen;
 
    return longestSubStr;
}

console.log(findLongestSubstring('rithmschool'))
