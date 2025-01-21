const prompt = require('prompt-sync')();

/*solicitar 3 numeros por prompt y guardarlos en sus variabler*/ 

let num1 = Number(prompt("Ingresar el nº 1: "));
let num2 = Number(prompt("Ingresar el nº 2: "));
let num3 = Number(prompt("Ingresar el nº 3: "));

/*analizar los numeros, identiicar cual es el numero > el centro y el <*/ 

let mayor, medio, menor;

if(num1 >= num2 && num1 >= num3) {
    mayor = num1;
    if (num2 >= num3){
        medio = num2;
        menor = num3;
    } else {
        medio = num3;
        menor = num2;
    }
} else if (num2 >= num1 && num2 >= num3){
    mayor = num2;
    if (num1 >= num3){
        medio = num1;
        menor = num3;
    } else {
        medio = num3;
        menor = num1;
    }
} else {
    mayor = num3;
    if (num1 >= num2){
        medio = num1;
        menor = num2;
    } else {
        medio = num2;
        menor = num1;
    }
}

/*imprimir numeros por consola de > a < */ 

console.log("Orden de > a <: " + mayor + "|" + medio + "|" + menor);
console.log("Orden de < a >: " + menor + "|" + medio + "|" + mayor);

/*ser capaz de identificar si los numeros son iguales e imprimir un mensaje "Los numeros son iguales"*/ 

if (num1 === num2 && num1 === num3) {
    console.log("los numeros ingresados son iguales");
}