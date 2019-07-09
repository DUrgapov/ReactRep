let d = Date.now();
let m = 4;
function coins(sum) {
    let nominals = [1, 2, 5, 10];
    //let nominals = [];
    //let j = 0;
    //for (let i = 1; i < 1000; i = i + 2) {
    //    nominals[j] = i;
    //    j++;
    //}
    let n = nominals.length;
    let number = 0;
    let i = n - 1;
    while (sum != 0) {
        if (sum >= nominals[i]) {
            number = number + Math.floor(sum / nominals[i]);
        }
        sum = sum % nominals[i];
        i--;
    }

    /* for (let i = n - 1; i > 0; i--) {
        if (sum > nominals[i]) {
            number = number + Math.floor(sum / nominals[i]);
        }
        sum = sum % nominals[i];
    }
    */
    //console.log(sum);
    return number;
}
//d = Date.now() - d;
//console.log(d);
console.log(coins(m));
