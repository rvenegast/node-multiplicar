//otra forma de resolver es con promesas a diferencia de los callbacks

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

let getEmpleado = (id) => { //no se envia callbaks
    return new Promise((resolve, reject) => { //resolve y reject pueden ser cualquier nombre pero se mantienen estos por estandar
        let empleadoDB = empleados.find(p_empleado => p_empleado.id === id)

        if (!empleadoDB) {
            reject(`El empleado ${id} no existe`); //reject se aplica cuando se entrega con errores
        } else {
            resolve(empleadoDB); //resolve se aplica cuando se entrega sin errores
        } //solo se envia un parametro, para mas se envia como objeto
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioEmpleado = salarios.find(p_salario => p_salario.id === empleado.id)

        if (!salarioEmpleado) {
            reject(`Empleado ${empleado.nombre} no posee salario`);
        } else {
            //opcion 1 mensaje
            //resolve(`Empleado ${empleado.nombre} tiene salario: ${salarioEmpleado.salario}`);

            //opcion 2 objeto
            resolve({
                nombre: empleado.nombre,
                salario: salarioEmpleado.salario,
                id: empleado.id
            });

            //el resolve y reject se disparan una vez independiente de cuantas veces se llame
        }
    });
}

//forma 1 promesas
getEmpleado(1).then(empleado => { //then funcion para resolver ya sea con resolve o reject
    console.log('Empleado: ', empleado);

    getSalario(empleado).then(r_salario => { //se incluye dentro de la funcion empleado para tener el objeto empleado
        console.log(`Empleado ${r_salario.nombre} tiene salario: ${r_salario.salario}`);
    }, (err) => {
        console.log(err)
    });
}, (err) => { //resolver err para devolver reject
    console.log(err);
});

//forma 2 promesas en cadena
getEmpleado(10).then(r_empleado => { //funcion then para encontrar el empleado
        return getSalario(r_empleado); //el return indica que el siguiente then corresponde a esta promesa
    })
    .then(respuesta => { //funcion then anidada para encontrar el salario
        console.log(`El salario de ${respuesta.nombre} es de ${respuesta.salario}`);
    })
    .catch(err => { //funcion para capturar y controlar el error
        console.log(err);
    });