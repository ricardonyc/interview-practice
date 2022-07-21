function sameFrequency(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") return false;

  const number1 = num1.toString();
  const number2 = num2.toString();

  if (number1.length !== number2.length) return false;

  const frequency1 = {};

  for (const num of number1) {
    frequency1[num] = (frequency1[num] || 0) + 1;
  }

  for (const num of number2) {
    if (!frequency1[num]) {
      return false;
    } else {
      frequency1[num] -= 1;
    }
  }

  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
console.log(sameFrequency("182", 281));
