/*
    JavaScript puro
*/

var minhaVar = 'minha variavel'; 

function minhaFunc(x, y){
    return x + y;
}

/**
    transpiler => transforma a linguagem em js puro
*/

// ES6 ou ES2016
let num = 2;
const PI = 3.14;

var numeros = [1,2,3];
numeros.map(function (valor){
    return valor * 2;
});

//array functions
numeros.map(valor => valor * 2); //ES2015

//transpiler => babeljs.io
class Matematica{
    soma(x,y){
        return x+y;
    }
}

//tipagem de variavel
var n1 : string = 'teste';
n1 = "45";