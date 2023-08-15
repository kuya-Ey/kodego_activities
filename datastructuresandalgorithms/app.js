// class node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// let n = new Node(1)

// class LinkedList{
//     constructor(){
//         this.header = null;
//         this.tail = null;
//         this.size = 0;
//     }
// }

// let linkedList = new LinkedList()

// prepending

// prepend(data){
//     const n = new Node(data);
//     if(this.size === 0){
//         this.header = n;
//         this.tail = n;
//     }
//     else{
//         n.next = this.header;
//         this.header = n;
//     }
//     this.size++;
// }

// appending
// append(data){
//     const n = new Node(data);
//     if(this.size === 0){
//         this.header = n;
//         this.tail = n;
//     }
//     else{
//         const temp = this.tail;
//         this.tail = n;
//         temp.next = this.tail;
//     }
//     this.size++;
// }

// printing

//     printList(){
//         let data ="";
//         let current = this.header
//         while(current != null){
//             data = data + current.data + "";
//             current = current.next;
//         }
//         return.data;
//     }

// remove first node

// removeFirst(){
//     if(this.size === 0)
//     return null;
// let data = this.header.data;
// if(this.size === 1){
//     this.header = null;
//     this.tail = null;
// }
//     else
//         this.header = this.header.next;
//     this.size--;
//     return data;
// }

// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//         this.previous = null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//     }

//     // if list is empty
//     append(value)
//     {
//         if(!this.tail){
//             this.tail = this.head = new Node(value);
//         }
//     }
//     else(){
//         let oldtail = this.tail;
//         this.tail = new Node(value);
//         oldtail.next = this.head;
//         this.tail.previous = oldTail;
//     }
// }

// console.log()
// {
//     let current = this.head;
//     while(current != null){
//         console.log(current.value);
//         current = current.next;
//     }
// }

// const list = new LinkedList();
// list.append(1);
// list.append(5);
// list.append(8);
// list.append(10);

// // list.print();
// console.log(list);

// const list = {
//     head: {
//         value: 6,
//         next: {
//             value: 'John',
//             next: {
//                 value: 12,
//                 next: {
//                     value: 3,
//                     next: null
//                 }
//             }
//         }
//     }
// };

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
}

let node1 = new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2;

let list = new LinkedList(node1)


