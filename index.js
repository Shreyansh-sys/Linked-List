import { LinkedList } from './linkedList.js';

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.prepend("owl");
list.append("snake");
list.append("turtle")

console.log(list.toString());
console.log(list.size());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.atIndex(2));
console.log(`Removed Node: ${list.pop()}`);
console.log(list.toString());
console.log(list.contains("cat"));
console.log(list.find("owl"));
// console.log(list.removeAt(2));
console.log(`Removed Node: ${list.removeAt(4)}`);
console.log(list.toString());
list.insertAt("rat", 2);
console.log(list.toString());

