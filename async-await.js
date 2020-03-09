//ejemplo base: incluyendo async en los parametros utiliza una promesa para devolver el valor
let getNombre = async() => {
    return 'Rodrigo';
}

console.log(getNombre()); //en el resultado indica la promesa

//ejemplo 2: el codigo anterior sería internamente asi para cumplir el async
let getNombre2 = () => {
    return new Promise((resolve, reject) => {
        resolve('Rodrigo 2');
    });
}

console.log(getNombre2());

//ejemplo 3: devuelve el valor utilizando el codigo base getNombre y controlando el error
let getNombre3 = async() => {
    //undefined.nombre; //ejemplo 1 forzar el error y revisar el catch
    //throw new Error('No existe nombre'); //ejemplo 2 forzar error
    return 'Rodrigo 3'
}

//se utiliza then cuando tengo una promesa
getNombre3().then(nombre => { //cuando utiliza el resolve
    console.log(nombre);
}).catch(e => { //cuando utiliza el reject
    console.log('Error de async', e);
})

//ejemplo 4: aplicando async y await
//definicion funcion obtiene nombre 
let getNombre4 = async() => { //funcion que apunta a la promesa
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Rodrigo');
        }, 3000); //en espera por 3 segundos
    });
}

//definicion funcion genera saludo
let saludo = async() => { //funcion debe ser asincrona para poder hacer un await
    let nombre = await getNombre4(); //espera por la respuesta de la funcion 
    return `Hola ${nombre}`;
}

//despliega mensaje de las funciones
saludo().then(mensaje => {
    console.log(mensaje);
});