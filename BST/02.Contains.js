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
// Adding contains Prototype to Constructor
BST.prototype.contains = function(value){
  // Check if root node is the node we are searching, if yes, return true
  if(value === this.value) return true;
  else if(value <= this.value){
    // if there is no left node, then we dont have that value, return false
    if(!this.left) return false;
    // if there is left node, call contains method on left.
    else return this.left.contains(value);
  } 
  else if(value > this.value){
     // if there is no right node, then we dont have that value, return false
    if(!this.right) return false;
    // if there is right node, call contains method on left.
    else return this.right.contains(value);
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
// check if tree contails value
console.log(bst.contains(105));


/* Output

true 

*/


