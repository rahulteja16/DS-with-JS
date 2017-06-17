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



// Adding GetIndexValue ProtoType to LinkedList Constructor
LinkedList.prototype.GetIndexValue = function(Value){
  // assing currentNode to head of LinkedList
  let currentNode = this.head;
  // seting couter to 0, and initilizing empty array.
  let counter = 0;
  let nodeArr = [];
  while(currentNode){
    // check if currentNode value === input value, if true push into array.
    if(currentNode.value === Value){
      nodeArr.push(counter);
    }
    currentNode = currentNode.next;
    counter++;
  }
  // return array.
  return nodeArr;
}

// Creating Instance of Linked List
let LL = new LinkedList();

// Adding New Values to Head Of Linked List
LL.AddToHead(100);
LL.AddToHead(200);
LL.AddToHead(300);
// Adding New Values to Tail Of Linked List
LL.AddToTail(400);
LL.AddToTail(200);

console.log(LL.GetIndexValue(200));

/* Output
[1,4] 
*/