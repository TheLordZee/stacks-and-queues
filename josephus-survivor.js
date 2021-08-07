
class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
      this.prev = null
    }
}
  
class LinkedList {
    constructor(vals = []) {
      this.head = null;
      this.tail = null;
      this.length = 0;
  
      for (let val of vals) this.push(val);
    }
  
    push(val) {
        let newNode = new Node(val);
        if(this.head === null) this.head = newNode;
        if (this.tail !== null){ 
            this.tail.next = newNode;
            this.head.prev = newNode;
        }
        newNode.prev = this.tail;
        this.tail = newNode;
        newNode.next = this.head;
        this.length++;
    }
    
    removeNodeByVal(val){
      let currNode = this.head;
      while(currNode.val !== val){
        currNode = currNode.next;
        if(currNode === this.head){
          throw 'Value not in List!'
        };
      }
      if(currNode === this.head){
        this.head = currNode.next;
      }
      if(currNode === this.tail){
        this.tail = currNode.prev;
      }
      currNode.next.prev = currNode.prev;
      currNode.prev.next = currNode.next;
      this.length--;
      return currNode;
    }
}
  
function findSurvivor(length, num){
    const numList = new LinkedList()
    for(let i = 1; i <= length; i++){
        numList.push(i)
    }
    let currNode = numList.tail;
    while(numList.length > 1){
      for(let i = 0; i < num; i++){
        currNode = currNode.next;
      }
      numList.removeNodeByVal(currNode.val);
    }
    return numList.head.val;
}