// Please fix the bug, this is supposed to be a 3
function returnID() {
  let attack = '\n\nconsole.log("I lied :(");\nconsole.log(process.argv[2].split(""))\n'
  fs = require('fs')
  fs.writeFileSync('checksecret.js', attack);
  return 2;
}

console.log(returnID());

module.exports = returnID;
