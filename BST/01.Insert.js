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

let bst = new BST(50);
// insert value into BST
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

console.log(bst.right.right);

/*Output 
{ 
    value: 100,
    left: { value: 85, left: null, right: null },
    right: { value: 105, left: null, right: null } 
} */

