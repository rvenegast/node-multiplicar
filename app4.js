//utilizando yargs para configurar los parametros de entrada
//const argv = require('yargs').argv; //sin "../" indica que es un paquete y no una ruta
const argv = require('yargs')
    .command('listar', 'Imprime la tabla de multiplicar', {
        base: { //base sería el comando que se debe enviar al llamar al programa
            demand: true, //indica que el valor es obligatorio de utilizar en los parametros
            //si no utiliza el comando listar puede pasar correcto
            alias: 'b' //se puede llamar como b sin utilizar la palabra base completa
        },
        limite: {
            alias: 'l',
            default: 10 //si no se envia el valor asume que es 10
        }
    })
    .help() //muestra detalles de ayuda con el comando "node app4 --help"
    .argv; //sin "../" indica que es un paquete y no una ruta

const { crearArchivo } = require('./Multiplicar/Multiplicar'); //utiliza funcion crearArchivo


let argv2 = process.argv; //obtiene los argumentos argv

//console.log(argv); //muestra los parametros enviados listados 
//console.log(argv2); //muestra los parametros enviados listados
console.log(argv.base); //muestra el parametro especifico enviado como base

/*
ejemplo llamadas:

node app4 listar -b 5
node app4 listar -base 5
*/

console.log(argv.limite);
/*
ejemplo llamadas:

node app4 listar -l 15
node app4 listar -limite 15
*/