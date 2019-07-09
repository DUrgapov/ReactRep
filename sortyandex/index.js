let arr = [5, 2, 4, 8, 8, 8];
function foo(mass) {
    let num = mass[0];
    let newMass = mass.slice(1);
    function sIncrease(i, ii) {
        // По возрастанию
        if (i > ii) return 1;
        else if (i < ii) return -1;
        else return 0;
    }
    newMass.sort(sIncrease);
    let result = [];
    result.push(newMass[0]);
    for (let i = 1; i < num; i++) {
        if (newMass[i] != newMass[i - 1]) {
            result.push(newMass[i]);
        }
    }
    return result;
}
console.log(foo(arr));
