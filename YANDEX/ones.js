'use strict';
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
});
let arr = [];
let count = 0;
let k = 0;
let i = 0;
let startFlag = true;
let num;
rl.on('line', lines => {
    if (startFlag) {
        if (Number(lines) <= 10000) {
            num = Number(lines);
            startFlag = false;
        }
    } else {
        if (lines == '1') {
            count++;
            k++;
        } else if (lines == '0') {
            arr[i] = count;
            count = 0;
            i++;
            k++;
        }
    }
    if (k == num) {
        startFlag = true;
        k = 0;
        rl.close();
    }
}).on('close', () => {
    arr.sort(function(a, b) {
        return a - b;
    });
    //console.log(arr[arr.length - 1]);
    process.stdout.write(arr[arr.length - 1].toString());
});
