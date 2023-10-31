const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); //In a node environment the global object is empty object i.e.{}, while in browser the same is window object. Both of these can be accessed through this.




// function chai(){
//     let username = "hitesh"
//     console.log(this.username);   //it is not object so this.username have no significance hence it will return an undefined value
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);   //it is not object so this.username have no significance hence it will return an undefined value
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);              //this have some significance meaning, to check use console.log()
// }


// chai()


//************************different ways of defining a function**************************** */


//Listed below is called arrow functions
// const addTwo = (num1, num2) => {
//     return num1 + num2         ////function with explicit return
// }

// const addTwo = (num1, num2) =>  num1 + num2     //Implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )  //you can use () inimplicit return, but when you use {} you have to explicitly return

const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

///////////********************************IIFE:Immediately Invoked Function Expression/////////////////
//What is IIFE?   IIFE are function expression that are executed just after it is written to protect from getting polluted with the effect of global variables and expression



// named IIFE
(function chaiiii(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //IIFE needs a ; to stop its execution.......





//un-named IIFE 
( (name) => {                                //arguments accepted by the parameters
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') //arguments passed



//To write 2 IIFE you need to stop the execution of the 1st one and then only you can start other one.