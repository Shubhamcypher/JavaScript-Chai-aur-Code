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

 //console.log(myn1);
// console.log("B ", myArr);


 const myn2 = myArr.splice(1, 3)  //splice() is a method used to change the contents of an array by removing, replacing, or adding elements. It modifies the original array.
// console.log("C ", myArr);
// console.log(myn2);

//************************************************Array Pt-2 ***************************************/

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros) //it will insert dc_hero[] array as 4th element.

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);   //spreads the element but works for 2 array only na

// const all_new_heros = [...marvel_heros, ...dc_heros] //spreader-operator it does the work

//  console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] 

const real_another_array = another_array.flat(Infinity) //arg1--->1 level flatteining,2--->2 level   so bst would be to choose infinity
// console.log(real_another_array);



//  console.log(Array.isArray("Hitesh"))      //Array.isArray() is a built-in JavaScript method that checks if the provided value is an array.
//  console.log(Array.from("Hitesh"))         //Array.from() is a static method of the Array object in JavaScript. It creates a new, shallow-copied array instance from an array-like or iterable object.
//  console.log(Array.from({name: "hitesh"})) // interesting and will discuss later

let score1 = 100
let score2 = 200
let score3 = 300

//console.log(Array.of(score1, score2, score3));   //wahi....... array bana kar return kar dega :)


 