// Función constructora donde asignamos los métodos al Prototipo, no a la función como tal

function Animal(nombre, genero) {
  //Atributos
  this.nombre = nombre;
  this.genero = genero;
}

//Métodos agregados al prototipo de la función constructora
Animal.prototype.sonar = function () {
  console.log(`Soy ${this.nombre} y hago sonidos por que estoy vivo`);
};

Animal.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre}`);
};

// CURSO JAVASCRIPT 23. HERENCIA PROTOTÍPICA

// Herencia => La cacidad de poder heredar caracteristicas a los hijos
// METODO super que manda a llamar el construtor del elemneto de la clase padre

// Función constructora para crear un perro y va a herederar las caracteriticas del animal
function Perro(nombre, genero, tamanio) {
  this.super = Animal;
  this.super(nombre, genero);
  this.tamanio = tamanio;
}

//Perro esta heredando de animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//Sobreeescritutra de métodos del prototipo padre en el hijo
Perro.prototype.sonar = function () {
  console.log("soy un perro y mi sonido es un ladrido");
};

Perro.prototype.ladrar = function () {
  console.log("Gua Gua Gua");
};

// ****************** */

const snoopy = new Perro("Snoopy", "Macho", "Mediano"),
  lolaBunny = new Animal("Lola Bunny", "Hembra");

console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
snoopy.ladrar();
lolaBunny.saludar();

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

// Ejercicios del dia JUEVES

// Ejercicio 1: Crear una jerarquía de objetos

// Crea una jerarquía de objetos utilizando la herencia prototípica para representar diferentes tipos de vehículos (por ejemplo, automóviles, bicicletas, motocicletas). Cada tipo de vehículo debe tener propiedades comunes, como la cantidad de ruedas, la velocidad máxima y un método para acelerar. Luego, crea instancias de estos objetos y prueba sus métodos y propiedades.

function Vehiculos(ruedas = 0, velocidadMaxima = 0) {
  //Atributos
  this.ruedas = ruedas;
  this.velocidadMaxima = velocidadMaxima;
}

//metodo
Vehiculos.prototype.presentacion = function () {
  console.log(
    `Tengo ${this.ruedas} ruedas y mi velocidad máxima es de ${this.velocidadMaxima} km`
  );
};

//mis instancias
const automovilOriginal = new Vehiculos(4, 56);
automovilOriginal.presentacion();

// Ejercicio 2: Extender objetos existentes

// Extiende un objeto existente utilizando la herencia prototípica. Por ejemplo, crea un objeto "Animal" con propiedades y métodos comunes para todos los animales, y luego crea objetos específicos para diferentes tipos de animales (por ejemplo, "Perro", "Gato") que hereden de "Animal" y agreguen propiedades y métodos específicos para cada tipo.

function Animal(nombre = "", dueno = "") {
  this.nombre = nombre;
  this.dueno = dueno;
}

Animal.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre} y mi dueño es ${this.dueno}`);
};

// aqui voy a crear mi objeto para que hereden de animal empezando por un gato
// Función constructora para crear un gato y va a herederar las caracteriticas del animal

// *******************************************************************
function Gato(nombre = "", dueno = "", sexo = "", color = "") {
  this.super = Animal;
  this.super(nombre, dueno);
  this.sexo = sexo;
  this.color = color;
}

//Gato va a heredar de Animal
Gato.prototype = new Animal();
Gato.prototype.constructor = Gato;

// Aqui voy hacer un metodo que solo tenga Gato, que esta heredando de Animal
Gato.prototype.ronronear = function () {
  console.log(
    `Hola soy un gato y me llamo ${this.nombre} y mi dueño es ${this.dueno}, mi sexo es ${this.sexo}, soy de color ${this.color} y ronroneo por estoy feliz `
  );
};

// *******************************************************************
// Instancia original
const animalOriginal = new Animal("Aminshuka", "Marisol");
// creo la instancia para mi gato
const gatoUno = new Gato("Luna", "Miguel", "Femenino", "Negro Platinado");
// llamando a metodo con la instancia original
animalOriginal.saludar();
// Llamo a mi método que hice unicamente para gato
gatoUno.ronronear();
//Probando que tambien puedo usar el método de Animal en Gato
gatoUno.saludar();

console.log(`El color de mi gato es de  ${gatoUno.color}`);
