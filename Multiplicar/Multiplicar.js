const fs = require('fs'); //declaracion de archivos propios de node
const colors = require('colors'); //llama a la librería instalada de colores para la consola

//resolver como promesa
//module.exports.crearArchivo(base) => { //se puede exportar directamente en la declaracion de la funcion
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) { //valida si la variable es numerica
            reject(`Base ${base} no es un numero`); //se ejecuta el rechazo de la promesa devolviendo el mensaje sin parar la ejecucion
            return; //retorna para finalizar la ejecucion del programa
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            //opcion 1: mensaje basico sin guardado en archivo
            //console.log(`${base} * ${i} = ${base*i}`); //se concatena con backtips

            //opcion 2: informacion almacenada en archivo
            data += (`${base} * ${i} = ${base*i}\n`); //adiciona el texto del loop
        }

        //fs corresponde al paquete para fileSystem
        fs.writeFile(`./tablas/tabla${base}.txt`, data, e => {
            if (e)
                reject(e) //devuelve el error
            else
                resolve(`tabla${base}.txt`.red); //devuelve el nombre del archivo
            //se incluye color rojo segun libreria colors
        });
    });
}

let listarTabla = (base, limite) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`.green);
    }
}

//exportar funciones para utilizar en otro programas
module.exports = {
    crearArchivo,
    listarTabla
    //incluir con comas si existen mas funciones a exportar
}