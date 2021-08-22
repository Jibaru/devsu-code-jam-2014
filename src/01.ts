const solve01 = (str: string): string => {
  if (str == null) return null;
  if (str.trim() == "") return "";

  const chars = [];
  for (let i = 0; i < str.length; i++) {
    if (chars[chars.length - 1] && chars[chars.length - 1].char == str[i]) {
      chars[chars.length - 1].counter++;
    } else {
      chars.push({
        char: str[i],
        counter: 1,
      });
    }
  }
  return chars
    .map((c) => {
      if (c.counter == 1) return `${c.char}`;
      return `${c.char}${c.counter}`;
    })
    .join("");
};

console.log(solve01("aaaabbdxy"));
console.log(solve01("oppai"));
console.log(solve01("ansssuwwuxddsss"));
console.log(solve01("tttt"));
console.log(solve01("   "));
console.log(solve01(""));
console.log(solve01(null));
console.log(solve01("cfqq"));
console.log(solve01("r"));
