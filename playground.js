function solution(n, a) {
  const b = [];

  for (let i = 0; i <= n - 1; i++) {
    if (i == n - 1) {
      console.log("first: ", a[i - 1] + a[i] + 0);
      b[i] = a[i - 1] + a[i] + 0;
    } else if (!(a[i - 1] + a[i] + a[i + 1])) {
      console.log("second: ", i + a[i] + a[i + 1]);
      b[i] = i + a[i] + a[i + 1];
    } else {
      console.log("third: ", a[i - 1] + a[i] + a[i + 1]);
      b[i] = a[i - 1] + a[i] + a[i + 1];
    }
  }

  return b;
}

console.log(solution(5, [4, 0, 1, -2, 3]));
