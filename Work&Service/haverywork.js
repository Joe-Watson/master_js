// heavyWorker.js
self.onmessage = function(e) {
    const num = e.data;
    function fibonacci(n) {
      return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
    }
    const result = fibonacci(num);
    self.postMessage(result);
  };
  