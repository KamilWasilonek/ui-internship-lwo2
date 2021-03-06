function Node(value) {
  this.value = value;
  this.prev = null;
}

export function Stack() {
  this.last = null;
  this.size = 0;
  this.isEmpty = true;
}

Stack.prototype.push = function(data) {
  let node = new Node(data);
  if (this.last !== null) {
    node.prev = this.last;
  }
  this.last = node;
  this.size++;
  this.isEmpty = false;
};

Stack.prototype.pop = function() {
  if (this.last === null) {
    return undefined;
  }
  let result = this.last.value;
  this.last = this.last.prev;
  this.size--;
  if (this.size === 0) {
    this.isEmpty = true;
  }
  return result;
};
