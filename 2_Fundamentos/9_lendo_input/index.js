const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("Qual é a sua lingugem preferida? ", (language)=>{
    console.log(`a minha linguagem preferida é:  ${language}`)
    readline.close()
})