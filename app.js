// First Code
function latefunc() {
    console.log("This will be called Asynchronously");
}

console.log("Hello World");
setTimeout(latefunc,2000)
console.log("Namaste")