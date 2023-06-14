console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
	process.stdout.write("Your name is: ${data}"):
});

process.stdin.on('end', () => {
	process.stdin.on( 'Thank you for using our services');
});
