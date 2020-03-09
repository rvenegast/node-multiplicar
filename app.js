const fs = require('fs'); //declaracion de archivos propios de node

let base = 2;
let data = '';

for (let i = 1; i <= 10; i++) {
    //opcion 1: mensaje basico sin guardado en archivo
    //console.log(`${base} * ${i} = ${base*i}`); //se concatena con backtips

    //opcion 2: informacion almacenada en archivo
    data += (`${base} * ${i} = ${base*i}\n`); //adiciona el texto del loop
}

//fs corresponde al paquete para fileSystem
fs.writeFile(`./tablas/tabla${base}.txt`, data, e => {
    if (e) throw e; //control de errores devuelve el detalle del error
    console.log('Archivo creado'); //si se encuentra correcto arroja el mensaje respectivo
});