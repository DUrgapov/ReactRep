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
    process.stdout.write(bubbleSort(arr).join(' '));
});

function bubbleSort(arr) {
    let isSorted = false;
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
