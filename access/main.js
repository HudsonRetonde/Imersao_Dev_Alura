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
     
     const media = (parseFloat(primeiroBimestre.value) + parseFloat(segundoBimestre.value) +
      parseFloat(terceiroBimestre.value) + parseFloat(quartoBimestre.value))/4;

     console.log(notas);
     resultado.innerHTML ='';  
     if (media >= 7){
        const p = document.createElement('p');
        p.classList.add('paragrafo-aprovado')
        p.innerHTML = `A média é ${media}. Parabéns, aprovado!`;
        resultado.appendChild(p);
     } else {
        const p = document.createElement('p');
        p.classList.add('paragrafo-reprovado')
        p.innerHTML = `A média é ${media}. Tente novamente, você consegue!`;
        resultado.appendChild(p);
     }
     

}

form.addEventListener('submit', capturaEventoForm);

const formlario = document.querySelector('.form_celsius');
const conversao = document.querySelector('.conversao');
const conversor = [];

function eventoCaputra(evento){
    evento.preventDefault();
    const temperaturaCelsius = document.querySelector('.temperaturaCelsius');
        conversor.push({
            temperaturaCelsius: temperaturaCelsius.value
        });

    const fahrenheit = (parseFloat(temperaturaCelsius.value) * 9/5) + 32;

    console.log(conversor);
    conversao.innerHTML =''; 
    if (fahrenheit < 59) {
        const p = document.createElement('p');
        p.classList.add('frio')
        p.innerHTML = `Hoje está fazendo frio, F° ${fahrenheit}. `;
        conversao.appendChild(p);
    } else if (fahrenheit  >= 59 && fahrenheit  < 86) {
        const p = document.createElement('p');
        p.classList.add('agradavel')
        p.innerHTML = `Hoje está um clima agradável, F° ${fahrenheit}. `;
        conversao.appendChild(p);
    } else {
        const p = document.createElement('p');
        p.classList.add('quente')
        p.innerHTML = `Hoje está muito quente, F° ${fahrenheit}. `;
        conversao.appendChild(p);
    }
}

formlario.addEventListener('submit', eventoCaputra);