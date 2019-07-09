let words = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
function sortAnagrams(arr) {
    return arr.sort((s1, s2) => {
        return (
            s1
                .split('')
                .sort()
                .join('') ===
            s2
                .split('')
                .sort()

                .join('')
        );
    });
}
console.log(sortAnagrams(words));
function sortAnagrams2(arr) {
    // сгруппируем анаграммы в хеш-таблице
    const map = arr.reduce((acc, str) => {
        const key = str
            .split('')
            .sort()
            .join('');
        if (acc[key]) {
            acc[key].push(str);
        } else {
            acc[key] = [str];
        }
        return acc;
    }, {});

    // приводим хеш-таблицу обратно к массиву
    return Object.keys(map).reduce((acc, key) => {
        return acc.concat(map[key]);
    }, []);
}
console.log(sortAnagrams2(words));
let arr = [1, 2, 3, [4, 5]];
console.log(arr.flat());
