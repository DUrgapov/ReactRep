'use strict';
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
});
let lines = [];
let i = 0;
rl.on('line', line => {
    lines.push(line);
    if (lines.length === 2) {
        rl.close();
    }
}).on('close', () => {
    let res = check(lines[2 * i], lines[2 * i + 1]);
    i++;
    process.stdout.write(res.toString());
});

function check(string1, string2) {
    if (string1.length != string2.length) {
        return 0;
    }
    let str1 = [];
    let str2 = [];
    for (let k = 0; k < string1.length; k++) {
        str1[k] = string1[k];
        str2[k] = string2[k];
    }
    str1.forEach((item, index) => {
        let newIndex = str2.indexOf(item);
        if (newIndex >= 0) {
            str1[index] = 0;
            str2[newIndex] = 0;
        }
    });
    if (
        str1.every(item => {
            return item === 0;
        })
    ) {
        return 1;
    }
    return 0;
}
