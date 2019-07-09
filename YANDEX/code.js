function Res(n, counter_open, counter_close, ans) {
    if (counter_open + counter_close == 2 * n) {
        console.log(ans);
        return;
    }
    if (counter_open < n) {
        Res(n, counter_open + 1, counter_close, ans + '(');
    }
    if (counter_open > counter_close) {
        Res(n, counter_open, counter_close + 1, ans + ')');
    }
}
Res(3, 0, 0, '');
