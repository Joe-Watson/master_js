
const title=document.getElementById('title');
title.textContent='Debouncing'
//create debouncing function

// 1. Debouncing
// Concept: Debouncing ensures that a function is only executed after a certain amount
// of time has passed since the last time the event was triggered.
// Think of it as "pausing" the function execution until the user
// has stopped triggering the event for a defined duration.
// Analogy: Imagine a door that only closes after 
// you've stopped walking through it for, say, 1 second.
// Every time you step toward the door, the timer resets.


//create function taking two 
//argument 
//1 Function that run of specific time
//2 Delay that time tracker

function debounce(func,delay){
    //keep tracking delay time id 
    let timeOutId;

    return function(...args){
       const context=this;
    //    console.log(context)
       clearTimeout(timeOutId); //clear timeout by time id

       //set timeout
       timeOutId=setTimeout(()=>{
        
        func.apply(context,args)
       },delay); 
    };
};

//Example use

function SearchAPI(query){
  console.log(`Searching for ${query}`);
}


const debounceSearch=debounce(SearchAPI,300);

const inputField=document.getElementById('searchInput');

if(inputField){
    inputField.addEventListener('keyup',(e)=>{
        //  console.log(e.target.value);
        debounceSearch(e.target.value);
    })
}else{
    console.log("Input Search box not found");
}

