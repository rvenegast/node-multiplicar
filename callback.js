//normal: ejecuta una accion luego de cumplido el tiempo
setTimeout(function() {
    console.log('Hola Mundo');
}, 3000); //3000 = 3 segundos

//lambda: ejecuta una accion luego de cumplido el tiempo
setTimeout(() => console.log('Hola Mundo2'), 3000);

//esto se ejecuta primero debido a al setTimeout anterior
//llamada a una funcion con parametros
let getUsuarioById = (id, callback) => {
    //la funcion devuelve un los datos del usuario si es distinto de 20 segun condicion if

    //crear el objeto dentro de la funcion
    let o_usuario = {
        nombre: 'Rodrigo',
        //id: id esto es remplazado solo por id, iguala al parametro ya que tiene el mismo nombre, en esta nueva version
        id
    }

    //llamar a la funcion callback, puede ser cualquier nombre no necesariamente callback
    if (id == 20) { //simulando que el usuario con id 20 no existe
        callback(`El usuario id ${id} no existe`);
        //callback(300, usuario); //podria enviarse un codigo de error para indicar el problema
    } else {
        callback(null, o_usuario); //se incluye null para indicar que el error no existe
    }
}

//llamada a la funcion
getUsuarioById(10, (err, p_usuario) => { //segundo parametro llama a la linea 23

    if (err) { //valida si existe un error ya que no se controla por defecto sino forzado
        return console.log(err); //se realiza un return para salir de la ejecucion
    }

    console.log('Usuario de BD:', p_usuario); //esto no es concatenacion, solo muestra el objeto
});

//el callback como tal corresponde a que le estoy pasando una funcion y no solo un parametro