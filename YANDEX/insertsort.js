var mass = [1, -2, 3, 2, 5, 11, 7, 0];
let start;
function insertSort(arr) {
    console.log('here 1');
    start = 1;
    for (let i = 1; i < arr.length; i++) {
        console.log('here 2');
        if (arr[i - 1] > arr[i]) {
            console.log('here 3');
            //arr[i] нужно переместить, после чего увеличить длину отсортированной части на 1
            //ищем место для arr[i] среди отсортированной части массива
            for (let j = 0; j < arr.length; j++) {
                console.log('here 4');
                if (arr[i] <= arr[j]) {
                    console.log('here 5-1');
                    //помещаем перед элементом j
                    arr = insert(arr, arr[i], j);
                } else {
                    console.log('here 5-2');
                    arr = insert(arr, arr[i], 1);
                    //помещаем на первое место
                }
                start++;
            }
        } else {
            console.log('here 4-2');
            start++;
        }
    }
    return arr;
}
function insert(arr, elem, index) {
    arr.length++;
    for (let i = arr.length; i > index; i--) {
        arr[i] = arr[i - 1];
    }
    arr[index] = elem;
    return arr;
}
console.log(mass);
console.log(insertSort(mass));
/*
function sort(arr) {
    let start = 1;
    let index;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            //arr[i] нужно переместить, после чего увеличить длину отсортированной части на 1
            index = getIndex(arr, i, start);

            start++;
        }
    }
}

function getIndex(arr, elem, start) {
    for (let j = 0; j < start; j++) {
        if (elem > arr[j]) {
            insert(arr, index);
        }
    }
}
*/
