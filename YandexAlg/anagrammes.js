let words = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
/*function letterToNum(letter) {
    let alph = {
        a: 10,
        b: 11,
        c: 12,
        d: 13,
        e: 14,
        f: 15,
        g: 16,
        h: 17,
        i: 18,
        j: 19,
        k: 20,
        l: 21,
        m: 22,
        n: 23,
        o: 24,
        p: 25,
        q: 26,
        r: 27,
        s: 28,
        t: 29,
        u: 30,
        v: 31,
        w: 32,
        x: 33,
        y: 34,
        z: 35,
    };
    return alph[letter];
}*/

function isLetter(str, letter) {
    if (str.indexOf(letter) > -1) {
        return '1';
    }
    return '0';
}

function sortAnagrammes(str) {
    let arr = [];
    str.forEach((item, index) => {
        arr[index] = '';
        arr[index] = arr[index] + isLetter(item, 'a');
        arr[index] = arr[index] + isLetter(item, 'b');
        arr[index] = arr[index] + isLetter(item, 'c');
        arr[index] = arr[index] + isLetter(item, 'd');
        arr[index] = arr[index] + isLetter(item, 'e');
        arr[index] = arr[index] + isLetter(item, 'f');
        arr[index] = arr[index] + isLetter(item, 'g');
        arr[index] = arr[index] + isLetter(item, 'h');
        arr[index] = arr[index] + isLetter(item, 'i');
        arr[index] = arr[index] + isLetter(item, 'j');
        arr[index] = arr[index] + isLetter(item, 'k');
        arr[index] = arr[index] + isLetter(item, 'l');
        arr[index] = arr[index] + isLetter(item, 'm');
        arr[index] = arr[index] + isLetter(item, 'n');
        arr[index] = arr[index] + isLetter(item, 'o');
        arr[index] = arr[index] + isLetter(item, 'p');
        arr[index] = arr[index] + isLetter(item, 'q');
        arr[index] = arr[index] + isLetter(item, 'r');
        arr[index] = arr[index] + isLetter(item, 's');
        arr[index] = arr[index] + isLetter(item, 't');
        arr[index] = arr[index] + isLetter(item, 'u');
        arr[index] = arr[index] + isLetter(item, 'v');
        arr[index] = arr[index] + isLetter(item, 'w');
        arr[index] = arr[index] + isLetter(item, 'x');
        arr[index] = arr[index] + isLetter(item, 'y');
        arr[index] = arr[index] + isLetter(item, 'z');
    });
    console.log(arr);
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, j);
            }
        }
    }
}
sortAnagrammes(words);
console.log(words);
//console.log(letterToNum('e'));
