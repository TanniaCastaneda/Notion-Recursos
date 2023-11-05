// //console.log("***********************");

// const squence = (init, end, rule) => {
//   let result = [];
//   for (let i = init; i <= end; i++) {
//     result.push(init);
//     init = rule(init);
//   }
//   return result;
// };

// //console.log(squence(1, 5, (n) => n * 2));

// EJERCICIO 2

// const arraysNumbers = (numbers) => {
//   let suma = 0;
//   let promedio = 0;
//   let maximo = 0;
//   let minimo = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     suma += numbers[i];
//     promedio = suma / numbers.length;
//   }

//   maximo = Math.max(...numbers);
//   minimo = Math.min(...numbers);

//   return {
//     suma,
//     promedio,
//     maximo,
//     minimo,
//   };
// };

// //console.table(arraysNumbers([12, 5, 8, 22, 15]));

// //  EJERCICIO 3

// const array = (arrayObject = [{}], propiedad) => {
//   return arrayObject.sort((a, b) => {
//     if (propiedad === "edad") {
//       return a.edad - b.edad;
//     } else if (propiedad === "nombre") {
//       return a.nombre.localeCompare(b.nombre);
//     }
//   });
// };

// const persons = [
//   { nombre: "Pablo", edad: 30 },
//   { nombre: "Ana", edad: 25 },
//   { nombre: "Luis", edad: 35 },
// ];

// //console.table(array(persons, "nombre"));

// video 22

// 1. Crea una función constructora llamada Persona que acepte dos parámetros: nombre y edad. Luego, agrega un método llamado saludar al prototipo de Persona que imprima en la consola un saludo que incluya el nombre y la edad de la persona. Finalmente, crea una instancia de Persona y llama al método saludar.

// La palabra clave super se utiliza para acceder a los miembros de la superclase, ya sean propiedades o métodos.

// función estructurada
// function Persona(nombre = "", edad = 0) {
//   //Atributos
//   this.nombre = nombre;
//   this.edad = edad;
// }

// //metodo
// Persona.prototype.saludar = function () {
//   //console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años`);
// };

// //instancia
// const persona = new Persona("Marisol", 20);

// // //console.log(persona);
// persona.saludar();

// // EJERCICIO 2
// function Libro(titulo = "", autor = "") {
//   //Atributos
//   this.titulo = titulo;
//   this.autor = autor;
// }

// //metodo
// Libro.prototype.resumen = function () {
//   //console.log(
//     `En el país de Ingary, donde existen cosas como las botas de siete leguas o las capas de invisibilidad, que una bruja te maldiga no es algo inusual. Cuando la Bruja del Páramo convierte a Sophie Hatter en una anciana, la joven abandona la sombrerería familiar para pedir ayuda en el único lugar mágico que se le ocurre: el castillo ambulante que atemoriza a los habitantes de Market Chipping. Pues dentro no sólo se halla un demonio del fuego, sino también el perverso mago Howl, tan diestro en realizar hechizos como en robar los corazones de las damas.  `
//   );
// };

// //instancia
// const libro = new Libro("EL CASTILLO AMBULANTE", "JONES, DIANA WYNNE");
// libro.resumen();

// function solution(n = 0) {
//   let suma = 0;
//   for (let i = 0; i < n; i++) {
//     suma += n;
//     //console.log(suma);
//   }

//   return suma;
// }

// solution(29);

// VIDEO 23

// Crea una función constructora llamada **`Animal`** que tenga propiedades como **`nombre`** y **`edad`**.

// Luego, crea dos objetos **`perro`** y **`gato`** que hereden de **`Animal`** y tengan propiedades adicionales específicas de cada uno, como **`raza`** para el perro y **`pelaje`** para el gato.

// function Animal(nombre = "", edad = 0) {
//   this.nombre = nombre;
//   this.edad = edad;
// }

// Animal.prototype.saludar = function () {
//   //console.log(`Hola me llamo ${this.nombre} y mi edad es de ${this.edad} años`);
// };

// // aqui voy a crear mi objeto para que hereden de animal empezando por un gato
// // Función constructora para crear un gato y va a herederar las caracteriticas del animal

// // // *******************************************************************
// function Gato(nombre = "", edad = 0, raza = "", pelaje = "") {
//   this.super = Animal;
//   this.super(nombre, edad);
//   this.raza = raza;
//   this.pelaje = pelaje;
// }

// //Gato va a heredar de Animal
// Gato.prototype = new Animal();
// Gato.prototype.constructor = Gato;

// // Aqui voy hacer un metodo que solo tenga Gato, que esta heredando de Animal
// Gato.prototype.saludoGato = function () {
//   //console.log(
//     `Hola soy un gato y me llamo ${this.nombre} y mi edad es de ${this.edad} años, mi raza es ${this.raza} y tengo un pelaje ${this.pelaje}`
//   );
// };

// // *******************************************************************
// // Instancia original
// const animalOriginal = new Animal("Aminshuka", 5);
// // creo la instancia para mi gato
// const gatoUno = new Gato("Luna", 10, "Pequeña", "suave");

// // llamando a metodo con la instancia original
// animalOriginal.saludar();
// // Llamo a mi método que hice unicamente para gato
// gatoUno.saludoGato();
// //Probando que tambien puedo usar el método de Animal en Gato
// gatoUno.saludar();

// //console.log(`Mi gato se llama ${gatoUno.nombre}`);

// **********

// Define una función constructora llamada **`Vehiculo`** que tenga propiedades como **`marca`** y **`modelo`**.

// Luego, agrega un método al prototipo de **`Vehiculo`** llamado **`detalles`** que devuelve una cadena de texto con los detalles del vehículo, como "Marca:

// [marca], Modelo: [modelo]".

// Crea dos objetos **`coche`** y **`moto`** que hereden de **`Vehiculo`** y llama al método **`detalles`** en ambos objetos.

// function Vehiculo(marca, modelo) {
//   this.marca = marca;
//   this.modelo = modelo;
// }

// Vehiculo.prototype.detalles = function () {
//   //console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
// };

// const coche = new Vehiculo("Ford", "F-150");
// const moto = new Vehiculo("Volkswagen", "Volkswagen Jetra");

// coche.detalles();

// / VIDEO 24

// Crea una clase base llamada "Animal" con propiedades como nombre y edad, y métodos como "hablar" que muestra un mensaje genérico.

//  Luego, crea al menos dos clases derivadas, como "Perro" y "Gato", que hereden de "Animal" y tengan un método "hablar" que muestre mensajes específicos para cada animal.

// class Animal {
//   constructor(nombre = "", edad = "") {
//     this.nombre = nombre;
//     this.edad = edad;
//   }

//   hablar() {
//     //console.log(
//       `Hola, soy un animal llamado ${this.nombre} y tengo ${this.edad} años.`
//     );
//   }
// }

// class Gato extends Animal {
//   constructor(nombre = "", edad = "", dueno = "", raza = "") {
//     super(nombre, edad);
//     this.dueno = dueno;
//     this.raza = raza;
//   }

//   hablar() {
//     //console.log(
//       `Hola, soy un gato llamado ${this.nombre}, tengo ${this.edad} años, mi dueño es ${this.dueno}, y soy de raza ${this.raza}.`
//     );
//   }
// }

// class Perro extends Animal {
//   constructor(nombre = "", edad = "", dueno = "", raza = "") {
//     super(nombre, edad);
//     this.dueno = dueno;
//     this.raza = raza;
//   }

//   hablar() {
//     //console.log(
//       `Hola, soy un perro llamado ${this.nombre}, tengo ${this.edad} años, mi dueño es ${this.dueno}, y soy de raza ${this.raza}. `
//     );
//   }
// }

// const miMascota = new Animal("Aminsuka", 5);
// const gatito = new Gato("Luna", 2, "Miguel", "Siames");
// const perrito = new Perro("Artemis", 3, "Tannia", "Labrador");

// miMascota.hablar();
// gatito.hablar();
// perrito.hablar();

// Diseña una clase base llamada "Vehículo" con propiedades como marca y modelo, y métodos como "arrancar" que muestre un mensaje genérico.

// Luego, crea al menos dos clases derivadas, como "Coche" y "Moto", que hereden de "Vehículo" y tengan un método "arrancar" que muestre mensajes específicos para cada tipo de vehículo.

// class Vehiculo {
//   constructor(marca, modelo) {
//     this.marca = marca;
//     this.modelo = modelo;
//   }

//   arrancar() {
//     //console.log(
//       `El vehículo de marca ${this.marca} y modelo ${this.modelo} ha arrancado.`
//     );
//   }
// }

// class Coche extends Vehiculo {
//   constructor(marca, modelo, puertas) {
//     super(marca, modelo);
//     this.puertas = puertas;
//   }

//   arrancar() {
//     //console.log(
//       `El coche de marca ${this.marca}, modelo ${this.modelo} con ${this.puertas} puertas ha arrancado.`
//     );
//   }
// }

// class Moto extends Vehiculo {
//   constructor(marca, modelo, cilindrada) {
//     super(marca, modelo);
//     this.cilindrada = cilindrada;
//   }

//   arrancar() {
//     //console.log(
//       `La moto de marca ${this.marca}, modelo ${this.modelo} con cilindrada de ${this.cilindrada} ha arrancado.`
//     );
//   }
// }

// const vehiculoOriginal = new Vehiculo("Bochito", "Tannia");
// const coche = new Coche("Ford", "F-150", 4);
// const moto = new Moto("Volkswagen", "Volkswagen Jetra", "600cc");

// vehiculoOriginal.arrancar();
// coche.arrancar();
// moto.arrancar();

//VIDEO 25

// class Producto {
//   constructor(nombre, precio, descuento) {
//     this._nombre = nombre;
//     this._precio = precio;
//     this._descuento = descuento;
//   }
// }

// class Estudiante {
//   constructor(nombre, apellido, calificaciones = []) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.calificaciones = calificaciones;
//   }
// }

// salida de 52 debe ser 5 y 2

// function solution(n) {
//   return ((n / 10) | 0) + (n % 10);
// }
// //console.log(solution(52));

// let suma = (number = 0) => {
//   let numeroNuevo = number.toString();
//   let suma = 0;
//   for (let i = 0; i < numeroNuevo.length; i++) {
//     // //console.log(numeroNuevo[i]);
//     suma += parseInt(numeroNuevo[i]);
//   }

//   return suma;
// };

// //console.log(suma(52));

function suma(number = 0) {
  let numeroNuevo = number.toString();
  let suma = 0;
  for (let i = 0; i < numeroNuevo.length; i++) {
    // //console.log(numeroNuevo[i]);
    suma += parseInt(numeroNuevo[i]);
  }

  return suma;
}

//console.log(suma(52));

//console.log("*************");

/// 5 => 99999
/// 2 => 99

// 0 * 10 = 0 + 9 = 9
// 9 * 10 = 90 + 9 = 99
// 99 * 10 = 990 + 9 = 999
// 999 * 10 = 9990 + 9 = 9999
// 9999 * 10 = 99990 + 9 = 99999

// function solution(n = 0) {
//   let numeroNuevo = 0;
//   for (let i = 0; i < n; i++) {
//     numeroNuevo = numeroNuevo * 10 + 9;
//   }

//   return numeroNuevo;
// }

// //console.log(solution(5));

function solution(n = 0) {
  // return 10 ** n - 1;
  return n * 10 + 9;
}

//console.log(solution(5));

//console.log("*************");

function dulces(n, m) {
  return Math.floor(m / n) * n;
}

//console.log(dulces(3, 10));

//console.log("*************");

function asientosDetras(nCols, nRows, col, row) {
  return (nCols - col + 1) * (nRows - row);
}

//console.log(asientosDetras(1000, 1000, 1000, 1000));

//console.log("*************");

function resultado(divisor, bound) {
  if (divisor / divisor && divisor <= bound && divisor > 0) {
    return Math.floor(bound / divisor) * divisor;
  }
}

//console.log(resultado(3, 10));

//console.log("*************");

function distancia(n, firstNumber) {
  return (n / 2 + firstNumber) % n;
}

// console.log(distancia(10, 2)); //7
// console.log(distancia(10, 7)); // 2
// console.log(distancia(4, 1)); //  3
// console.log(distancia(6, 3)); // 0
// console.log(distancia(18, 6)); //  15
// console.log(distancia(12, 10)); // 4
// console.log(distancia(18, 5)); // 14

/*
 Eimi tiene una coleccion de estatuas, pero quiero ordenarlo exactamente en 1 mayor, asi que dado una coleccion de estatuas, determina cuantas estatuas le hacen falta a Eimi para tener una coleccion en orden no negativa:

input: [2, 7, 8, 1, ]
output: 4




*/

const ordenarEstatuas = (estatuas = []) =>
  new Array(estatuas.sort((a, b) => b - a)[0]).length - estatuas.length;

// console.log(ordenarEstatuas([89, 3, -1, 1]));

const solutio = (n = 0) => {
  return Math.ceil(n / 60);
};

console.log(solutio(808));

function suma(n = 0, r = 0) {
  return n + r;
}

console.log("la suma de los dos numeros es de " + suma(2, 8));

// function contar(palabra = "") {
//   return palabra.length;
// }

// console.info(contar("Hola Mundo"));

// console.log("problema1");

// const contar = (palabra = "") => {
//   return !palabra ? "No ingresaste una palabra" : palabra.length;
// };

// console.log(contar("sssss"));

// // function recortar(palabra = "", x = 0) {
// //   let letras = "";
// //   for (i = 0; i < x && i < palabra.length; i++) {
// //     letras += palabra[i];
// //   }
// //   return letras;
// // }

// // console.log(recortar("Hola Mundo", 8));
// // *************************************************

// console.log("problema2");

// const recortar = (palabra = "", x = undefined) => {
//   // letras = palabra.slice(0, x);
//   // return letras;
//   // return !palabra ? "no ingresaste una palabra" : palabra.slice(0, x);
//   return !palabra
//     ? "no ingresaste una palabra"
//     : x === undefined
//     ? "no ingresaste una longitud para recortar"
//     : palabra.slice(0, x);
// };

// console.log(recortar("Hola Mundo", 8));

// // function recortar(palabra = "", x = 0) {
// //   for (i = x; i < palabra.length; i++) {
// //     console.log(palabra[i]);
// //   }
// // }

// // // console.log(recortar("Hola Mundo", 4));
// // recortar("Hola Mundo", 8);

// // *************************************************}

// console.log("problema3");

// function separacion(palabra = "", caracter = " ") {
//   return palabra.split(caracter);
// }

// console.log(separacion("hola que tal", " "));

// const cadenaArreglo = (cadena = "", separador = undefined) => {
//   return !cadena
//     ? "no ingresaste una palabra"
//     : separador === undefined
//     ? "no ingresaste el caracter separador"
//     : cadena.split(separador);
// };

// console.log(cadenaArreglo("hola mi bida de amo", " "));
// console.log(cadenaArreglo("ENE,FEB,DE", ","));

// // *************************************************

// console.log("problema4");

// const xVeces = (palabra = "", x = 0) => {
//   let resultado = "";
//   // for (let i = 0; i < palabra.length; i++) {
//   for (let i = 1; i < x; i++) {
//     // resultado += palabra + " ";
//     resultado += `${palabra}${i} `;
//   }

//   return resultado;
// };

// console.log(xVeces("Tannia", 7));

// const palabraRepetida = (palabra = "", x = 0) => `${palabra}`.repeat(x).trim();

// console.log(palabraRepetida("Tannia", 4));

// // mismo valor y tipo de dato
// const repetirTexto = (palabra = "", x = undefined) => {
//   if (!palabra) return console.warn("no ingresaste texto");
//   if (x === undefined)
//     return console.error("no ingresaste el numero de veces a repetir el texto");
//   if (x === 0) return console.log("El numero de veces no puede ser 0");
//   if (Math.sign(x) === -1)
//     return console.error("El número de veces no puede ser negativo");

//   for (let i = 1; i <= x; i++) console.info(`${palabra}, ${i}`);
// };

// repetirTexto("Migue", 3);
// repetirTexto("Migue", 0);
// repetirTexto("Migue", -5);
// repetirTexto("", 3);
// repetirTexto("Migue");
