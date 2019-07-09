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
t.add(50);
t.add(20);
t.add(30);
t.add(40);
t.add(80);
t.add(70);
t.add(90);
t.add(10);
t.add(60);
console.log(t);

// обход в ширину
binaryTree.prototype.bfs = function(processing) {
    let node = this.root;
    node.checked = false;
    let queue = [];
    do {
        if (!node.checked) {
            //node.value = node.value * node.value; // обработка вершины
            node.value = processing(node.value);
            node.checked = true;
        }
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
        node = queue.shift();
    } while (queue.length != 0);
    node = this.root;
    do {
        delete node.checked;
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
        node = queue.shift();
    } while (queue.length != 0);
};

binaryTree.prototype.dfs = function(processing) {
    let node = this.root;
    node.checked = false;
    let stack = [];
    do {
        if (!node.checked) {
            //node.value = node.value * node.value; // обработка вершины
            node.value = processing(node.value);
            node.checked = true;
        }
        if (node.left) {
            stack.push(node.left);
        }
        if (node.right) {
            stack.push(node.right);
        }
        node = stack.pop();
    } while (stack.length != 0);
    do {
        delete node.checked;
        if (node.left) {
            stack.push(node.left);
        }
        if (node.right) {
            stack.push(node.right);
        }
        node = stack.pop();
    } while (stack.length != 0);
};

function square(elem) {
    return elem * elem;
}

t.dfs(square);
console.log(t);
