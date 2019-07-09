function doublyList() {
    this.start = null;
}

doublyList.prototype.makeNode = function(last, elem) {
    return { prev: last, value: elem, next: null };
};

doublyList.prototype.add = function(elem) {
    if (!this.start) {
        this.start = this.makeNode(null, elem);
    } else {
        let node = this.start;
        while (true) {
            if (!node.next) {
                node.next = this.makeNode(node, elem);
                break;
            } else {
                node = node.next;
            }
        }
    }
};
let l = new doublyList(5);
l.add(1);
l.add(2);
l.add(3);
l.add(4);
l.add(5);
//l.add(6);
//l.add(6);
//console.log(l.start.next.next.next.next);
console.log(l.start.next.prev);
