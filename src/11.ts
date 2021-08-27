const solve11 = (n: number) => {
  const ROWS = 5;
  const COLS = 7;
  const ASTER_DIGITS = {
    "0": [
      [0, 1, 2],
      [0, 2],
      [0, 2],
      [0, 2],
      [0, 1, 2],
    ],
    "1": [[2], [2], [2], [2], [2]],
    "2": [[0, 1, 2], [2], [0, 1, 2], [0], [0, 1, 2]],
    "3": [[0, 1, 2], [2], [0, 1, 2], [2], [0, 1, 2]],
    "4": [[0, 2], [0, 2], [0, 1, 2], [2], [2]],
    "5": [[0, 1, 2], [0], [0, 1, 2], [2], [0, 1, 2]],
    "6": [[0, 1, 2], [0], [0, 1, 2], [0, 2], [0, 1, 2]],
    "7": [[0, 1, 2], [2], [2], [2], [2]],
    "8": [
      [0, 1, 2],
      [0, 2],
      [0, 1, 2],
      [0, 2],
      [0, 1, 2],
    ],
    "9": [[0, 1, 2], [0, 2], [0, 1, 2], [2], [0, 1, 2]],
    E: [[0, 1, 2], [0], [0, 1, 2], [0], [0, 1, 2]],
    R: [
      [0, 1, 2],
      [0, 2],
      [0, 1, 2],
      [0, 1],
      [0, 2],
    ],
  };
  const digits = (n: number): string[] => {
    if (n < 0 || n > 99) return ["E", "R"];
    if (n >= 10) return `${n}`.split("");
    return ["0", n.toString()];
  };

  const [d1, d2] = digits(n);
  const matrix: string[][] = Array(ROWS)
    .fill(null)
    .map(() => Array(COLS).fill(" "));

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (
        ASTER_DIGITS[d1][i].includes(j) ||
        ASTER_DIGITS[d2][i].includes(j - 4)
      ) {
        matrix[i][j] = "*";
      }
    }
  }

  return matrix;
};

console.log(solve11(12));
console.log(solve11(34));
console.log(solve11(56));
console.log(solve11(78));
console.log(solve11(90));
console.log(solve11(0));
console.log(solve11(9));
console.log(solve11(1));
console.log(solve11(-1));
console.log(solve11(100));
