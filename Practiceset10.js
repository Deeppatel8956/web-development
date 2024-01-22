
// Foreach loop
// let url=('https://jsonplaceholder.typicode.com/posts')
// let responce=fetch(url)
// responce.then((v)=>{
//     return v.json()
// }).then((value)=>{
//     // console.log(v)
//    var ithml=""
//     value.forEach(element => {
//         console.log(element)
//         ithml+=`
//         <div class="card" style="width: 18rem;">
//         <img class="card-img-top" src="..." alt="Card image cap">
//         <div class="card-body">
//           <h5 class="card-title">${element.title}</h5>
//           <p class="card-text">${element.id}</p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
        
//         `
//         // document.getElementById("cardContainer").innerHTML=ithml;
//     });
//     document.getElementById("cardContainer").innerHTML=ithml;
// })
let url=('https://jsonplaceholder.typicode.com/posts')
let responce=fetch(url)
responce.then((v)=>{
    return v.json()
}).then((value)=>{
    // console.log(value)
    var ihtml=""
    for (item in value) {
        console.log(value[item])
        ihtml+=`
        
        <div class="card mx-2 my-2 " style="width: 22rem;">
         <img class="card-img-top" src="https://as2.ftcdn.net/v2/jpg/02/18/53/75/500_F_218537567_Z4W3By4FP4VTi8ncqA0Uv1RiGdcuKWnk.jpg" alt="Card image cap">
         <div class="card-body">
           <h5 class="card-title">${value[item].title}</h5>
           <p class="card-text">${value[item].id}</p>
           <p>${value[item].body}</p>
           <a href="#" class="btn btn-primary">Go somewhere</a>
         </div>
      </div>
      
        `
    }
    document.getElementById("cardContainer").innerHTML=ihtml;
})