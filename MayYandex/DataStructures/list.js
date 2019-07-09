function List() {
    this.start = null;
}

List.prototype.makeNode = function(elem) {
    return { value: elem, next: null };
};

List.prototype.add = function(elem) {
    if (!this.start) {
        this.start = this.makeNode(elem);
    } else {
        let node = this.start;
        while (true) {
            if (!node.next) {
                node.next = this.makeNode(elem);
                break;
            } else {
                node = node.next;
            }
        }
    }
};

let l = new List(5);
l.add(1);
l.add(2);
l.add(3);
l.add(4);
l.add(5);
//l.add(6);
//l.add(6);
//console.log(l.start.next.next.next.next);
console.log(l);
