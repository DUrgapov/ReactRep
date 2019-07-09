const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
});
let vector = [];
rl.on('line', line => {
    vector.push(Number(line));
    if (vector.length > vector[0]) {
        rl.close();
    }
}).on('close', () => {
    let vectorSize = vector.shift();
    let result = [];
    for (let i = 0; i < vectorSize; i++) {
        if (!result.includes(vector[i])) {
            result.push(vector[i]);
        }
    }
    result = result.join('\n');
    process.stdout.write(result.toString());
});
