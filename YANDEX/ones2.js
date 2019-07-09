const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
});
let arr = [];
let itCount = 0;
let num = 0;
let i = 0;
let res = [];
let count = 0;
rl.on('line', line => {
    if (num <= 1000000) {
        if (itCount === 0) {
            num = line;
            itCount++;
        } else {
            if (line == '1') {
                count++;
            } else {
                arr.push(count);
                count = 0;
            }
        }
        if (i === Number(num)) {
            i = 0;
            itCount = 0;
        }
    }
}).on('close', e => {
    arr.sort(function(a, b) {
        return a - b;
    });
    let res = arr[arr.length - 1];
    process.stdout.write(res.toString());
});
