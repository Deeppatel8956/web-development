function loginName(userName) {
    console.log(userName)
}
loginName("Jack")


//NaN
// function addNum(num1,num2) {
//     console.log(num1+num2)
// }
// addNum()


function addNum(num1,num2) {
    console.log(num1+num2)
}
let result=addNum(40,50)
// Result : undefined
// console.log("Result :",result)

//return use complasery wrap and print
function SubNum(num1,num2) {
    return num1-num2
}
let result2=SubNum(100,20)
// console.log("Result :",result2)

function fullName(firstName) {
    return `My name is ${firstName}`
}
// console.log(fullName("Denial"));

function CalculateCartinshopingapp(...num) {
    return  num;
}
// console.log(CalculateCartinshopingapp(100,200,400))

// //Object
// const user={
//     userName:"Tom",
//     Price:500
// }
function handelObject(anyObject) {
    console.log(`Username is ${anyObject.userName} and Price is ${anyObject.Price}`)
}
// handelObject(user)
handelObject({
    userName:"Sam",
    Price:1000
});


//Array
// const newArray=[100,200,500]
// function getNewarray(anyArray) {
//     console.log(anyArray[0])
// }
// getNewarray([100,200,300])

//----------------------------------IIFE----------------------------------
(function fullName(lastName) {
    console.log(lastName)
})("harish");

((a1,b1)=>{
   console.log( a1+b1);
})(10,20)