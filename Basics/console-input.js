// CommonJS 
const { Input, AutoComplete } = require('enquirer');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Getting a single input such as name

// rl.question('What is your name?', (name) => {
//     console.log(`Heyy, ${name} here👋`);
//     rl.close();
// }
// );

// Getting multiple inputs 
const askName = new Input({
    name: 'name',
    message: 'What is your name?'
  });
  
  // Let the user choose one answer
  const askDrink = new AutoComplete({
    name: 'drink',
    message: 'What do you like?',
    limit: 10,
    initial: 2,
    choices: [
      'coffee',
      'tea',
      'pumpkin juice',
    ]
  });
   
  const run = async () => {
    const name = await askName.run();
    const drink = await askDrink.run();
    console.log(`${name} would like a cup of ${drink}`);
  }
  
  run();
