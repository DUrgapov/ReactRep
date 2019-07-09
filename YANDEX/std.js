const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
});
let arr = [];
let itCount = 0;
let num = 0;
let i = 0;
rl.on('line', line => {
    if (itCount === 0) {
        num = Number(line);
        itCount++;
    } else {
        arr[i] = Number(line[0]);
        i++;
    }
    if (i === Number(num)) {
        rl.close();
    }
}).on('close', e => {
    /*res.push(arr[0]);
    
    for (let j = 1; j < num; j++) {
        if (arr[j] !== arr[j - 1]) {
            res.push(arr[j]);
        }
    }
    console.log('\n');
    process.stdout.write(res.join('\n'));
    console.log('\n' + res.join('\n'));
    */
    arr = arr.filter((item, index, mass) => {
        return mass.indexOf(item) === index;
    });
    //process.stdout.write(arr.join('\n'));
    arr.forEach(item => {
        process.stdout.write(String(item) + '\n');
    });
    //console.log(typeof arr.join('\n'));
});
