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

// Adding AddToHead ProtoType to LinkedList Constructor
LinkedList.prototype.AddToHead = function(value){
  
  // this.head as next pram becaues, we are adding new node to head. So the current head becomes next, and prev is null becaues there is no previous node as its the first node.
  let newNode = new Node(value, this.head, null);
  
  /* adding node to linked list, two cases may occur, 
  1. If Linked list is Empty
  2. If Linked list is not Empty */
  if(this.head){
    // case Linked list is not Empty
    this.head.prev = newNode;
  } else {
    // case Linked list is Empty
    this.tail = newNode;
  }
  
  /* adding node to head irrespective of condition
    for case linked list is not empty, the current head pointer is set to old node, so need to set newnode as head
    for case linked list is empty, no head is initilized yet, so need to set newnode as head
  */
  this.head = newNode;
}


// Adding DeleteFromHead ProtoType to LinkedList Constructor
LinkedList.prototype.DeleteFromHead = function(){
  // Check if LinkedList is Empty, if empty return null
 if(!this.head) return null;
  // If Not null, store the value in val variable.
  let val = this.head.value;
  // Make current head's next as head pointer.
  this.head = this.head.next
  // if new head is not null, make head's prev as null
  if(this.head) this.head.prev = null; 
  // if new head is null, make tail also null
  else this.tail = null;
  return val;
}

// Creating Instance of Linked List
let LL = new LinkedList();

// Adding New Values to Head Of Linked List
LL.AddToHead(100);
LL.AddToHead(200);
LL.AddToHead(300);
// Delete Value from Head Of Linked List
LL.DeleteFromHead();

console.log(LL);

/* Output
{   head: 
    { 
        value: 200,
        next: { value: 100, next: [Object], prev: [Circular] },
        prev: null 
    },
    tail: 
    { 
        value: 400,
        next: null,
        prev: { value: 100, next: [Circular], prev: [Object] } 
    } 
} */