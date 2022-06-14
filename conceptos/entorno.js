// VARIABLES DE ENTORNO
let saludo = "Hola";
console.log(saludo);

let nombre = process.env.NOMBRE || "Sin Nombre"; //crear la variable de entorno
let web = process.env.WEB || "No Tengo Web";

// en la consola, antes de ejecutar el archivo con node:  NOMBRE = "Manuel" WEB = "miweb.com"
console.log(`Hola ${nombre}`);
console.log(`Mi Web es ${web}`);