const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let num;
let i = 0;
let res = [];
rl.on('line', line => {
    num = Number(line);
    rl.close();
});
rl.on('close', () => {
    Res(num, 0, 0, '');
    process.stdout.write(res.sort().join('\n'));
});
function Res(n, counter_open, counter_close, ans) {
    if (counter_open + counter_close == 2 * n) {
        res[i] = ans;
        i++;
        return;
    }
    if (counter_open < n) {
        Res(n, counter_open + 1, counter_close, ans + '(');
    }
    if (counter_open > counter_close) {
        Res(n, counter_open, counter_close + 1, ans + ')');
    }
}
