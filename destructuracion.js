//crear objeto
let persona = {
    nombre: 'Rodrigo',
    apellido: 'Venegas',
    //incluye funcion en un objeto
    getNombre: function() {
        return `nombre:${this.nombre} - apellido:${this.apellido}`
    }
}

//llamar a la funcion del objeto
console.log(persona.getNombre());

//forma 1 de rescatar los valores de las variables del objeto
//let nombre = persona.nombre;
//let apellido = persona.apellido;
//console.log(nombre, apellido);

//forma 2 de rescatar los valores de las variables del objeto
//inicio de destructuracion apuntando a las variables del objeto
//let { nombre, apellido } = persona;
//console.log(nombre, apellido);

//forma 3 de rescatar los valores de las variables del objeto
//en caso que una variable exista con el mismo nombre fuera del objeto se le asigna otro valor
//con destructuracion podemos declarar otras variables apuntando a las variables del objeto
let { nombre: nombreLocal, apellido } = persona;
console.log(nombreLocal, apellido);