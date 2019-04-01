const hbs = require('hbs');
const express = require('express');
const app = express();

//file system
const fs = require('fs');

listaCursos = [];

// Crear curso
hbs.registerHelper('crear', (id, nombre, descripcion, valor, modalidad, intensidad) => {
	listar();
	let curso = {
		idC: id,
		nombreC: nombre,
		descripcionC: descripcion,
		valorC: valor,
		modalidaC: modalidad,
		instensidadC:intensidad,
		estado: "disponible"
	};
	let replica = listaCursos.find(ced => ced.idC == id)
	if (!replica) {
		listaCursos.push(curso);
		console.log(listaCursos);
		guardar();
		console.log('Usuario registrado con exito');
	}
	else
		console.log(`Ya Existe otro estudiante con ese nombre`);
});