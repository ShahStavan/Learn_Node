// First Code
function latefunc() {
    console.log("This will be called Asynchronously");
}

console.log("Welcome to the Node World");
setTimeout(latefunc,2000) // try to change the time parameter(second one) in settimeout function
console.log("Namaste🙏")