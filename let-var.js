//ejemplo var
var ciudad = 'Concepcion'

if (true) {
    var ciudad = 'Santiago'
}

var ciudad = 'Santiago1'
var ciudad = 'Santiago2'

console.log(ciudad);

//ejemplo let
let pais = 'Chile'

if (true) {
    let pais = 'Brasil'
        //para permitir cambiar el valor dentro de esta sentencia se debe quitar la declaracion
        //pais = 'Brasil'
}

//let no permite volver a inicializar dentro del mismo codigo
//let pais = 'Peru'

console.log(pais);

//ejemplo en ciclos con var
for (var i = 0; i < 5; i++) {
    console.log(`i:${i}`);
}
console.log(i);

//ejemplo en cliclos con let
for (let a = 0; a < 5; a++) {
    console.log(`a:${a}`);
}
//la variable a solo existe dentro del for por lo cual no se puede utilizar fuera de el
//console.log(a);