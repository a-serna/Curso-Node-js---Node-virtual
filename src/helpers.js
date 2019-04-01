const hbs = require('hbs');
const express = require('express');
const app = express();

//file system
const fs = require('fs');

listaCursos = [];

hbs.registerHelper('crear', (id, nombre, descripcion, valor, modalidad, intensidad) => {
	listar();
	let curso = {
		idC: id,
		nombreC: nombre,
		descripcionC: descripcion,
		valorC: valor,
		modalidadC: modalidad,
		instensidadC:intensidad,
		estado: "disponible"
	};
	let replica = listaCursos.find(ced => ced.idC == id)
	if (!replica) {
		listaCursos.push(curso);
		console.log(listaCursos);
		guardar();
		console.log('Curso registrado con exito');
	}
	else
		console.log(`Ya Existe otro curso con ese ID`);


});



hbs.registerHelper('listar', () => {
    listaCursos = require('../listaCursos.json')
    let texto = '<table class="table table-sm table-dark">\
	<thead>\
	  <tr>\
		<th scope="col">Id</th>\
		<th scope="col">Nombre</th>\
		<th scope="col">Descripcion</th>\
		<th scope="col">Valor</th>\
   	<th scope="col">Modalidad</th>\
		<th scope="col">Intensidad</th>\
		<th scope="col">Estado</th>\
	  </tr>\
	</thead>\
	<tbody>'

    listaCursos.forEach(curso => {
		texto = `${texto}
        '<tr>'
        <td> ${curso.idC}</td>
        <td> ${curso.nombreC}</td>
        <td> ${curso.descripcionC}</td>
		<td> ${curso.valorC}</td>
		<td> ${curso.modalidadC}</td>
		<td> ${curso.instensidadC}</td>
		<td> ${curso.estado}</td>
    </tr>`
    });
    texto = `${texto}</tbody></table> `
    return texto;
})

const listar = () => {
	try {
	listaCursos = require('../listaCursos.json');
	} catch (error) {
		listaCursos = [];
	}
		
	// listaCursos = JSON.parse(fs.readFileSync('/../src/listaCursos.json'))
}


const guardar = () => {
	//guardamos el array en el archivo json
	let datos = JSON.stringify(listaCursos);
	fs.writeFile('../listaCursos.json', datos, (err) => {
		if (err) throw (err);
		console.log(`Archivo de cursos creado con exito`);
	})
}
//funcion que guarda el usuario en el archivo .json

// hbs.registerHelper('validarLogin', (cedulau, nombre) => {

// 	listar();
// 	let usu_cedula = listaCursos.find(usu => usu.cedulau == cedulau);
// 	let usu_nombre = listaCursos.find(usu => usu.nombre == nombre);
// 	if (!usu_cedula || !usu_nombre) {
// 		return "El usuario con el que intenta ingresar no existe";
// 	} else {
	
// 		console.log("Bienvenido");
		 
// 	}
// });





