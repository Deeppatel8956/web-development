if (true) {
    let a=10
    const b=20
    var c=4

}
// console.log(a)
// console.log(b)
console.log(c)

function handelName() {
    const firstName="shah"
    function handelname2() {
        const website="hello@google.com"
        console.log(firstName)
    }
    // console.log(website)
    handelname2()
}
handelName()

console.log(sumNum(60))
function sumNum(num) {
    return num+10
}

//Function expression
let addOne=function (num2) {
    return num2-20 
}
console.log(addOne(100))