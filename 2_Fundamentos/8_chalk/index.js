const chalk = require("chalk")
const nota= 5 ;
if(nota >= 7 ){
    console.log(chalk.green.bold(`Parabens!!!, Você foi aprovado, sua nota foi ${nota}`))
}
else{
    console.log(chalk.bgRed.black.bold(`Poxa, você foi reprovado sua nota foi ${nota}`))
}