let vect = [0, 1, 0, 2, 3, 1, 2, 0, 0, 0, 2, 0, 1, 3, 0];
function deleteZeros(arr) {
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            arr[j] = arr[i];
            j++;
        }
    }
    arr.length = j;
    return arr;
}
console.log(deleteZeros(vect));
