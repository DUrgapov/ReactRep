function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            arr = insert(arr, i);
        }
    }
    return arr;
}
function insert(arr, index) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[index]) {
            // вставляем элемент arr[index] на позицию i
            let elem = arr[index];
            for (let j = index; j > i; j--) {
                arr[j] = arr[j - 1];
            }
            arr[i] = elem;
            return arr;
        }
    }
}
console.log(insertSort([-4, 2, 3, 1, -8, 0, 11, -13]));
