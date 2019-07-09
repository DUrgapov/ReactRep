let stones = 'abbccdefab';
let jewels = 'abcde';

function check(stones, jewels) {
    let counter = 0;
    for (let i = 0; i < stones.length; i++) {
        if (jewels.split('').includes(stones[i])) {
            counter++;
        }
    }
    return counter;
}

console.log(check(stones, jewels));
