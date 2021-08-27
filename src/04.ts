const solve04 = (str: string): string => {
  if (str == null || str == undefined) return str;

  const isEven = (n: number): boolean => !(n & 1);
  const isAlphanumeric = (s: string): boolean => /^[a-z0-9]+$/i.test(s);
  const isNumeric = (s: string): boolean => /^[0-9]+$/i.test(s);

  let encrypted: string = "";
  for (let i = 0; i < str.length; i++) {
    if (!isAlphanumeric(str[i]) || isNumeric(str[i])) {
      encrypted += str[i];
      continue;
    }

    if (str[i] == "Z") {
      encrypted += "A";
      continue;
    }

    if (str[i] == "A") {
      encrypted += "Z";
      continue;
    }

    if (isEven(i)) {
      if (str[i] == "z") {
        encrypted += "a";
        continue;
      }
      encrypted += String.fromCharCode(str.charCodeAt(i) + 1);
    } else {
      if (str[i] == "a") {
        encrypted += "z";
        continue;
      }
      encrypted += String.fromCharCode(str.charCodeAt(i) - 1);
    }
  }
  return encrypted;
};

console.log(
  solve04("The quick brown fox jumps over the lazy dog 12345 :) * zzzZZZAAAaaa")
);
console.log(solve04("1234"));
console.log(solve04("abc aaa zzz Z A"));
console.log(solve04("  "));
console.log(solve04(""));
console.log(solve04(null));
