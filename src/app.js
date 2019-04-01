const express = require('express');
const app = express();
const path = require('path');
const hbs = require ('hbs');
const bodyParser = require ('body-parser');
require('./helpers');

// esta ruta permite tener accedo a la carpeta node modules
const dirNode_modules = path.join(__dirname , '../node_modules')

// rutas de mdbootstrap
app.use('/css', express.static(dirNode_modules + '/mdbootstrap/css'));
app.use('/js', express.static(dirNode_modules + '/mdbootstrap/js'));


const directoriopublico = path.join(__dirname, '../public' );
const directoriopartials = path.join(__dirname, '../partials' );
hbs.registerPartials(directoriopartials);
app.use(express.static(directoriopublico));
app.use(bodyParser.urlencoded({extended: false}));

app.set ('view engine', 'hbs');

// VISTAS DE USUARIOS
//página de inicio - login
app.get('/', (req, res) =>{
  res.render('index')
});

// página de registro de usuario
app.get('/registro', (req, res) =>{
	res.render('registro')
});

//pagina de registro
app.post('/validaLogin',(req,res) => {
	res.render('validaLogin',{
		cedulau: req.body.cedulau,
		nombre: req.body.nombre
	});
});

// Al hacer un registro o hacer un login me envia a esta vista
//pagina de Home
app.post('/home',(req,res) => {
	res.render('home')
});


// Página de lista de usuarios
app.get('/usuarios', (req, res) =>{
	res.render('usuarios')
});
// VISTAS DE USUARIOS FIN


// luego de hacer el registro de usuario la pagina me lleva a cursos listando cursos disponibles
// MARLON registro
// app.get('/principal',(req,res) => {
// 	res.render('principal')
// })
// FIN MARLON registro

// VISTAS DE CURSOS
// Página de listado de cursos y registro
app.get('/cursos',(req, res) =>{
  res.render('cursos')
});

// Página de Registro de cursos
// Pendiente crear esta vista
app.post('/listacursos',(req,res) => {
	res.render('listacursos',{
		id : req.body.id,
		nombre : req.body.nombre,
		descripcion : req.body.descripcion,
		valor : req.body.valor,
		modalidad : req.body.modalidad,
		intensidad : req.body.intensidad,
		estado : req.body.estado
	});
});
// VISTAS DE CURSOS FIN


// página de error
// pendiente de funcionamiento
app.get('/error', (req, res) =>{
	res.render('error')
});

app.listen(3000, () => {
  console.log ('escuchando en el puerto')
});
