class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
  
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
  
     peek() {
      if(!this.first){
        return null;
      }
      return this.first.val;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  }

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