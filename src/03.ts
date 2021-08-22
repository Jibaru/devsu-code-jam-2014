const solve03 = (str: string) => {
  if (str == null || str.trim().length == 0) return 0;
  const strNumbers = [];
  let update = false;
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i]))) {
      if (update) {
        strNumbers[strNumbers.length - 1] += str[i];
      } else {
        strNumbers.push(str[i]);
      }
      update = true;
    } else {
      update = false;
    }
  }

  return strNumbers.reduce((prev, curr) => parseInt(curr) + parseInt(prev), 0);
};

console.log(
  solve03("Genius is 1 percent inspiration, 99 percent perspiration")
);
console.log(solve03("When I was 18, I was in 1st year, and had 25 classmates"));
console.log(solve03(""));
console.log(solve03("  12  "));
console.log(solve03("12,13,14"));
console.log(solve03("01010203i01"));
console.log(solve03("asd"));
console.log(solve03(null));
