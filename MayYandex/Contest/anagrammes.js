const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
});
let lines = [];
rl.on('line', line => {
    lines.push(line);
    if (lines.length == 2) {
        rl.close();
    }
}).on('close', () => {
    let [str1, str2] = lines;
    if (
        str1
            .split('')
            .sort()
            .join('') ==
        str2
            .split('')
            .sort()
            .join('')
    ) {
        process.stdout.write('1');
    } else {
        process.stdout.write('0');
    }
});
