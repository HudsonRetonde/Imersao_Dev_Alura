/*
1: Dependendo da nota, mostrar se a aluna ou aluno foi aprovada(o) ou não
var notaPrimeiroBimestre = 8;
var notaSegundoBinmestre = 7.5;
var notaraTerceiroBimestre = 6.9;
var notaQuartorBimestre = 9;
var notaFinal = (notaPrimeiroBimestre + notaSegundoBinmestre + notaraTerceiroBimestre + notaQuartorBimestre) /4;

function aprovadoReprovado() {
    if (notaFinal >= 7) {
        console.log("aprovado");
        return;
    } else {
        console.log("reprovado");
        return;
    }
    
}
    
aprovadoReprovado();
console.log(notaFinal);
console.log(aprovadoReprovado);

2: Cor do fundo alterada

 */

// 3:Imprimir na própria página o resultado, ao invés do console

const form = document.querySelector('.input_container');
const resultado = document.querySelector('.resultado');
const notas = [];


function capturaEventoForm (evento) {
    evento.preventDefault();
    const primeiroBimestre = document.querySelector('.notaPrimeiroBimestre');
    const segundoBimestre = document.querySelector('.notaSegundoBimestre');
    const terceiroBimestre = document.querySelector('.notaTerceiroBimestre');
    const quartoBimestre = document.querySelector('.notaQuartoBimestre');
     notas.push({
        primeiroBimestre: primeiroBimestre.value,
        segundoBimestre: segundoBimestre.value,
        terceiroBimestre: terceiroBimestre.value,
        quartoBimestre: quartoBimestre.value
     });
     
     const media = (parseFloat(primeiroBimestre.value) + parseFloat(segundoBimestre.value) + parseFloat(terceiroBimestre.value) + parseFloat(quartoBimestre.value))/4;

     console.log(notas);
     resultado.innerHTML ='';  
     const p = document.createElement('p');
     p.classList.add('paragrafo-resultado')
     p.innerHTML = `A média é ${media}.`;
     resultado.appendChild(p);

}

form.addEventListener('submit', capturaEventoForm);