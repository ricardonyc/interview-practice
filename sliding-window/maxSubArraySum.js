const maxSubArraySum = (arr, num) => {
  if (num > arr.length) return null;
  let sum = 0;

  for (let i = 0; i < arr.length - num + 1; i++) {
    let tempSum = 0;

    for (let j = 0; j < num; j++) {
      tempSum += arr[i + j];
    }

    if (tempSum > sum) {
      sum = tempSum;
    }
  }

  return sum;
};

console.log(maxSubArraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubArraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubArraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubArraySum([2, 3], 3)); // null
