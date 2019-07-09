let stack = [];
function polCalc(char) {
    console.log(stack);
    switch (char) {
        case '+':
            if (stack.length > 1) {
                stack.push(Number(stack.pop()) + Number(stack.pop()));
            }
        case '-':
            if (stack.length > 1) {
                stack.push(-Number(stack.pop()) + Number(stack.pop()));
            }
        case '*':
            if (stack.length > 1) {
                stack.push(Number(stack.pop()) * Number(stack.pop()));
            }
        case '/':
            if (stack.length > 1) {
                if (stack[stack.length - 1] != 0) {
                    stack.push((1 / Number(stack.pop())) * Number(stack.pop()));
                }
            }
        default:
            if (char !== 0 && Number(char) != 0 && char != '+' && char != '-' && char != '/' && char != '*') {
                stack.push(char);
            }
    }
    console.log(stack);
    return stack[stack.length - 1];
}
polCalc(2);
polCalc(3);
console.log(polCalc('+'));
