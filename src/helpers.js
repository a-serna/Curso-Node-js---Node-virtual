const hbs = require('hbs');
const express = require('express');
const app = express();
//file system
const fs = require('fs');

//  Funciones de los Usuarios
listaUsuarios = [];

hbs.registerHelper('crearU', ( nombre, email, cedula, telefono) => {
	listarU();
	let U = {
		nombre: nombre,
		email: email,
		cedula: cedula,
		telefono: telefono,
		tipo: "aspirante"
	};
	let replica = listaUsuarios.find(ced=> ced.cedU == cedula)
	if (!replica) {
		listaUsuarios.push(U);
		console.log(listaUsuarios);
		guardarU();
		console.log('Usuario registrado con exito');
	}
	else
		console.log(`Ya Existe otro usuario con esa cedula`);


});



hbs.registerHelper('listarUsu', () => {
    listaUsuarios = require('./listaUsuarios.json')
    let texto = '<table class="table table-sm table-dark">\
	<thead>\
	  <tr>\
		<th scope="col">Nombre</th>\
		<th scope="col">Email</th>\
		<th scope="col">Cedula</th>\
   	<th scope="col">Telefono</th>\
		<th scope="col">Tipo Usuario</th>\
	  </tr>\
	</thead>\
	<tbody>'

    listaUsuarios.forEach(usu => {
		texto = `${texto}
        '<tr>'
        <td> ${usu.nombreU}</td>
        <td> ${usu.emailU}</td>
        <td> ${usu.cedulaU}</td>
		<td> ${usu.telefonoU}</td>
		<td> ${usu.tipo}</td>
    </tr>`
    });
    texto = `${texto}</tbody></table> `
    return texto;
})

const listarU = () => {
	try {
	listaUsuarios = require('./listaUsuarios.json');
	} catch (error) {
		listaUsuarios = [];
	}

	// listaCursos = JSON.parse(fs.readFileSync('/../src/listaCursos.json'))
}


const guardarU = () => {
	//guardamos el array en el archivo json
	let datos = JSON.stringify(listaUsuarios);
	fs.writeFile('./listaUsuarios.json', datos, (err) => {
		if (err) throw (err);
		console.log(`Archivo de Usuarios creado con exito`);
	})
}





// Funciones de los cursos


//funcion que guarda el usuario en el archivo .json

// hbs.registerHelper('validarLogin', (cedulau, nombre) => {

// 	listarCursos();
// 	let usu_cedula = listaCursos.find(usu => usu.cedulau == cedulau);
// 	let usu_nombre = listaCursos.find(usu => usu.nombre == nombre);
// 	if (!usu_cedula || !usu_nombre) {
// 		return "El usuario con el que intenta ingresar no existe";
// 	} else {

// 		console.log("Bienvenido");

// 	}
// });
