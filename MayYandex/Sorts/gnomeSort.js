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
    process.stdout.write(gnomeSort(arr).join(' '));
});

function gnomeSort(arr) {
    let i = 0;
    while (i < arr.length) {
        if (i == 0 || arr[i] >= arr[i - 1]) {
            i++;
        } else {
            swap(i - 1, i, arr);
            i--;
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
