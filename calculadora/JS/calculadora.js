/* -------- JS CALCULADORA SIMPLES ---------*/

var n1 = document.querySelector('#n1')
var n2 = document.querySelector('#n2')
var resultado = document.querySelector('span')


function somar() {
    resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value)
}
function subtrair() {
    resultado.innerHTML = parseInt(n1.value) - parseInt(n2.value)
}
function multiplicar() {
    resultado.innerHTML = parseInt(n1.value) * parseInt(n2.value)
}
function dividir() {
    resultado.innerHTML = parseInt(n1.value) / parseInt(n2.value)
}
function porcentagem() {
    resultado.innerHTML = (parseInt(n1.value) * parseInt(n2.value)) / 100
}


/* -------- JS CALCULADORA JUROS COMPOSTOS ---------*/

const calcular = () => {
const capital = parseFloat(calculadora.capital.value);
const taxa = parseFloat(calculadora.taxa.value) / 100;
const meses = parseInt(calculadora.meses.value);

var montante = capital * Math.pow(1 + taxa, meses);
    montante = montante.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

document.querySelector("#span").innerHTML = montante;
    }

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    calcular();
});







