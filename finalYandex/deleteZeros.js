function deleteZeros(arr) {
    let i = 0;
    let j = 0;
    while (i < arr.length) {
        if (arr[i] != 0) {
            i++;
            j++;
        } else {
            i++;
        }
        arr[j] = arr[i];
    }
    arr.length = j;
    return arr;
}

console.log(deleteZeros([1, 0, 3, 2, 0, 0, 0, 2]));

function zerosConsequence(arr) {
    let counter = 0;
    let maxCounter = 0;
    let i = 0;
    while (i < arr.length) {
        if (arr[i] == 0) {
            counter++;
        } else {
            if (counter > maxCounter) {
                maxCounter = counter;
            }
            counter = 0;
        }
        i++;
    }
    return maxCounter;
}
console.log(
    zerosConsequence([2, 3, 0, 0, 0, 0, 2, 1, 0, 0, 1, 0, 2, 0, 0, 0, 4, 3, 0, 0, 0, 0, 0, 0, 4, 5, 0, 0, 0, 0, 0]),
);
