// BST Constructor
function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// Adding insert Prototype to Constructor
BST.prototype.insert = function(value){
  // check if paramter value is less than / greater than root node.
  if(value <= this.value){
    // If left of root is empty, insert node
    if(!this.left) this.left = new BST(value);
    // If left of root node is not empyt, call insert() using recurssion.
    else this.left.insert(value);
  } 
  else if(value > this.value){
    // If right of root is empty, insert node
    if(!this.right) this.right = new BST(value);
    // If right of root node is not empyt, call insert() using recurssion.
    else this.right.insert(value);
  }
}

// Adding DepthFirstTraversal to Constructor 
BST.prototype.DepthFirstTraversal = function(IterationFunc, order){
  // check if order is per-order, if yes print Root,Left,Right
  if(order === 'pre-order')IterationFunc(this.value);
  // to print left nodes.
  if(this.left) this.left.DepthFirstTraversal(IterationFunc, order)
   // check if order is in-order, if yes print Letf,Root,Right
  if(order === 'in-order')IterationFunc(this.value);
  // to print right nodes.
  if(this.right) this.right.DepthFirstTraversal(IterationFunc, order)
   // check if order is post-order, if yes print Letf,Right,Root
  if(order === 'post-order')IterationFunc(this.value);
}

let bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(45);
bst.insert(20);
bst.insert(10);
bst.insert(35);
bst.insert(59);
bst.insert(85);
bst.insert(105);

// print DepthFirstTraversal.
bst.DepthFirstTraversal(log, 'pre-order');

function log (value) {
   console.log(value);  
}


/* Output 

50
30
20
10
45
35
70
60
59
100
85
105 

*/


