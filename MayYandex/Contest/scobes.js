const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
});
let num;
rl.on('line', line => {
    num = Number(line);
    rl.close();
}).on('close', () => {
    Res(num, 0, 0, '');
    //process.stdout.write(res.sort().join('\n'));
});

function Res(n, counterOpen, counterClose, ans) {
    if (counterOpen + counterClose === 2 * n) {
        process.stdout.write(ans + '\n');
        return;
    }
    if (counterOpen < n) {
        Res(n, counterOpen + 1, counterClose, ans + '(');
    }
    if (counterOpen > counterClose) {
        Res(n, counterOpen, counterClose + 1, ans + ')');
    }
}
