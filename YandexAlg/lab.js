let size = 10;
function createMatrix(size) {
    let res = [];
    for (let i = 0; i < size; i++) {
        let row = [];
        for (let j = 0; j < size; j++) {
            row[j] = Number(Math.random().toFixed(0));
        }
        res[i] = row;
    }
    return res;
}

let matr = createMatrix(10);
console.log(matr);

function fiber(arr, x, y) {
    x = x - 1;
    y = y - 1;
    if (arr[y][x] == 1) {
        return false;
    }

    return true;
}


console.log(matr[2][1]);
console.log(fiber(matr, 2, 3));
