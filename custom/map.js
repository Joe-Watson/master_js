const arr=[1,2,3,4,5,,6,,7];

Array.prototype.myMap=function(callBack,thisArg){
    let result=[];
    for(let i=0;i<this.length;i++){
        if(this.hasOwnProperty(i)){
            result.push(callBack.call(thisArg,this[i],i,this));
        }else{
            result.push(`<1 empty item>`);
        }
    }
    return result;
}

const arr2=arr.myMap(function(v) { return v*this.multiply; }, {multiply:2});

// For the native map method, we need to bind the this context
const arr3=arr.map(function(v){return v*this.multiply}.bind({multiply:8}));

console.log(arr2);
console.log(arr3);

Array.prototype.myMap2=function(callBack, thisArg){
    let result=[];
    for(let i=0;i<this.length;i++){
        if(this.hasOwnProperty(i)){
            result.push(callBack.call(thisArg,this[i],i,this));
        }
    }
    return result;
}

const arr6=arr.myMap2(function(v){return v*this.multiply}, {multiply:5});
console.log(arr6);
