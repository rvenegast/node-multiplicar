//llamada a la configuracion del yargs desde otro js
const argv = require('./config/yargs').argv; //.argv indica que necesito solo ese objeto
const { crearArchivo, listarTabla } = require('./Multiplicar/Multiplicar'); //utiliza funcion crearArchivo

console.log(argv);

let comando = argv._[0]; //obtener valor del argumento en posicion 0

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

//ej llamada: node app6 listar -b 6 -l 3