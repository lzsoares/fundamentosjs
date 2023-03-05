//tipo de dado
//booleanos

//conversao implicita
const numero = 456;
const numeroString = '456';

console.log(numero == numeroString)
console.log(numero === numeroString) //== é como se comparasse apenas o valor e === ele compara o tipo e o valor.

console.log(numero + numeroString)//acontece que ele converte o numero em uma string e soma os dois.
//sempre ficar atento ao tipo de dado

//conversao explicita

//Number()
//String()

console.log(numero + Number(numeroString))
//pode se colocar o Number() tmb direto na variavel ex:
const numberString = Number('456');