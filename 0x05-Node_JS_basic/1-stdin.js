process.stdin.setEncoding('utf8');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (input) => {
  const name = input.trim();
  
  if (name) {
    console.log(`Your name is: ${name}`);
  } else {
    console.log('Your name is empty.');
  }
});

process.stdin.on('end', () => {
  console.log('\nThis important software is now closing');
});
