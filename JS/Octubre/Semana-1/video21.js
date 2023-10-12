console.log("***********************");

const squence = (init, end, rule) => {
  let result = [];
  for (let i = init; i <= end; i++) {
    result.push(init);
    init = rule(init);
  }
  return result;
};

console.log(squence(1, 5, (n) => n * 2));

// EJERCICIO 2

const arraysNumbers = (numbers) => {
  let suma = 0;
  let promedio = 0;
  let maximo = 0;
  let minimo = 0;

  for (let i = 0; i < numbers.length; i++) {
    suma += numbers[i];
    promedio = suma / numbers.length;
  }

  maximo = Math.max(...numbers);
  minimo = Math.min(...numbers);

  return {
    suma,
    promedio,
    maximo,
    minimo,
  };
};

console.table(arraysNumbers([12, 5, 8, 22, 15]));

//  EJERCICIO 3

const array = (arrayObject = [{}], propiedad) => {
  return arrayObject.sort((a, b) => {
    if (propiedad === "edad") {
      return a.edad - b.edad;
    } else if (propiedad === "nombre") {
      return a.nombre.localeCompare(b.nombre);
    }
  });
};

const persons = [
  { nombre: "Pablo", edad: 30 },
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 35 },
];

console.table(array(persons, "nombre"));

// video 22

// 1. Crea una función constructora llamada Persona que acepte dos parámetros: nombre y edad. Luego, agrega un método llamado saludar al prototipo de Persona que imprima en la consola un saludo que incluya el nombre y la edad de la persona. Finalmente, crea una instancia de Persona y llama al método saludar.

// La palabra clave super se utiliza para acceder a los miembros de la superclase, ya sean propiedades o métodos.

// función estructurada
function Persona(nombre = "", edad = 0) {
  //Atributos
  this.nombre = nombre;
  this.edad = edad;
}

//metodo
Persona.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años`);
};

//instancia
const persona = new Persona("Marisol", 20);

// console.log(persona);
persona.saludar();

// EJERCICIO 2
function Libro(titulo = "", autor = "") {
  //Atributos
  this.titulo = titulo;
  this.autor = autor;
}

//metodo
Libro.prototype.resumen = function () {
  console.log(
    `En el país de Ingary, donde existen cosas como las botas de siete leguas o las capas de invisibilidad, que una bruja te maldiga no es algo inusual. Cuando la Bruja del Páramo convierte a Sophie Hatter en una anciana, la joven abandona la sombrerería familiar para pedir ayuda en el único lugar mágico que se le ocurre: el castillo ambulante que atemoriza a los habitantes de Market Chipping. Pues dentro no sólo se halla un demonio del fuego, sino también el perverso mago Howl, tan diestro en realizar hechizos como en robar los corazones de las damas.  `
  );
};

//instancia
const libro = new Libro("EL CASTILLO AMBULANTE", "JONES, DIANA WYNNE");
libro.resumen();

// function solution(n = 0) {
//   let suma = 0;
//   for (let i = 0; i < n; i++) {
//     suma += n;
//     console.log(suma);
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
//   console.log(`Hola me llamo ${this.nombre} y mi edad es de ${this.edad} años`);
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
//   console.log(
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

// console.log(`Mi gato se llama ${gatoUno.nombre}`);

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
//   console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
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
//     console.log(
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
//     console.log(
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
//     console.log(
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
//     console.log(
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
//     console.log(
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
//     console.log(
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
