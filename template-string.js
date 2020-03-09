let nombre = 'Rocco';
let real = 'Rodrigo';

//formas de concatenar
console.log(nombre + ' ' + real);
console.log(`${nombre} ${real}`);
//dentro de los backtips pueden ir comandos de javascript
console.log(`${1+2}`);

let nombreCompleto = nombre + ' ' + real;
let nombreTemplate = `${nombre} ${real}`;

//validar que los string sean identicos mediante === triple igual
console.log(nombreCompleto === nombreTemplate);

//retornar un string
function getNombre() {
    return `${nombreCompleto}`;
}

console.log(`nombre:${getNombre()}`);