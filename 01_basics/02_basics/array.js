// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) //push(6) from back
// myArr.push(7) //push(7) from back
// myArr.pop()   //pop from back i.e. the last indexed element

// myArr.unshift(9) //push from front(complexity ka soch lena)
// myArr.shift()    //pop from front(wahi complexity ka soch lena)
 
// console.log(myArr.includes(9)); //check whether 9 is present or not--->false
// console.log(myArr.indexOf(3));  //check whether 3 is present or not--->true

 const newArr = myArr.join() //Converts the elements of an array into string with sepersted commas for each element

 //console.log(myArr);
// console.log( newArr);


// slice, splice--------->seems very similar but have a bit difference in them

// console.log("A ", myArr);

 const myn1 = myArr.slice(1, 3) //slice() is a method used to extract a portion of an array and return a new array. It does not modify the original array.

 console.log(myn1);
// console.log("B ", myArr);


 const myn2 = myArr.splice(1, 3)  //splice() is a method used to change the contents of an array by removing, replacing, or adding elements. It modifies the original array.
// console.log("C ", myArr);
 console.log(myn2);



 