const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
});
let arr = [];
rl.on('line', line => {
    line = line.split(' ');
    for (let i = 0; i < line.length; i++) {
        arr.push(Number(line[i]));
    }
    rl.close();
}).on('close', () => {
    process.stdout.write(quickSort(arr).join(' '));
});

function quickSort(arr) {
    return qs(arr, 0, arr.length - 1);
}

function qs(items, left, right) {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            qs(items, left, index - 1);
        }
        if (index < right) {
            qs(items, index, right);
        }
    }
    return items;
}
function partition(items, left, right) {
    let pivot = items[Math.floor((right + left) / 2)],
        i = left,
        j = right;

    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            items = swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}
function swap(items, firstIndex, secondIndex) {
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
    return items;
}
