function DoublyList(first) {
    this.start = first ? this.makeNode(null, first, null) : { prev: null, value: null, next: null };
}

DoublyList.prototype.makeNode = function(prevObj, currValue, nextObj) {
    return { prev: prevObj, value: currValue, next: nextObj };
};

DoublyList.prototype.add = function(value) {
    if (!this.start.value) {
        this.start.value = value;
    } else {
        let currNode = this.start;
        while (currNode.next) {
            currNode = currNode.next;
        }
        currNode.next = this.makeNode(currNode, value, null);
    }
};
let dL = new DoublyList(2);
dL.add(3);
dL.add(1);
dL.add(-2);
console.log(dL);
