const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
});
let arr = [];
rl.on('line', line => {
    line = line.split(' ');
    for (let i = 0; i < line.length; i++) {
        arr.push(Number(line[i]));
    }
    rl.close();
}).on('close', () => {
    process.stdout.write(combSort(arr).join(' '));
});

function combSort(arr) {
    let isSorted = false;
    let k = 1.2473309;
    if (arr.length <= 1) {
        return;
    }
    let step = arr.length - 1;
    while (step > 1) {
        for (let i = 0; i + step < arr.length; i++) {
            if (arr[i] > arr[i + step]) {
                swap(i, i + step, arr);
            }
        }
        step = step / k;
    }
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                arr = swap(i, i + 1, arr);
                isSorted = false;
            }
        }
    }
    return arr;
}

function swap(left, right, arr) {
    let middle = arr[left];
    arr[left] = arr[right];
    arr[right] = middle;
    return arr;
}
