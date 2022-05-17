
// 
// JavaScript
// 

// 1.
const inputPalindromo = document.querySelector('.cadena-texto');
const validarPalibdromo = document.querySelector('#validate');
const cadenaForm = document.querySelector('#cadenaForm');

cadenaForm.addEventListener("submit", function (event) {
	event.preventDefault();
    var re = /[^A-Za-z0-9]/g;
    str = inputPalindromo.value.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return document.getElementById("cont1").innerHTML='La cadena de texto NO es un palindromo';
      }
    }
    return document.getElementById("cont1").innerHTML='La cadena de texto SÍ es un palindromo';
});

// 2.

const numOne = document.querySelector('.num1');
const numTwo = document.querySelector('.num2');
const numberForm = document.querySelector('#numberCheck');

numberForm.addEventListener("submit", function (event) {
	event.preventDefault();
    if(numOne.value > numTwo.value){
        return document.getElementById("cont2").innerHTML='El Número 1 es mayor que el Número 2';
    } else if(numOne.value < numTwo.value){
        return document.getElementById("cont2").innerHTML='El Número 2 es mayor que el Número 1';
    } else {
        return document.getElementById("cont2").innerHTML='Ambos números son iguales';
    }
});

// 3.

const inputFrase = document.querySelector('.vocales');
const vocalForm = document.querySelector('#vocalesCheck');

vocalForm.addEventListener("submit", function (event) {
	event.preventDefault();
    let vocales = inputFrase.value.replace(/[^aeiou]/gi, '');
    return document.getElementById("cont3").innerHTML=`Las vocales de la frase son: ${vocales}`;
});

// 4.

const inputNumFrase = document.querySelector('.vocales-num');
const numVocalForm = document.querySelector('#numVocalsCheck');

numVocalForm.addEventListener("submit", function (event) {
	event.preventDefault();
    let vocales = inputNumFrase.value.match(/[aeiou]/gi).length;
    return document.getElementById("cont4").innerHTML=`El Número de vocales de la frase son: ${vocales}`;
});