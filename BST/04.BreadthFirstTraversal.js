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


// Adding BreadthFirstTraversal to Constructor 
BST.prototype.BreadthFirstTraversal = function(IterationFunc) {
  // Initilize Queue with root node.
  let queue = [this];
  while(queue.length){
    // Get the first node from Queue.
    let treeNode = queue.shift();
    // Run Iteration Function
    IterationFunc(treeNode);
    // Check for left and Right child nodes, and push into queue array.
    if(treeNode.left) queue.push(treeNode.left);
    if(treeNode.right) queue.push(treeNode.right)
  }
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

// print BreadthFirstTraversal
bst.BreadthFirstTraversal(logBreadthFirst);

function logBreadthFirst (node) {
   console.log(node.value);  
}

/* Output

50
30
70
20
45
60
100
10
35
59
85
105

*/