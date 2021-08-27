const solve06 = (magicCube: number[][]) => {
    if (!magicCube) return false;
    if (magicCube.length <= 0) return false;
    if (magicCube.length != magicCube[0].length) return false;

    let sumsrows = {};
    let sumscols = {};
    let diag = 0;
    for (let i = 0; i < magicCube.length; i++) {
        for (let j = 0; j < magicCube[0].length; j++) {
            if (j - i == 0) diag += magicCube[i][j];
            if (!sumsrows[i]) sumsrows[i] = 0;
            if (!sumscols[j]) sumscols[j] = 0;

            sumsrows[i] += magicCube[i][j];
            sumscols[j] += magicCube[i][j];
        }
    }

    return (
      Object.keys(sumscols).filter((k) => sumscols[k] == diag).length == magicCube.length ||
      Object.keys(sumsrows).filter((k) => sumsrows[k] == diag).length == magicCube.length
    );
};

console.log(solve06([[2,7,6], [9,5,1], [4,3,8]]));
console.log(solve06([]));
console.log(solve06([[]]));
console.log(solve06([[1,2,3], [4,5,6]]));
console.log(solve06(null));
console.log(solve06(undefined));