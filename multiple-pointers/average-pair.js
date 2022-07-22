const averagePair = (arr, average) => {
  if (arr.length < 2) return false;
  let left = 0;
  let right = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    let avg = (arr[left] + arr[right]) / 2;
    if (avg > average) {
      right--;
    } else if (avg < average) {
      left++;
    } else if (avg === average) {
      return true;
    }
  }

  return false;
};

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));
