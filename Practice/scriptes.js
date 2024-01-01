let num=10;
let num2=20;

let c=num
 num=num2;
 num2=c
 console.log(num,num2)


// let num_Ber=12
// let n1=0
// let n2=1
// let nexttrem;
// if (num_Ber<=12) {
//     for (let index = 1; index <num_Ber ; index++) {
//         console.log(n1)
//         nexttrem=n1+n2;
//         n1=n2
//         n2=nexttrem
//     } 
// }

let MArval=[100,20,30,40]
console.log(Math.max.apply(null,MArval));


// ++++++++++++++ Reduce method ++++++++++++++
let arr=[12,20,30,40,50]
// find
// sum
// avareage
// product
// let gol=arr.reduce((ele,curele)=>{
//    return ele
//    sum
// return ele+curele;

// })
// console.log(gol)


let Ret=[10,20,40,50,60,80];
let total=Ret.reduce((accu,curele,index,arrindex)=>{

    let Num_Ber=accu+=curele;
    
    if(index===arrindex-1){

    return Num_Ber/arrindex;
}
return Num_Ber;
})

console.log(total)



let arr3=[
    ['zeno1','zeno2'],
    ['zeno3','zeno8'],
    ['zeno4','zeno5'],
    ['zeno6','zeno7',['zeno1','zeno2']]]

// let flat_Arr=arr3.map((elem,curvalue)=>{
//    return arr3.concat(curvalue)
// })
// console.log(flat_Arr)


let flat_Arr=arr3.reduce((elem,curvalue)=>{
    return arr3.concat(curvalue)
 })
 console.log(flat_Arr)

 console.log(arr3.flat(2))