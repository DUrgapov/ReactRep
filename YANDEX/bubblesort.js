//вспомогательный метод swap
function swap(items, left, right) {
    if (left != right) {
        let temp = items[left];
        items[left] = items[right];
        items[right] = temp;
    }
}
let swapped;
function bubble(items) {
    do {
        swapped = false;
        for (let i = 1; i < items.length; i++) {
            if (items[i] < items[i - 1]) {
                swap(items, i - 1, i);
                swapped = true;
            }
        }
    } while (swapped != false);
    return items;
}
console.log(bubble([1, 3, 2, 7, 5, 1, 9, 8]));
