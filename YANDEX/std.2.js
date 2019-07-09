const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
});
let arr = [];
let itCount = 0;
let num = 0;
let i = 0;
let res = [];
rl.on('line', line => {
    if (num <= 1000000) {
        if (itCount === 0) {
            num = line[0];
            itCount++;
        } else {
            arr[i] = Number(line[0]);
            i++;
        }
        if (i === Number(num)) {
            i = 0;
            itCount = 0;
            rl.close();
        }
    }
});
rl.on('close', e => {
    res.push(arr[0]);
    for (let j = 1; j < num; j++) {
        if (arr[j] !== arr[j - 1]) {
            res.push(arr[j]);
        }
    }
    process.stdout.write(res.join('\n'));
});
