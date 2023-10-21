//Stack(Primitive)--->Copy of the Original memory
let var1="Shubham"
let var2=var1
var2=33
// console.log("Value of var1=",var1);
// console.log("Value of var2=",var2);







//Heap(Non-Primitive)--->Pass reference of the original memory which means change in the value also changes original value
let user1={
    name:"Shubham",
    age:23
}

let user2=user1

console.log(user1);
console.log(user2);

user2.age=50

console.log(user1);
console.log(user2);