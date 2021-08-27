const solve05 = (n: number) => {
  if (n <= 0) return -1;

  // 1 \2, 5, 10, 17, 26
  // +1 \+3 +5  +7  +9
  //   +2 \+2  +2  +2
  let r = 2;
  let m0 = 1;
  let t0 = 1;
  let a = r / 2;
  let b = m0 - a;
  return a * n * n + b * n + t0;
};

console.log(solve05(1));
console.log(solve05(2));
console.log(solve05(3));
console.log(solve05(4));
console.log(solve05(5));
console.log(solve05(6));
console.log(solve05(0));
console.log(solve05(-12));
