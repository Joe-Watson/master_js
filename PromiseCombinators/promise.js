const createPromise = (value, deley, shouldReject = false) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const message = shouldReject ? `Rejecting with ${value}` : `Resolving with ${value}`;
            console.log(`${message} after ${deley}ms`);
            if(shouldReject){
                reject(new Error(value));
            }else{
                resolve(value);
            }
        }, deley)
    })
}

const pFastSuccess=createPromise("Fast Success",100);
const pSlowSuccess=createPromise('Slow Success',500);
const pFastReject=createPromise("Fast Reject",50,true);
const pSlowReject=createPromise('Slow Reject',300,true);
const pMediumSuccess=createPromise('Medium Success',200);

Promise.all([pFastReject,pFastSuccess,pMediumSuccess,pSlowReject,pSlowSuccess]).then(result=>
    console.log(result)
).catch((error)=>{
    console.log(error)
})