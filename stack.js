/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val);
    if(this.first){
      newNode.next = this.first;
    }else{
      this.last = newNode
    }
    this.first = newNode;
    this.size++
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(!this.first){
      throw 'Stack is empty! No values to return!'
    }
    let first = this.first;
    this.first = first.next;
    if(first === this.last){
      this.last = null;
    }
    this.size--;
    return first.val;
  }

  /** peek(): return the value of the first node in the stack. */

   peek() {
    if(!this.first){
      return null;
    }
    return this.first.val
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0
  }
}

// Browser Back/Forward Challenge

const forwardStack = new Stack();
const backStack = new Stack();
let currSite;

function goTo(site){
    backStack.push(site);
    console.log('Going to', site);
    currSite = site;
};

function goBack(){
    if(backStack.size > 1){
        let forward = backStack.pop();
        forwardStack.push(forward);
        currSite = backStack.peek();
        console.log('Going back to', currSite);
    }else{
        console.log('You are as far back as you can go')
    }
}

function goFoward(){
    if(!forwardStack.isEmpty()){
        let back = forwardStack.pop();
        backStack.push(back);
        currSite = back;
        console.log('Going forward to', currSite);
    }else{
        console.log('You are as far forward as you can go');
    }
}

// String Reversal Challenge

function reverseString(str){
  let stringStack = new Stack();
  for(let char of str){
      stringStack.push(char);
  };
  let reversed = '';
  for(let i = stringStack.size; i >= 0; i--){
      reversed = reversed + stringStack.pop()
  }
  return reversed;
}

module.exports = Stack;