//funciones de flecha

//forma 1 normal
function sumar(a, b) {
    return a + b;
}
console.log(sumar(10, 2));

//forma 2 lambda o funcion de flecha
let sumar2 = (a, b) => {
    return a + b;
}
console.log(sumar2(10, 2));

//forma 3 lambda reducida optima
let sumar3 = (a, b) => a + b;
console.log(sumar3(10, 2));

//ejercicio 1 normal
function saludar() {
    return 'Hola Mundo';
}
console.log(saludar());

//ejercicio 1 lambda
let saludar2 = () => 'Hola Mundo';
console.log(saludar2());

//ejercicio 2 normal con parametro
function saludar3(nombre) {
    return `Hola ${nombre}`;
}

console.log(saludar3('Rodrigo'));

//ejercicio 2 lambda con parametro
//se le puede incluir o quitar los parentisis a los parametros
let saludar4 = nombre => `Hola ${nombre}`;
console.log(saludar4('Rodrigo'));