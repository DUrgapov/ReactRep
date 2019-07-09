let time = performance.now();
let arr = [];
let length = 11;
for (let i = 0; i < length; i++) {
    let obj = { x: 0, y: 0 };
    obj.x = -5 + i;
    obj.y = 2 * Math.pow(obj.x, 2);
    //obj.y = obj.x;
    arr[i] = obj;
}
console.log(arr);
console.log(isVertAxe(arr));
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
        let key = 2.5 * Math.pow(arr[i].x - xAxe, 3) + Math.pow(arr[i].y, 3);
        hash[key] = arr[i];
    }
    console.log(hash);
    for (key in hash) {
        //console.log(key, hash[key].x);
        if (hash[key].x - xAxe != 0) {
            //console.log(key, hash[key].x);
            let newKey = 2 * Math.pow(hash[key].y, 3) - Number(key);
            //console.log(key);
            //console.log(newKey);
            if (!hash.hasOwnProperty(newKey) || hash[key].y != hash[newKey].y) {
                return false;
            }
        }
    }
    return true;
}
time = performance.now() - time;
console.log('Время: ' + time);

// симметричные относительно вертикальной оси точки должны быть равноудалены по х от оси симметрии +
// точки, лежащие на оси
// необходим учёт точек
// ключ - расстояние от точки до оси симметрии
// если ключ = абсциссе оси симметрии, всё хорошо
// если не равен, присваиваем ключу значение с проверкой
// если такой ключ уже существует, сверяем соответствующее старому и новому ключу значение (у),
// они должны быть одинаковые
// можно упустить точки с непарным ключом, то есть точку, не имеющую симметричной и равноудалённой пары
// решение - всякий раз, когда попадаются точки с одинаковым ключом - инкрементировать флаг - outAxe
// всякий раз, когда попадаются точки, лежащие на оси симметрии, инкрементировать другой флаг inAxe
// если вне оси симметрии лежит нечётное количество точек - фигура априори несимметрична
// для чётного: если outAxe = (arr.length-inAxe)/2, arr.length - inAxe - количество точек вне оси,
// верность равенства означает, что все точки вне оси имеют пару (поскольку мы не инкрементировали флаг,
// когда добавляли первую точку - только вторую, парную ей
// НО!!! Одна и та же точка может повторяться несколько раз - перед всеми проверками необходима процедура
// отсеяния одинаковых точек
