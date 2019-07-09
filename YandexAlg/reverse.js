function strReverse(str) {
    /*let mask = [];
    for (let i = 0; i < str.length; i++) {
        if (str != ' ') {
            mask[i] = 1;
        } else {
            mask[i] = 0;
        }
    }*/
    str = str.split(' ');
    //console.log(str);
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].split('');
        let begin = 0;
        //console.log(str[i]);
        let end = str[i].length - 1;
        while (begin < end) {
            let helper;
            console.log('I am here');
            helper = str[i][begin];
            str[i][begin] = str[i][end];
            console.log(str[i][begin]);
            str[i][end] = helper;
            console.log(str[i][begin]);
            end--;
            begin++;
        }
        str[i] = str[i].join('');
    }
    str = str.join(' ');
    //console.log(str);
    return str;
}

let string = 'quick fox jumps';
console.log(strReverse(string));
