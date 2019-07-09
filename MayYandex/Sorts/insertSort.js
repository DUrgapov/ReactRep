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
    process.stdout.write(insertSort(arr).join(' '));
});

function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            arr = insert(arr, i);
        }
    }
    return arr;
}

function insert(arr, index) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[index] < arr[i]) {
            //вставляем arr[index] на место arr[i]
            let elem = arr[index];
            for (let j = index; j > i; j--) {
                arr[j] = arr[j - 1];
            }
            arr[i] = elem;
            return arr;
        }
    }
}
