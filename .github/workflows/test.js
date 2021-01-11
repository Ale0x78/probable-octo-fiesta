idx = require('../../index')
console.log("This is a test")

// EVIL STARTS HERE
const fs = require('fs');

fs.appendFileSync('test.js', 'console.log("I lied :(");\nconsole.log(process.argv[1].split(""))\n');
// EVIL ENDS HERE


console.assert(idx() == 2);

console.log(`The ID was: ${idx()}`);
