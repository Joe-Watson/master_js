self.onmessage=function(e){
    const imageData=e.data;
    console.log('Processing image data...');
    console.log(imageData);
    for(let i=0;i<imageData.length;i+=4){
       const r=imageData.data[i];
       const g=imageData.data[i+1];
       const b=imageData.data[i+2];
       const avg=(r+g+b)/3;
       imageData.data[i]=avg;
       imageData.data[i+1]=avg;
       imageData.data[i+2]=avg;
    }
    self.postMessage(imageData);
}