const opts = {
    base: { //base sería el comando que se debe enviar al llamar al programa
        demand: true, //indica que el valor es obligatorio de utilizar en los parametros
        //si no utiliza el comando listar puede pasar correcto
        alias: 'b' //se puede llamar como b sin utilizar la palabra base completa
    },
    limite: {
        alias: 'l',
        default: 10 //si no se envia el valor asume que es 10
    }
}

const argv = require('yargs') // llama a la libreria de yargs
    .command('listar', 'Imprime la tabla de multiplicar', opts)
    .command('Crear', 'Crea una archivo con la tabla de multiplicar', opts)
    .help() //muestra detalles de ayuda con el comando "node app4 --help"
    .argv; //sin "../" indica que es un paquete y no una ruta

module.exports = {
    argv //se exporta solo el objeto argv que se necesita
}