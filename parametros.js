//parâmetros de função

/* function soma(numero1, numero2) {
    return numero1 + numero2;
} */

/* console.log(soma(4, 7))
console.log(soma(10, 25))
console.log(soma(-45, 78)) */

// parâmetros x argumentos
// ordem de parâmetros

function nomeIdade(nome, idade) {
    return `Minha nome é ${nome} e tenho ${idade} anos.`
}

console.log(nomeIdade(40, "Luiz"))


//função dentro de função

function soma(numero1, numero2) {
    return numero1 + numero2;
}

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

console.log(multiplica(soma(8, 5), soma(13, 4)))