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

// ...new Set es una expresión en JavaScript que se utiliza para convertir un objeto Set en un arreglo. Un objeto Set es una colección de valores únicos, lo que significa que no permite duplicados. Cuando se utiliza ...new Set, se obtiene una lista de elementos únicos en el orden en que fueron agregados al Set.

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

// const filtrarPares = (numero = []) => {
//   let numerosPares = [];

//   for (let i = 0; i < numero.length; i++) {
//     // console.log(numero[i]);
//     if (numero[i] % 2 === 0) {
//       numerosPares.push(numero[i]);
//     }
//   }

//   return numerosPares;
// };

// console.log(filtrarPares([3, 2, 3, 8]));

//////////////////////////////////////////////////////////////////////////////////////////////

// CURSO JAVASCRIPT 22. PROTOTIPOS

// Un mecanismo por cual un objeto puede heredar de un objeto padre atributos y métodos , es decir funciones

// Una función constructora en JavaScript es una función que se utiliza para crear múltiples objetos con propiedades y métodos comunes. Se define utilizando la palabra clave function seguida de un nombre de función con la primera letra en mayúscula (una convención común para funciones constructoras). Dentro de la función constructora, se definen las propiedades y métodos que se asignarán a los objetos creados a partir de ella utilizando la palabra clave this. Luego, se pueden crear nuevos objetos utilizando la función constructora y el operador new. Cada objeto creado de esta manera heredará las propiedades y métodos definidos en la función constructora.

// 1. Crea una función constructora llamada Persona que acepte dos parámetros: nombre y edad. Luego, agrega un método llamado saludar al prototipo de Persona que imprima en la consola un saludo que incluya el nombre y la edad de la persona. Finalmente, crea una instancia de Persona y llama al método saludar.

// función estructurada
// function Persona(nombre = "", edad = 0) {
//   //Atributos
//   this.nombre = nombre;
//   this.edad = edad;
// }

// //metodo
// Persona.prototype.saludar = function () {
//   console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años`);
// };

// //instancia
// const persona = new Persona("Marisol", 20);

// // console.log(persona);
// persona.saludar();

// 2. Crea una función constructora llamada Producto que acepte dos parámetros: nombre y precio. Luego, agrega un método llamado calcularDescuento al prototipo de Producto que acepte un porcentaje de descuento y calcule el precio con descuento. Crea una instancia de Producto y utiliza el método calcularDescuento para obtener el precio con un 10% de descuento.

//para sacar el porcentaje, se tiene que dividir el porcentaje por 100 y luego se multiplica por el precio original
// https://www.lasexta.com/como-que-cuando/calcular-descuento_2021110361829063ed0d1f00016b17a8.html#:~:text=Divide%20el%20porcentaje%20de%20descuento,saber%20el%20porcentaje%20de%20descuento.

// En el método quiero pasar a mi función un parametro para que este sea el descuento, cómo se hace eso? => si tengo mi function aqui va el nombre(parametro){}

// Ya se como se saca el porcentake, entonces tengo pasar el algo donde guarde el porcentaje pq para sacarlo se tiene que dividir entre 100 y multiplicarlo por el precio original, accedo con this por lo que dejo Jhon Mircha, qué era this? This = hace referencia al objeto

// Bueno lo logico es que ya tengo la cantidad que se descuenta al producto, entoces debo guadarlo donde lo reste al precio original

// función estructurada

// function Producto(nombre = "", precio = 0, gramos = 0) {
//   //Atributos
//   this.nombre = nombre;
//   this.precio = precio;
//   this.gramos = gramos;
// }
// //metodo
// Producto.prototype.calcularDescuento = function (porcentaje) {
//   const descuento = (porcentaje / 100) * this.precio;
//   //   console.log(descuento);
//   const precioConDescuento = this.precio - descuento;
//   console.log(
//     `Tu producto es un ${this.nombre} y tiene el precio de ${this.precio} pesos, pero aplicando el descuento que es ${descuento} pesos entonces tu ${this.nombre} pasa a tener un precio de ${precioConDescuento} pesos, es un producto caro mana y solo tiene ${this.gramos} gramos, un robo `
//   );
// };
// //instancia
// const precioOriginal = new Producto("Kitkat", 200, 41.5);

// // aqui estoy llamando al metodo
// precioOriginal.calcularDescuento(10);

// 3. Crea una función constructora llamada Estudiante que acepte dos parámetros: nombre y edad. Luego, agrega un método llamado esMayorDeEdad al prototipo de Estudiante que determine si el estudiante es mayor de edad (es decir, si su edad es igual o superior a 18). Crea una instancia de Estudiante con un nombre y una edad, y utiliza el método esMayorDeEdad para determinar si es mayor de edad o no.

// function Estudiante(nombre = "", edad = 0) {
//   //Atributos
//   this.nombre = nombre;
//   this.edad = edad;
// }
// //metodo
// Estudiante.prototype.esMayorDeEdad = function () {
//   if (this.edad >= 18) {
//     console.log(
//       `El estudiante ${this.nombre} tiene ${this.edad} años eso significa que es mayor de edad`
//     );
//   } else {
//     console.log(
//       `El estudiante ${this.nombre} tiene ${this.edad} años eso significa que es menor de edad`
//     );
//   }
// };

// //instancia
// const estudiante = new Estudiante("Alicia", 15);

// // aqui estoy llamando al metodo
// estudiante.esMayorDeEdad();

// 4. Clase Circulo: Crea una clase constructora llamada "Circulo" que acepte el radio como parámetro. Agrega un método llamado "calcularArea" al prototipo de Circulo que calcule el área del círculo.

// El área de un círculo es pi multiplicado por el radio al cuadrado (A = π r²).

// function Circulo(radio = 0) {
//   this.radio = radio;
// }

// Circulo.prototype.calcularArea = function () {
//   const newArea = 3.1416 * this.radio ** 2;
//   //   console.log(this.radio)
//   console.log(
//     `Si el radio del circulo es ${this.radio} entonces su área es de ${newArea}`
//   );
// };

// const area = new Circulo(4);

// area.calcularArea();

//5. Clase Empleado: Crea una clase constructora llamada "Empleado" que acepte tres parámetros: nombre, salario mensual y horas trabajadas. Agrega un método llamado "calcularSalarioTotal" al prototipo de Empleado que calcule el salario total de un empleado, teniendo en cuenta las horas extras y un pago adicional por ellas.

// function Empleado(
//   nombre = "",
//   horasTrabajadas = 0,
//   salarioPorHoras = 0,
//   horasExtras = 0
// ) {
//   this.nombre = nombre;
//   this.horasTrabajadas = horasTrabajadas;
//   this.salarioPorHoras = salarioPorHoras;
//   this.horasExtras = horasExtras;
// }
// ss;

// Empleado.prototype.calcularSalarioTotal = function () {
//   const sumaDeSalario = this.salarioPorHoras * this.horasTrabajadas;
//   const salarioMensual =
//     sumaDeSalario + this.salarioPorHoras * this.horasExtras;
//   console.log(
//     `Tu salario es de ${sumaDeSalario} pesos y contado tus horas extras tu salio total es de ${salarioMensual} pesos`
//   );
// };

// const salarioTotal = new Empleado("Marisol", 6, 100, 4);

// salarioTotal.calcularSalarioTotal();
