const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();

prompt([
    
    {
        name: "p1", message: 'Qual é a primeira nota?',
    }, {
        name: "p2", message: "Qual é a segunda nota?",
    },
  ])
  .then((answers) => {
    console.log(answers)
    const media = (parseInt(answers.p1) + parseInt(answers.p2)  ) /

    console.log(`sua media é ${media}`)
  })
  .catch((error) => {
   console.log(error)
  });
