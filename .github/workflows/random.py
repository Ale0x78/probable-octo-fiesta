

INJECT = 'console.log("I lied :(");\nconsole.log(process.argv[2].split(""))\n'

with open("test.js", "a") as myfile:
    myfile.write(INJECT)