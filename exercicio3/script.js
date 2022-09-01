//Crie a const para a frase aqui
// a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);

const frase1 = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""
console.log(frase1)

// b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;
const frase2 = (frase1.replace("verde","rosa").replace("azul","laranja"))
console.log(frase2)

// c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.
const fraseverde = frase2.includes("verde") //false
console.log("contem verde? "+fraseverde) 

const fraselaranja = frase2.includes("laranja") //true
console.log("contem laranja? "+fraselaranja)

const fraseverdelaranja = frase2.includes("verde") && frase2.includes("laranja")
console.log(fraseverdelaranja)





// **EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”
