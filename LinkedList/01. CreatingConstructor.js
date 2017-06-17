// Linked List Constructor
function LinkedList(){
  this.head = null;
  this.tail = null;
}

// Node Constructor
function Node(value,next,prev){
  this.value = value;
  this.next = next;
  this.prev = prev;
}

// Instance of LinkedList and Node Constructor
let ll = new LinkedList();
let node1 = new Node(1, 'node2',null);

// Print Instances
console.log(ll);
console.log(node1);

/* Output
{ head: null, tail: null }
{ value: 1, next: 'node2', prev: null }
*/