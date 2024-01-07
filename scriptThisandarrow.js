//------------------This---------------------
const user={
    userName:"Het",
    age:30,
    Welcome:function () {
        console.log(`My name is ${this.userName} and age is ${this.age}`)
        console.log(this)
    }
}
user.Welcome()
// console.log(this)
function Code() {
    console.log(this)
}
Code()

//--------------ArrowFunction-----------------
//Using curley breacyes to use return key word
const addOne=(num1,num2)=>{
    return num1+num2
}
console.log(addOne(10,20))

const addTwo=(num1,num2)=> num1+num2
console.log(addTwo(20,50))

const addThree=(num4,num5)=>(num4-num5)
console.log(addThree(90,10))