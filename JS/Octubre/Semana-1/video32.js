// constructor Date
// londres => hora 0, a diferencia de 6 horas a México

// console.log(Date());

// let fecha = new Date();
// console.log(fecha);
// //Día del mes
// console.log(fecha.getDate());
// //Día de semana => Domingo 0, Lunes 1, Martes 2
// console.log(fecha.getDay());
// //Mes = Enero 0, Febrero 1
// console.log(fecha.getMonth());
// //Año, abreviación
// console.log(fecha.getYear());
// //Año, seguro Año
// console.log(fecha.getFullYear());
// //Hora
// console.log(fecha.getHours());
// //Minutos
// console.log(fecha.getMinutes());
// //Segundos
// console.log(fecha.getSeconds());
// //Milesegundos
// console.log(fecha.getMilliseconds());

// console.log(fecha.toString());
// console.log(fecha.toDateString());
// console.log(fecha.toLocaleString());
// console.log(fecha.toLocaleDateString());
// console.log(fecha.toLocaleTimeString());

// console.log(fecha.getTimezoneOffset());
// console.log(fecha.getUTCDate());
// console.log(fecha.getUTCHours());
// // 1970
// console.log(Date.now());

// let cumpleTan = new Date(2003, 11, 5);
// console.log(cumpleTan);

// Objeto Math

// console.log(Math);
// console.log(Math.PI);
// // valor absoluto, cantidad en general sin importar su signo
// console.log(Math.abs(7.8));
// // redondear
// //numero entero mayor
// console.log(Math.ceil(5.4));
// //numero entero menor
// console.log(Math.floor(5.8));
// //el más cercano
// console.log(Math.round(7.2));
// console.log(Math.round(7.5));
// console.log(Math.sqrt(81));
// console.log(Math.pow(7, 2));
// // da referecnai si e sun numero positivo, negatico, 0
// console.log(Math.sign(7.8)); // -1, 0, 1
// console.log(Math.random());
// console.log(Math.random() * 1000);
// console.log(Math.round(Math.random() * 78));

// cortocircuito OR => cuando el valor de la izquierda en la expresion siempre puede valirdar a true, es el valor que carga por defecto

//cortocircuito AND => cuando el valor a la izquierda en la expresión siempre puede validar a false, es el valor que se cargara por defecto

// parametros por defecto

// function saludar(nombre = "Desconocido") {
//   console.log(`Hola ${nombre}`);
// }

function saludar(nombre) {
  nombre = nombre || "Desconocido";
  console.log(`Hola ${nombre}`);
}
saludar("Tannia");
saludar();

console.log(true || "valor de la derecha");
console.log(false || "valor de la derecha");
console.log(0 || "valor de la derecha");

console.log(false && "valor de la derecha");
console.log(0 && "valor de la derecha");
console.log(true && "valor de la derecha");

console.log();
