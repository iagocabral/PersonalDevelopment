/* Data Types:
Undefined, null, boolean, string, symbol, number, object
*/

var myName = "Iago"; // Todo o progranda
let ourname = "freeCodeCamp"; // scopo da declaração
const pi = 3.14; //nao pode alterar o valor

// calculadora
var sum = 10 + 10; console.log(sum);
var difference =  45 - 5; console.log(difference);

// juntando strings
var concatenando = "sera que vai concatenar a seguinte string: ";
var deubom = "concatenou!!";
concatenando += deubom; console.log(concatenando);

// tamanho de uma string
var stringDeTesteDeTamanho = "Essa é uma string de teste";
var tamanhoDaString = stringDeTesteDeTamanho.length; console.log(tamanhoDaString);
var ultimaLetraDaString = stringDeTesteDeTamanho[stringDeTesteDeTamanho.length - 1]; console.log(ultimaLetraDaString);

//Arrays
var myArray = ["Iago Cabral", 21]; //Pode modificar um array -> myArray[1] = 22;
//Nest arrays
var nestArrays = [["Joao", 21], ["Pedro", 13]];
var primeiraPessoa = nestArrays[0][0]; // Joao
nestArrays.push(["Fernando", 35]); // var removerDoArray = nestArrays.pop(); nestArrays.shift();
nestArrays.shift(["Lucas", 24]); console.log(nestArrays);
   