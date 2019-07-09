const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
});
let i = 0;
let lines = [];
rl.on('line', line => {
    lines[i] = line[0];
    i++;
    if (line === 'exit') {
        rl.close();
    }
});
rl.on('close', e => {
    console.log(lines);
    process.stdout.write(lines.toString());
});
