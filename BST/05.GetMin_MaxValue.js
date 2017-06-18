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


// Adding GetMinValue to Constructor 
BST.prototype.GetMinValue = function(){
  if(this.left) return this.left.GetMinValue();
  else return this.value;
}

// Adding GetMaxValue to Constructor 
BST.prototype.GetMaxValue = function(){
  if(this.right) return this.right.GetMaxValue();
  else return this.value;
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


// get Min And Max Values
console.log(bst.GetMinValue());
console.log(bst.GetMaxValue());

/* Output

10
105

*/




