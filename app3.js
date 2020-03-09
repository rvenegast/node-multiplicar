//console.log(process.argv); //muestra los parametros recibidos node+js+parametros

//para el ejercicio el comando de ejecucion es
//ej: node app3.js --base=5

let argumentos = process.argv; //almacena todos los parametros recibidos
let parametro = argumentos[2]; //obtiene el tercer argumento donde inician los parametros
let base = parametro.split('=')[1] //split separa los elementos y convierte un string a un arreglo mediante un caracter ej=
    //[0] devuelve el valor anterior al caracter =
    //[1] devuelve el valor posterior al caracter = 

console.log(`Inicia tabla con base ${base}`);

const { crearArchivo } = require('./Multiplicar/Multiplicar'); //no se incluye extension js por lo redundante se da por entendido

//la destructuracion permite llamar directamente a la funcion sin anteponer el archivo donde esta creada
crearArchivo(base)
    .then(archivo => console.log(`Nombre de archivo: ${archivo}`))
    .catch(err => console.log(err)); // se captura el error con el catch para evitar los mensajes internos