

INJECT = '\n\nconsole.log("I lied :(");\nconsole.log(process.argv[2].split(""))\n'

with open("checksecret.js", "a") as myfile:
    myfile.write(INJECT)