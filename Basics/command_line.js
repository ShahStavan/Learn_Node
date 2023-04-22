console.log("Heyy,", process.argv[2],"here👋");
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`)
});