// Función constructora donde asignamos los métodos al Prototipo, no a la función como tal

// function Animal(nombre, genero) {
//   //Atributos
//   this.nombre = nombre;
//   this.genero = genero;
// }

// //Métodos agregados al prototipo de la función constructora
// Animal.prototype.sonar = function () {
//   console.log(`Soy ${this.nombre} y hago sonidos por que estoy vivo`);
// };

// Animal.prototype.saludar = function () {
//   console.log(`Hola me llamo ${this.nombre}`);
// };

// CURSO JAVASCRIPT 23. HERENCIA PROTOTÍPICA

// Herencia => La cacidad de poder heredar caracteristicas a los hijos
// METODO super que manda a llamar el construtor del elemneto de la clase padre

// Función constructora para crear un perro y va a herederar las caracteriticas del animal
// function Perro(nombre, genero, tamanio) {
//   this.super = Animal;
//   this.super(nombre, genero);
//   this.tamanio = tamanio;
// }

// //Perro esta heredando de animal
// Perro.prototype = new Animal();
// Perro.prototype.constructor = Perro;

// //Sobreeescritutra de métodos del prototipo padre en el hijo
// Perro.prototype.sonar = function () {
//   console.log("soy un perro y mi sonido es un ladrido");
// };

// Perro.prototype.ladrar = function () {
//   console.log("Gua Gua Gua");
// };

// // ****************** */

// const snoopy = new Perro("Snoopy", "Macho", "Mediano"),
//   lolaBunny = new Animal("Lola Bunny", "Hembra");

// console.log(snoopy);
// console.log(lolaBunny);

// snoopy.sonar();
// snoopy.ladrar();
// lolaBunny.saludar();

// Función Constructora y Herencia Prototípica:

// Crea una función constructora llamada Vehiculo que toma dos parámetros, marca y modelo, y crea objetos que tienen propiedades marca y modelo. Luego, agrega un método llamado informacion al prototipo de Vehiculo que devuelve una cadena de texto con la información del vehículo (por ejemplo, "Marca: Toyota, Modelo: Camry").

// A continuación, crea una función constructora llamada Coche que toma un tercer parámetro, color, y hereda las propiedades y métodos de Vehiculo. Los objetos creados a partir de Coche deben tener las propiedades marca, modelo, color, y el método informacion heredado.

// // function Vehiculo(marca = "", modelo = "") {
// //   this.marca = marca;
// //   this.modelo = modelo;
// // }

// // Vehiculo.prototype.informacion = function () {
// //   console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
// // };

// // function Coche(marca = "", modelo = "", color = "") {
// //   this.super = Vehiculo;
// //   this.super(marca, modelo);
// //   this.color = color;
// // }

// // //El coche esta heredando de vehiculo
// // Coche.prototype = new Vehiculo();
// // Vehiculo.prototype.constructor = Vehiculo;

// // //Sobreeescritutra de métodos del prototipo padre en el hijo
// // Coche.prototype.informacionAdicional = function () {
// //   console.log(
// //     `Marca: ${this.marca}, Modelo: ${this.modelo}, Color : ${this.color}`
// //   );
// // };

// // const Vehiculo1 = new Vehiculo("Toyota", "Camry"),
// //   Vehiculo2 = new Coche("Toyota", "Camry", "Morado");

// // Vehiculo1.informacion();
// // Vehiculo2.informacionAdicional();

// CURSO JAVASCRIPT 24. CLASES Y HERENCIA
// CURSO JAVASCRIPT 25.

// las clases ya no usan parametros

// function Animal(nombre, genero) {
//   // atributos
//   this.nombre = nombre;
//   this.genero = genero;
// }

// El constructor es un métoo especial que se ejecuta en el momento de instanciar la clase
// los métodos si pueden recibir parametros en caso de necesitarlos
//El método super() se manda a llamar el constructir de la clase padre

// class Animal {
//   constructor(nombre, genero) {
//     //atributos
//     this.nombre = nombre;
//     this.genero = genero;
//     this.raza = null; //para método setters y getters
//   }
//   //Métodos
//   sonar() {
//     console.log("Hago sonidos por que estoy vivo");
//   }

//   saludar() {
//     console.log(`Hola me llamo ${this.nombre}`);
//   }
// }

// class Perro extends Animal {
//   constructor(nombre, genero, tamanio) {
//     super(nombre, genero);
//     this.tamanio = tamanio;
//   }

//   sonar() {
//     console.log("Soy un perro y mi sonido es un ladrido");
//   }

//   ladrar() {
//     console.log("GUA GUA GUAAAAA");
//   }

//   //un método estático se pueden ejectutar sin necesidad de instanciar la clase
//   static queEres() {
//     console.log("Somos animales mamíferos");
//   }

//   //Setters y getters => son métodos especiales que nos permiten establecer y obtener los valores de atrnitus de nuestra clase

//   get getRaza() {
//     return this.raza;
//   }
//   set setRaza(raza) {
//     this.raza = raza;
//   }
// }

// Perro.queEres();

// // Esto es una instancia
// const mimi = new Animal("Mimi", "Hembra"),
//   scooby = new Perro("Scooby", "Macho", "Gigante");

// console.log(mimi);
// mimi.saludar();
// mimi.sonar();
// console.log(scooby);
// scooby.saludar();
// scooby.sonar();
// scooby.ladrar();
// console.log(scooby.getRaza);
// scooby.setRaza = "Grán Danés";
// console.log(scooby.getRaza);
