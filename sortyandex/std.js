const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin, // возвращаем открытый для чтения стрим
});
let i = 0;
let arr = [];
arr[0] = 0;
rl.on('line', line => {
    arr[i] = line[0];
    i++;
    if (i === arr[0]) {
        arr.filter;
        i = 0;
    }
});
