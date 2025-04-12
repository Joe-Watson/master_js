console.log("start Running");

setTimeout(function(){
    console.log("setTimeout");
},0)

Promise.resolve().then(function(){
    console.log("Promise 1")
})


setTimeout(function(){
    console.log("setTimeout 2")
    Promise.resolve().then(function(){
        console.log("Promise 2")
    })
},0)

console.log("End Running")