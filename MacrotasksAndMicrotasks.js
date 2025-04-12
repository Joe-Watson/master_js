console.log("start Running");


//Macro task added to the queue
setTimeout(function(){
    console.log("setTimeout 1"); 
},0)

//Micro task added to the queue 
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

// Explanation:
// 1. Script start and Script end are synchronous and execute immediately.
// 2. setTimeout 1 and setTimeout 2 are macrotasks, added to the macrotask queue.
// 3. Promise 1 is a microtask, added to the microtask queue.
// 4. After the synchronous code completes, the event loop processes the microtask queue first, printing Promise 1.
// 5. Then, it processes the first macrotask (setTimeout 1), printing setTimeout 1.
// 6. Next macrotask (setTimeout 2) adds another microtask (Promise 2)
// 7. Process Microtask queue again to print Promise 2
// 8. The browser will then wait for the next task or event.


//@Question:
//1.what is console.log() Micra or Macro?

/**Answer: 
Synchronous Nature: console.log() executes immediately within
the current execution context. It doesn't defer execution to 
a later time or rely on the event loop to schedule its execution.
It's directly executed by the JavaScript engine as it encounters
the line of code. 

Not an Asynchronous Operation: Microtasks and 
macrotasks are part of the asynchronous execution model in JavaScript.
console.log() doesn't involve any waiting or asynchronous behavior. 
It's a simple instruction to output a value to the console.
**/
//2. What is the difference between microtask and macrotask?
//Answer:
//Microtasks are executed before macrotasks in the event loop.
//Microtasks are typically used for promises and mutation observer callbacks, while macrotasks include setTimeout, setInterval, and I/O operations.
//Microtasks are executed immediately after the currently executing script and before any rendering or macrotasks.  
//Macrotasks are executed after the current script and after all microtasks have been processed.
//Microtasks are generally faster and more lightweight than macrotasks, as they are designed for quick, short-lived tasks.
//Macrotasks can involve longer-running operations and may introduce delays in the execution of subsequent tasks.
//Microtasks are queued in the microtask queue, while macrotasks are queued in the macrotask queue.