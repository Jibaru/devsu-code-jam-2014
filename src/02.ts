const solve02 = (str: string) => {
  if (str == null) return null;
  if (str.length == 0) return str;

  let capitalized = str[str.length - 1].toUpperCase();
  let capitalize = false;
  for (let i = str.length - 2; i >= 0; i--) {
    if (capitalize) {
      capitalized += str[i].toUpperCase();
      capitalize = false;
    } else {
      capitalized += str[i].toLowerCase();
    }

    if (str[i] == " " && str[i - 1] != " ") {
      capitalize = true;
    }
  }
  return capitalized;
};

console.log(solve02("Hello my friend"));
console.log(solve02("hello"));
console.log(solve02("x"));
console.log(solve02("x y  z"));
console.log(solve02("abc a b  "));
console.log(solve02("join"));
console.log(solve02(""));
console.log(solve02("    "));
console.log(solve02(null));
