/*
//opcion 1: Normal sin destructuracion
const Multiplicar = require('./Multiplicar/Multiplicar'); //no se incluye extension js por lo redundante se da por entendido

let base = 2;

Multiplicar.crearArchivo(base).then(archivo => console.log(`Nombre de archivo: ${archivo}`));
*/

//opcion 2: Incluye destructuracion en la constante
//la destructuracion indica que necesita la funcion crearArchivo del archivo Multiplicar.js
const { crearArchivo } = require('./Multiplicar/Multiplicar'); //no se incluye extension js por lo redundante se da por entendido

let base = 2;

//la destructuracion permite llamar directamente a la funcion sin anteponer el archivo donde esta creada
crearArchivo(base)
    .then(archivo => console.log(`Nombre de archivo: ${archivo}`))
    .catch(err => console.log(err)); // se captura el error con el catch para evitar los mensajes internos