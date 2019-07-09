const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
});
let data = [];
rl.on('line', line => {
    data.push(line);
    if (data.length > data[0]) {
        rl.close();
    }
}).on('close', () => {
    let dataSize = data.shift();
    console.log(data);
    // data - массив строк - первая строка состоит из одного числа, далее - строка из чисел - строку надо разбить
    data = data.map(item => {
        return item.split(' ');
    });
    console.log(data);
    let res = data[0];
    for (let i = 1; i < dataSize; i++) {
        let newData = data[i].filter(item => {
            return !res.includes(item);
        });
        if (newData != ' ' || newData != '') {
            res.push(...newData);
        }
    }
    console.log(res);
    res = res.filter(item => {
        return item != '';
    });
    res.sort(sIncrease);
    process.stdout.write(res.join(' '));
});

function sIncrease(i, ii) {
    return i - ii;
}
