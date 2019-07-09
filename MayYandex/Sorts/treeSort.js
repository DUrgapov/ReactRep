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
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
});
let arr = [];
rl.on('line', line => {
    line = line.split(' ');
    for (let i = 0; i < line.length; i++) {
        arr.push(Number(line[i]));
    }
    rl.close();
}).on('close', () => {
    process.stdout.write(treeSort(arr).join(' '));
});

function treeSort(arr) {
    let t = new binaryTree();
    arr.forEach(item => {
        t.add(item);
    });
    console.log(t);
    return arr;
}
