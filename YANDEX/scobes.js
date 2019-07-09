const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
});
let num;
let count = 0;
let res = '';
rl.on('line', line => {
    num = Number(line);
    rl.close();
}).on('close', () => {
    Res(num, 0, 0, '');
    process.stdout.write(res);
});
function Res(n, counter_open, counter_close, ans) {
    if (counter_open + counter_close == 2 * n) {
        res = res + ans.toString();
        count++;
        if (count !== num) {
            res = res + '\n';
        }
        //console.log(ans.toString());
        return;
    }
    if (counter_open < n) {
        Res(n, counter_open + 1, counter_close, ans + '(');
    }
    if (counter_open > counter_close) {
        Res(n, counter_open, counter_close + 1, ans + ')');
    }
}
