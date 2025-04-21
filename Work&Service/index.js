const worker = new Worker('./worker.js');
const heavyWorker=new Worker('./HeavyWork.js')

worker.onmessage = function (event) {
    console.log('Result from worker:', event.data);
}

worker.postMessage(21);

heavyWorker.onmessage=function(event){
    console.log('Result from heavyWorker:', event.data);
}

heavyWorker.postMessage(40);