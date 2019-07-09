let arr = [5, 2, 4, 8, 8, 8];
let num = arr[0];
let ind = 0;
let resarr = [];
for (var i = 1; i < num + 1; i++) {
    ind = 0;
    for (var j = i; j < num + 1; j++) {
        if (arr[i] != arr[j]) {
            ind++;
        }
    }
    if (ind < 2) {
        resarr.push(arr[i]);
    }
}
console.log(resarr);
