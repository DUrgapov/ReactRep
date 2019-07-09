function Stack() {
    this.data = [];
}
Stack.prototype.stPush = function(elem) {
    this.data.push(elem);
    return this.data.length;
};
Stack.prototype.stPop = function() {
    return this.data.pop();
};
Stack.prototype.stPip = function() {
    console.log(this.data);
};

let string = '({}{([])}[])';
function check(str) {
    str = str.split('');
    let s = new Stack();
    for (let i = 0; i < str.length; i++) {
        if (open(str[i])) {
            s.stPush(str[i]);
            //s.stPip();
        } else if (close(str[i])) {
            let deleteElem = s.stPop();
            //s.stPip();
            //console.log('delete ' + deleteElem);
            //console.log(s.data.length);
            if (close(str[i]) != open(deleteElem)) {
                return false;
            }
        }
    }
    function open(elem) {
        if (elem == ')' || elem == '}' || elem == ']') {
            return 0;
        } else if (elem == '(') {
            return 1;
        } else if (elem == '{') {
            return 2;
        } else if (elem == '[') {
            return 3;
        }
    }
    function close(elem) {
        if (elem == '(' || elem == '{' || elem == '[') {
            return 0;
        } else if (elem == ')') {
            return 1;
        } else if (elem == '}') {
            return 2;
        } else if (elem == ']') {
            return 3;
        }
    }
    if (s.data.length == 0) {
        return true;
    }
    return false;
}
console.log(check(string));
