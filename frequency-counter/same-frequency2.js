function areThereDuplicates(...args) {
  // * frequency solution:
  const frequency1 = {};
  for (const arg of args) {
    if (!frequency1[arg]) {
      frequency1[arg] = 1;
    } else {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 12, 2, 3)); // false
console.log(areThereDuplicates(1, 23, 7, 3, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true

const n = [1, 2, 2, 6, 2, 2, 2, 5, 3, 2, 7, 5, 7, 5, 3, 4, 7, 8, 8, 9, 10];
const x = new Set(n);
const p = Array.from(x);
console.log(p.sort((a, b) => a - b));
