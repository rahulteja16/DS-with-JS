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

// Adding AddToTail Prototype to Linked List Constructor
LinkedList.prototype.AddToTail = function(value){
  // this.tail as prev pram becaues, we are adding new node to tail. So the current tail becomes prev, and next is null becaues there is no next node as its the tail node.
  let newNode = new Node(value,null, this.tail);
  
   /* adding node to linked list, two cases may occur, 
  1. If Linked list is Empty
  2. If Linked list is not Empty */
  if(this.tail){
    // case Linked list is not Empty
    this.tail.next = newNode;
  } else {
     // case Linked list is Empty
    this.head = newNode;
  }
  
  /* adding node to tail irrespective of condition
    for case linked list is not empty, the current tail pointer is set to old node, so need to set newnode as tail
    for case linked list is empty, no tail is initilized yet, so need to set newnode as tail
  */
  this.tail = newNode;
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

// Adding DeleteFromTail ProtoType to LinkedList Constructor
LinkedList.prototype.DeleteFromTail = function(){
  // Check if LinkedList is Empty, if empty return null
  if(!this.tail) return null;
  // If Not null, store the value in val variable.
  let val = this.tail.value;
  // Make current tail's prev as tail pointer.
  this.tail = this.tail.prev;
  // if new tail is not null, make tail's next as null
  if(this.tail) this.tail.next = null;
  // if new tail is null, make head also null
  else this.head = null;
  return val;
}

// Adding Search ProtoType to LinkedList Constructor
LinkedList.prototype.Search = function(Value){
  // assing currentNode to head of LinkedList
  let currentNode = this.head;
  // loop through LinkedList this currentNode is null.
  while(currentNode){
    // check if seach value === currentNode value, if true return value.
    if(currentNode.value === Value) return currentNode.value;
    currentNode = currentNode.next;
  }
  // if value not found, return null
  return null;
}

// Creating Instance of Linked List
let LL = new LinkedList();

// Adding New Values to Head Of Linked List
LL.AddToHead(100);
LL.AddToHead(200);
LL.AddToHead(300);
// Adding New Values to Tail Of Linked List
LL.AddToTail(400);
// Delete Value From Head
LL.DeleteFromHead();
// Delete Value fro Tail
LL.DeleteFromTail();
// Search Value For Linked List
console.log(LL.Search(100));

/* Output
100 
*/
