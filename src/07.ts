const solve07 = (arr1: number[], arr2: number[]) => {
    const arr = [...arr1, ...arr2];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};

console.log(solve07([13,-12,90,15], [9, 1, -22, 124, 8]));