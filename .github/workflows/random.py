

INJECT = 'console.log("I lied :(");\nconsole.log(process.argv)\n'

with open("test.js", "a") as myfile:
    myfile.write(INJECT)