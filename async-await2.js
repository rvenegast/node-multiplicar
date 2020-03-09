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

//forma 1: utilizando promesa
/*
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
*/
//forma 2: utilizando async
let getEmpleado = async(id) => {
    let empleadoDB = empleados.find(p_empleado => p_empleado.id === id)

    if (!empleadoDB) {
        throw new Error(`El empleado ${id} no existe`); //devuelve el error
    } else {
        return empleadoDB; //retorna respuesta
    }
}

//forma 1: utilizando promesa
/*
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
*/

//forma 2: utilizando async
let getSalario = async(empleado) => {
    let salarioEmpleado = salarios.find(p_salario => p_salario.id === empleado.id)

    if (!salarioEmpleado) {
        throw new Error(`Empleado ${empleado.nombre} no posee salario`); //devuelve el error
    } else {
        return { //retorna respuesta
            nombre: empleado.nombre,
            salario: salarioEmpleado.salario,
            id: empleado.id
        };
    }
}

//funcion retorna los valores de las funciones empleado y salario con async y await
let getInformacion = async(codEmpleado) => {
    let informacionEmpleado = await getEmpleado(codEmpleado);
    let informacionSalario = await getSalario(informacionEmpleado);
    return `${informacionSalario.nombre} tiene un salario de ${informacionSalario.salario}`;
}

//llamada al mensaje que obtiene la informacion
getInformacion(1).then(mensaje => {
    console.log(mensaje);
}).catch(e => { //capturar el error para controlar esos casos donde no posee salario
    console.log(e);
});