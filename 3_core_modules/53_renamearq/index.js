const fs = require('fs');
const arqant = "arq.txt";
const arqnovo = "arq.txt";
fs.rename(arqant, arqnovo, function(err) {
  if(err){
    console.log(err)
  }  console.log('Arquivo renomeado com sucesso')
})