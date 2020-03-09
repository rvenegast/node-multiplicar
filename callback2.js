//arreglos de empleados, simula tabla de BD
let empleados = [{
    id: 1,
    nombre: 'Rodrigo'
}, {
    id: 2,
    nombre: 'Rocco'
}, {
    id: 3,
    nombre: 'Jocelin'
}];

//arreglo de salarios, simula tabla de BD
let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = (p_id, callback) => {
    //buscar en un arreglo mediante find

    //opcion 1 variable
    /*
    let empleadoDB = empleados.find(p_empleado => {
        return p_empleado.id === id;
    })
    */

    //opcion 2 variable sin return visible
    let empleadoDB = empleados.find(p_empleado => p_empleado.id === p_id) //validar si los valores son iguales con ===

    //opcion 1 mensaje simple
    //console.log(empleadoDB);

    //opcion 2 mensaje
    //se tiende a utilizar la negacion para controlar si no existen los datos buscados
    if (!empleadoDB) {
        callback(`El empleado ${p_id} no existe`);
    } else {
        callback(null, empleadoDB); //el null indica que no existen errores
    }
}

//encontrar salario
let getSalario = (p_empleado, callback) => {
    let salarioEmpleado = salarios.find(p_salario => (p_salario.id === p_empleado.id));

    if (!salarioEmpleado) {
        callback(`Empleado ${p_empleado.nombre} no tiene salario`)
    } else {
        callback(null, { //retorna en tipo estructura de datos
            nombre: p_empleado.nombre,
            salario: salarioEmpleado.salario,
            id: p_empleado.id //dato desde el arrelgo empleados
        })
    }
}

//llamada a la funcion empleados
getEmpleado(3, (err, empleado) => {
    if (err) { //si devuelve un mensaje de error lo retorna
        return console.log(err); //corta ejecucion con el return
    }

    console.log(empleado);

    //llamada a la funcion salarios
    getSalario(empleado, (err, r_salario) => {
        if (err) {
            return console.log(err);
        }

        console.log(r_salario);
        console.log(`El empleado ${empleado.nombre} tiene un salario de ${r_salario.salario}`);
    });
});