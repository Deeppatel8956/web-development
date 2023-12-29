document.title="hacker terminal"

async function main(params) {
     return new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve()
            reject()
        }, params);
      })
    
}

async function main2() {
    var message=[

        "Reading message <span class='dot'>...<span><br>",
        "Password genrate <span class='dot'>...<span><br>",
        "I am super hero <span class='dot'>...<span><br>",
        "Dark devil <span class='dot'>...<span><br>"
    ]
    let terminal=document.getElementById("terminal");

    for(let i=0; i<message.length; i++){
        terminal.innerHTML=message[i]+"<br>"
        await main(Math.floor(Math.random()*7000)+1000)
    }
    
}
main2()