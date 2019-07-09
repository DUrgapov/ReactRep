function binaryTree() {
    this.root = null;
}
binaryTree.prototype.makeNode = function(value) {
    let node = {};
    node.value = value;
    node.left = null;
    node.right = null;
    return node;
};
binaryTree.prototype.add = function(value) {
    let currNode = this.makeNode(value);
    if (!this.root) {
        this.root = currNode;
    } else {
        this.insert(currNode);
    }
    return this;
};
binaryTree.prototype.insert = function(currNode) {
    let value = currNode.value;
    let traverse = function(node) {
        if (value === node.value) {
            return;
        } else if (value > node.value) {
            if (!node.right) {
                node.right = currNode;
                return;
            } else {
                traverse(node.right);
            }
        } else if (value < node.value) {
            if (!node.left) {
                node.left = currNode;
                return;
            } else {
                traverse(node.left);
            }
        }
    };
    traverse(this.root);
};

let t = new binaryTree();
t.add(75);
t.add(72);
t.add(81);
t.add(88);
t.add(73);
t.add(40);
t.add(76);
t.add(24);
t.add(45);
t.add(71);
t.add(80);
t.add(85);
t.add(89);
t.add(83);
t.add(86);
t.add(90);
let newNode = {
    value: 12,
    right: { value: 17, left: null, right: null },
    left: { value: 11, left: null, right: null },
};
//console.log(t);
/*
binaryTree.prototype.findNext = function(elem) {
    let direction;
    let value = elem.value;
    let node = elem;
    if (elem.right) {
        node = elem.right;
        while (node.left) {
            node = node.left;
        }
        return node;
    } else {
        node = this.root;
        while (1) {
            if (node.value > value) {
                direction = 'left';
                if (node.left && node.left > value) {
                    node = node.left;
                } else {
                    return node;
                }
            } else if (node.value < value) {
                direction = 'right';
                if (node.right) {
                    node = node.right;
                } else {
                    return null;
                }
            } else if (node.value === value) {
                if (direction === 'left') {
                    node = this.root.right;
                } else if (direction === 'right') {
                    node = this.root.left;
                }
            }
        }
    }
};
*/

binaryTree.prototype.find = function(currNode) {
    let value = currNode.value;
    node = this.root;
    if (node.value < value) {
        node = node.right;
        while (node.right <= value) {
            node = node.right;
        }
        while (node.left > value) {
            node = node.left;
        }
    }
};

let aNode = {};
aNode = t.root.right.left;
//console.log(aNode);
//console.log(t.findNext(t.root.left.right.right));
console.log(t.root.right);
