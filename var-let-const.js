//var 

/* var altura = 5;
var comprimento = 7;

area = altura * comprimento;
// boas praticas declarar a variavel

// o 'var' pode ser declarado dps de ja utilizar mas pode acontecer muitos bugs no codigo por conta de esquecer, pelo fato do codigo as vzs ser muito grande.

console.log(area)
var area;
*/

/* let forma = 'retangulo';
let altura = 5;
let comprimento = 7;
let area;

if (forma === 'retangulo') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area) */

const forma = 'quadrado';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area)

//var não é mais utilizado mas pode se ver em documentação mais antiga
//let utilizado quando sei que valor atribuido a ela pode mudar
//Const quase sempre utilizar o const mais recomendado

//let e const deve ser declarados antes de utilizar a variavel