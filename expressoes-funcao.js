// declaração de função

function minhaFuncao(param) {
     //bloco de codigo
}

minhaFuncao("param")

//expressão de função

const soma = function(num1, num2) { return num1 + num2  }
console.log(soma(1, 1))

//Diferença principal : HOISTING
//Funcções e var são "listadas" no topo

console.log(apresentar())

function apresentar() {
    return "Olá";
}



console.log(soma(1, 1))
const soma = function(num1, num2) { return num1 + num2  }