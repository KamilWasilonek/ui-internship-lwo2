function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.amount = 0;
}

LinkedList.prototype.push = function(value) {
  let node = new Node(value);
  if (this.head === null) {
    this.head = node;
    this.tail = node;
    this.amount += 1;
  } else {
    this.tail = node;
    this.tail.next = node;
    this.amount += 1;
  }
};

LinkedList.prototype.pop() {
  if(this.head === null) {
    return undefined;
  } else {
    let result = this.head.value;
    this.head = this.head.next;
    this.amount -= 1;
    return result;
  }
}
