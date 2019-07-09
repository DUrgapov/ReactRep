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
    console.log(vector);
    let currLength = 0;
    let maxLength = 0;
    for (let i = 0; i < vectorSize; i++) {
        if (vector[i] == 1) {
            currLength++;
        } else {
            currLength = 0;
        }
        if (currLength > maxLength) {
            maxLength = currLength;
        }
    }
    process.stdout.write(maxLength.toString());
});
