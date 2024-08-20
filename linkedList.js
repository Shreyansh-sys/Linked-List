import { Node } from './node.js';

export class LinkedList {
  constructor() {
    this.head = new Node(null);
  }
  append(data) {
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = new Node(data);
  }
  prepend(value) {
    let newNode = new Node(value);
    let temp = this.head.next;
    this.head.next = newNode;
    newNode.next = temp;
  }
  size() {
    let size = 0;
    let temp = this.head.next; // Start from the first real node
    while (temp !== null) {
      size++;
      temp = temp.next; // Move to the next node
    }
    return size;
  }
  getHead() {
    return this.head.next.data;
  }
  getTail() {
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    return temp.data;
  }
  atIndex(index) {
    let temp = this.head;
    while (index >= 0) {
      temp = temp.next;
      index--;
    }
    return temp.data;
  }
  pop() {
    let temp = this.head;
    while (temp.next.next !== null) {
      temp = temp.next;
    }
    let removedNode = temp.next.data;
    temp.next = null;
    return removedNode;
  }
  contains(value) {
    let temp = this.head.next;
    while (temp !== null) {
      if (temp.data === value) return true;
      temp = temp.next;
    }
    return false;
  }
  find(value) {
    let temp = this.head.next;
    let index = 0;
    while (temp !== null) {
      if (temp.data === value) return index;
      index++;
      temp = temp.next;
    }
  }
  toString() {
    let result = "";
    let temp = this.head.next;
    while (temp !== null) {
      result += `( ${temp.data} ) -> `;
      temp = temp.next;
    }
    result += "null";
    return result;
  }
  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      return "Index out of bounds";
    }
    let temp = this.head;
    while (index > 0) {
      temp = temp.next;
      index--;
    }
    let removedNode = temp.next;
    temp.next = temp.next.next;
    return removedNode.data;
  }
  insertAt(value, index) {
    let newNode = new Node(value);
    let temp = this.head;
    while(index > 0){
      temp = temp.next;
      index--;
    }
    let nextNode = temp.next;
    temp.next = newNode;
    newNode.next = nextNode;
  }
}
