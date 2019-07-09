let d = Date.now();
let arr = [];
let length = 11;
for (let i = 0; i < length; i++) {
    let obj = { x: 0, y: 0 };
    obj.x = i - (length - 1) / 2;
    obj.y = 2 * Math.pow(obj.x, 2);
    //obj.y = obj.x;
    arr[i] = obj;
}
//console.log(arr);
//console.log(isVertAxe(arr));
function isVertAxe(arr) {
    let xAxe;
    let max = arr[0].x;
    let min = arr[0].x;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].x > max) {
            max = arr[i].x;
        }
        if (arr[i].x < min) {
            min = arr[i].x;
        }
    }
    xAxe = (max + min) / 2;
    // console.log(xAxe);
    let hash = {};
    for (let i = 0; i < arr.length; i++) {
        let key = String(arr[i].x - xAxe) + ' ' + String(arr[i].y);
        hash[key] = arr[i];
    }
    console.log(hash);
    for (key in hash) {
        //console.log(key, hash[key].x);
        if (hash[key].x - xAxe != 0) {
            //console.log(key, hash[key].x);
            let newKey = String(xAxe - hash[key].x) + ' ' + String(hash[key].y);
            //console.log(key);
            //console.log(newKey);
            if (!hash.hasOwnProperty(newKey)) {
                return false;
            }
        }
    }

    return true;
}
d = Date.now() - d;
console.log(d);

// 