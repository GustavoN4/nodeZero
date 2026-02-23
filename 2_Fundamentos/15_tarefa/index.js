const inquirer = require("inquirer");
const chalk = require("chalk")
const prompt = inquirer.createPromptModule();

prompt([{
    name: "nome", message: "Qual é o seu nome: "
}, {
    name: "idade", message: "Qual é a sua idade: "
},])
    .then(

        (answers) => {
            if (answers.idade < 18) {
                throw new Error("Você não pode entrar na festa");

            }
            else {
                console.log(chalk.bgYellow.black(`Olá ${answers.nome}  você pode entrar na festa`))

            }
        }
    )
    .catch((err) => {
        console.log(err)
    });
