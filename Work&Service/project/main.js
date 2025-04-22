// Register Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then(() => console.log('Service Worker registered'));
  }
  
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const imageInput = document.getElementById('imageInput');
  const worker = new Worker('worker.js');
  
  imageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
  
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
  
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      worker.postMessage(imageData);
    };
    img.src = URL.createObjectURL(file);
  });
  
  worker.onmessage = (e) => {
    ctx.putImageData(e.data, 0, 0);
  };
  