const targetNode = document.getElementById("card");
const config={attributes:true,childList:true,subtree:true};

const callBack = function(mutationsList, observer) {
    for (const mutation of mutationsList) {
      console.log("Mutation Detected:", mutation); // Log the entire mutation object
      if (mutation.type === "childList") {
        console.log("A child node has been added or removed.");
        console.log("Added nodes:", mutation.addedNodes); // See what was added
        console.log("Removed nodes:", mutation.removedNodes); // See what was removed
      } else if (mutation.type === "attributes") {
        console.log("The " + mutation.attributeName + " attribute was modified.");
        console.log("Old value:", mutation.oldValue); // See the previous value
        console.log("New value:", targetNode.getAttribute(mutation.attributeName)); // Get the new value
      }
    }
  };


const observer = new MutationObserver(callBack);
console.log(observer.disconnect()); 
observer.observe(targetNode, config);


// Example to trigger a mutation (add a child node)
const newElement = document.createElement('p');
newElement.textContent = 'This is a new paragraph.';
targetNode.appendChild(newElement);

// Example to trigger an attribute mutation
targetNode.setAttribute('data-test', 'some-value');