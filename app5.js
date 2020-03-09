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
    .command('Crear', 'Crea una archivo con la tabla de multiplicar', {
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

const { crearArchivo, listarTabla } = require('./Multiplicar/Multiplicar'); //utiliza funcion crearArchivo

console.log(argv);

let comando = argv._[0]; //obtener valor del argumento en posicion 0

//ej: node app5 crear --base 10, devuelve la opcion "crear"
//ej: node app5 listar --base 6 --limite 3, devuelve la opcion "listar"

switch (comando) {
    case 'listar':
        console.log(`Listar tabla base: ${argv.base}`);
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        console.log(`Crear archivo base: ${argv.base}`);
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}