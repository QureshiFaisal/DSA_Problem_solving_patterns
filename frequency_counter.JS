// To verify if for each element in one array it's square is present in another array
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
console.log(same([1, 2, 3, 4, 3], [1, 4, 9, 16, 9]));

//Anagaram
function anagram(string1, string2) {
  if ((string1 === string2) === null) {
    return true;
  }
  let array1 = Array.from(string1);
  let array2 = Array.from(string2);
  let frequencyCounterA = {};
  let frequencyCounterB = {};
  for (let val of array1) {
    frequencyCounterA[val] = (frequencyCounterA[val] || 0) + 1;
  }
  for (let val of array2) {
    frequencyCounterB[val] = (frequencyCounterB[val] || 0) + 1;
  }
  for (key in frequencyCounterA) {
    if (!(key in frequencyCounterB)) {
      return false;
    }
    if (frequencyCounterA[key] !== frequencyCounterB[key]) {
      return false;
    }
    return "Strings are anagrams!";
  }
}
console.log(anagram("abcd", "dcba"));
