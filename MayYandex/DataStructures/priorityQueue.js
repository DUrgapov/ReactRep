function PriorityQueue() {
    this.data = [];
}

PriorityQueue.prototype.enqueue = function(elem, priority) {
    let newObj = { e: elem, p: priority };
    let inserted = false;
    if (this.data.length == 0) {
        this.data.push(newObj);
    } else {
        // с более высоким приоритетом должны стоять в начале очереди (в конце массива)
        for (let i = this.data.length - 1; i >= 0; i--) {
            if (this.data[i].p < newObj.p) {
                this.insert(newObj, i);
                inserted = true;
                break;
            }
        }
        if (!inserted) {
            this.data.unshift(newObj);
        }
    }
};

PriorityQueue.prototype.insert = function(obj, index) {
    this.data.length++;
    for (let i = this.data.length - 1; i > index + 1; i--) {
        this.data[i] = this.data[i - 1];
    }
    this.data[index + 1] = obj;
};

PriorityQueue.prototype.dequeue = function() {
    return this.data.shift();
};

let pq = new PriorityQueue();
pq.enqueue(2, 7);
pq.enqueue(1, 4);
pq.enqueue(10, 3);
pq.enqueue(8, 4);
pq.enqueue(5, 2);
console.log(pq);
