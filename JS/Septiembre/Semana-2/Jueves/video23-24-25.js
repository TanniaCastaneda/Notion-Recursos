// Ejercicios del dia JUEVES

// Ejercicio 1: Crear una jerarquía de objetos VIDEO 23

// Crea una jerarquía de objetos utilizando la herencia prototípica para representar diferentes tipos de vehículos (por ejemplo, automóviles, bicicletas, motocicletas). Cada tipo de vehículo debe tener propiedades comunes, como la cantidad de ruedas, la velocidad máxima y un método para acelerar. Luego, crea instancias de estos objetos y prueba sus métodos y propiedades.

// function Vehiculos(ruedas = 0, velocidadMaxima = 0) {
//   //Atributos
//   this.ruedas = ruedas;
//   this.velocidadMaxima = velocidadMaxima;
// }

// //metodo
// Vehiculos.prototype.presentacion = function () {
//   console.log(
//     `Tengo ${this.ruedas} ruedas y mi velocidad máxima es de ${this.velocidadMaxima} km`
//   );
// };

// //mis instancias
// const automovilOriginal = new Vehiculos(4, 56);
// automovilOriginal.presentacion();

// Ejercicio 2: Extender objetos existentes VIDEO 23

// Extiende un objeto existente utilizando la herencia prototípica. Por ejemplo, crea un objeto "Animal" con propiedades y métodos comunes para todos los animales, y luego crea objetos específicos para diferentes tipos de animales (por ejemplo, "Perro", "Gato") que hereden de "Animal" y agreguen propiedades y métodos específicos para cada tipo.

// function Animal(nombre = "", dueno = "") {
//   this.nombre = nombre;
//   this.dueno = dueno;
// }

// Animal.prototype.saludar = function () {
//   console.log(`Hola me llamo ${this.nombre} y mi dueño es ${this.dueno}`);
// };

// // aqui voy a crear mi objeto para que hereden de animal empezando por un gato
// // Función constructora para crear un gato y va a herederar las caracteriticas del animal

// // *******************************************************************
// function Gato(nombre = "", dueno = "", sexo = "", color = "") {
//   this.super = Animal;
//   this.super(nombre, dueno);
//   this.sexo = sexo;
//   this.color = color;
// }

// //Gato va a heredar de Animal
// Gato.prototype = new Animal();
// Gato.prototype.constructor = Gato;

// // Aqui voy hacer un metodo que solo tenga Gato, que esta heredando de Animal
// Gato.prototype.ronronear = function () {
//   console.log(
//     `Hola soy un gato y me llamo ${this.nombre} y mi dueño es ${this.dueno}, mi sexo es ${this.sexo}, soy de color ${this.color} y ronroneo por estoy feliz `
//   );
// };

// // *******************************************************************
// // Instancia original
// const animalOriginal = new Animal("Aminshuka", "Marisol");
// // creo la instancia para mi gato
// const gatoUno = new Gato("Luna", "Miguel", "Femenino", "Negro Platinado");
// // llamando a metodo con la instancia original
// animalOriginal.saludar();
// // Llamo a mi método que hice unicamente para gato
// gatoUno.ronronear();
// //Probando que tambien puedo usar el método de Animal en Gato
// gatoUno.saludar();

// console.log(`El color de mi gato es de  ${gatoUno.color}`);

// Ejercicio 2: Extender clases existentes  VIDEO 24

// Extiende una clase existente utilizando la herencia en JavaScript. Por ejemplo, crea una clase "Animal" con propiedades y métodos comunes para todos los animales, y luego crea clases específicas para diferentes tipos de animales (por ejemplo, "Perro", "Gato") que hereden de "Animal" y agreguen propiedades y métodos específicos para cada tipo.

class Animal {
  constructor(nombre = "", dueno = "") {
    this.nombre = nombre;
    this.dueno = dueno;
  }

  saludar() {
    console.log(`Hola me llamo ${this.nombre} y mi dueño es ${this.dueno}`);
  }
}

class Gato extends Animal {
  constructor(nombre = "", dueno = "", sexo = "", color = "") {
    super(nombre, dueno);
    this.sexo = sexo;
    this.color = color;
  }

  ronronear() {
    console.log(
      `Hola soy un gato y me llamo ${this.nombre} y mi dueño es ${this.dueno}, mi sexo es ${this.sexo}, soy de color ${this.color} y ronroneo por estoy feliz `
    );
  }
}

const miMascota = new Animal("Aminsuka", "Marisol"),
  gatito = new Gato("Luna", "Miguel", "Femenino", "Negro Platinado");
miMascota.saludar();
gatito.ronronear();
