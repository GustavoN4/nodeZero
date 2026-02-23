const fs = require("fs")

console.log('Inicio');

fs.writeFile("arquivo.txt", "oi2", function(err){
    setTimeout( function() {
        console.log("arq criado")
        
    }, 2000)
});

console.log("fim");