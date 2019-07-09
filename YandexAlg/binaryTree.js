function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

BinaryTree.prototype.insert = function(val) {
    if (val < this.value && this.left) {
        this.left.insert(value);
    }
    if (val < this.value && !this.left) {
        this.left = new BinaryTree(val);
    }
    if (val > this.value && this.right) {
        this.right.insert(val);
    }
    if (val > this.value && !this.right) {
        this.right = new BinaryTree(val);
    }
};

BinaryTree.prototype.contains = function(target) {
    if (this.value === target) {
        return true;
    }
    return !!(this.left && this.left.contains(target)) || !!(this.right && this.right.contains(target));
};
