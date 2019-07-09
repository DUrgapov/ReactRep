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
    process.stdout.write(selectSort(arr).join(' '));
});
function selectSort(arr) {
    let i = 0;
    while (i < arr.length) {
        let min = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        let elem = arr[i];
        arr[i] = arr[min];
        arr[min] = elem;
        i++;
    }
    return arr;
}
