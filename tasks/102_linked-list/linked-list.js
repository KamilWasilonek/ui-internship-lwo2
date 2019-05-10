function Node(value) {
  this.value = value;
  this.next = null;
  this.prev = null;
}

export function LinkedList() {
  this.head = null;
  this.tail = null;
  this.amount = 0;
}

LinkedList.prototype.push = function(value) {
  let node = new Node(value);
  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    node.prev = current;
    this.tail = node;
  }
  this.amount += 1;
};

LinkedList.prototype.pop = function() {
  const lastElement = this.tail;
  if (this.amount > 0) {
    if (this.amount === 1) {
      this.head = null;
      this.tail = null;
      this.amount--;
      return lastElement;
    }

    this.tail = lastElement.prev;
    this.amount--;
    return lastElement;
  }
};

LinkedList.prototype.iterate = function(callback) {
  let current = this.head;
  while (current !== null) {
    callback(current);
    current = current.next;
  }
};

LinkedList.prototype.insertAfter = function(value, valueToInsert) {
  let current = this.head;
  let node = new Node(valueToInsert);
  while (current !== null) {
    if (current.value === value) {
      current.next.prev = node;
      node.next = current.next;
      current.next = node;
      node.prev = current;
      this.amount++;
      return true;
    }
    current = current.next;
  }
  return false;
};

LinkedList.prototype.removeItem = function(value) {
  let current = this.head;
  while (current) {
    if (current.value === value) {
      if (current == this.head && current == this.tail) {
        this.head = null;
        this.tail = null;
      } else if (current == this.head) {
        this.head = this.head.next;
        this.head.prev = null;
      } else if (current == this.tail) {
        this.tail = this.tail.prev;
        this.tail.next = null;
      } else {
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
      return true;
    }
    current = current.next;
  }
};
