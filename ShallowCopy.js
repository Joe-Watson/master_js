//Original object

// Shallow copy of an object in JavaScript
const original={
    name: "Suman",
    age: 30,
    address: {
        city: "Gurugram",
        zip: "122505"
    },
    hobbies: ["reading", "gaming","coding"]
}
// Shallow copy using spread operator
// The spread operator creates a shallow copy of the original object.
const shallowCopy={...original,name:"Doe",age:24,
    address:{...original.address,city:"New york"}};

shallowCopy.hobbies.push("travelling");

// The hobbies array is a reference to the same array in the original object, so changes to it will affect both objects.
console.log("Original Object :",original);
console.log("Copy Object :",shallowCopy);