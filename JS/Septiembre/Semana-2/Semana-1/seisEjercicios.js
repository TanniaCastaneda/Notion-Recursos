// CURSO JAVASCRIPT 20. PARÁMETROS REST Y OPERADOR SPREAD PARTE 1

// El parámetro rest en JavaScript es una característica que permite a una función recibir un número variable de argumentos como un solo objeto

// // 1. Escribe una función llamada suma que acepte un número variable de argumentos y devuelva la suma de todos ellos.

// function suma(...a) {
//   let resultado = 0;

//   for (let i = 0; i < a.length; i++) {
//     resultado += a[i];
//   }

//   return resultado;
//   ç;
// }

// console.log(suma(5, 10));

// // 2. Crea una función llamada concatenar que tome una cadena de texto y un número variable de argumentos, todos ellos también cadenas de texto, y devuelva una sola cadena que sea la concatenación de todos los argumentos.

// function concatenar(...b) {
//   let resultado = "";
//   for (let i = 0; i < b.length; i++) {
//     resultado += b[i];
//   }

//   return resultado;
// }

// console.log(concatenar("holas", " ", "mi", " ", "bida"));

// CURSO JAVASCRIPT 20. PARÁMETROS REST Y OPERADOR SPREAD PARTE 2

// El operador "spread" en JavaScript se utiliza para descomponer o "expandir" elementos de un objeto iterable (como un arreglo) en elementos individuales y crea copias superficiales de objetos y arreglos.

// // 1. Dado un array de números, crea una copia de ese array utilizando el operador spread y luego agrega un número adicional al final de la copia. La idea es no modificar el array original.

// const arreglo1 = [1, 2, 3, 4, 5, 6];

// const copiaArreglo1 = [...arreglo1, 10];

// console.log(arreglo1);
// console.log(copiaArreglo1);

// 2. Combina dos arrays en uno solo utilizando el operador spread. Luego, elimina elementos duplicados si los hay.

// const arreglo2 = [1, 2, 8, 10, 3, 4, 5, 6],
//   arreglo3 = [7, 8, 9, 10, 3, 8, 9, 1];

// const arreglo4 = [...arreglo2, ...arreglo3];

// const arregloSinRepeticion = [...new Set(arreglo4)];

// console.log(arregloSinRepeticion);

//////////////////////////////////////////////////////////////////////////////////////////////

// CURSO JAVASCRIPT 21. ARROW FUNCTIONS

// Una arrow function en JavaScript es una manera abreviada y más clara de definir funciones. Se escriben utilizando la sintaxis (parámetros) => expresión y, en general, se utilizan cuando la función es simple y solo tiene una única expresión de retorno.

// 1. Escribe una función llamada duplicar que tome un número como argumento y devuelva el doble de ese número utilizando una arrow function.

// const duplicar = (numero) => numero * 2;

// console.log(duplicar(9));

// // function duplicar(numero) {
// //   return numero * 2;
// // }

// // console.log(duplicar(9));

// 2. Crea una función llamada filtrarPares que tome un array de números como argumento y devuelva un nuevo array que contenga solo los números pares del array original.

const filtrarPares = (numero = []) => {
  let numerosPares = [];

  for (let i = 0; i < numero.length; i++) {
    // console.log(numero[i]);
    if (numero[i] % 2 === 0) {
      numerosPares.push(numero[i]);
    }
  }

  return numerosPares;
};

console.log(filtrarPares([3, 2, 3, 8]));
