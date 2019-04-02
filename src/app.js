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




app.get('/listacursos', (req, res) =>{
  res.render('listacursos')
});


// Al hacer un registro o hacer un login me envia a esta vista
//pagina de Home




app.get('/cursos',(req,res) => {
	res.render('cursos',{
		estudiante: 'error'
	});
});

app.post('/crearcursos',(req,res) => {
	res.render('crearcursos',{
		id : req.body.id,
		nombre : req.body.nombre,
		descripcion : req.body.descripcion,
		valor : req.body.valor,
		modalidad : req.body.modalidad,
		intensidad : req.body.intensidad

	});
  res.redirect('listacursos');
});


// Página de lista de usuarios

app.post('/usuarios',(req,res) => {
	res.render('usuarios',{
		nombre:req.body.nombre,
		email:req.body.email,
		cedula: req.body.cedula,
		telefono:req.body.telefono

	});
	res.redirect('listarusuario');
});

app.get('/registro',(req,res)=>{
	res.render('registro');
});

app.get('/listarusuario', (req, res) =>{
  res.render('listarusuario')
});




app.post('/home',(req,res) => {
	res.render('home')
});


// VISTAS DE CURSOS
// Página de listado de cursos y registro
// app.post('/cursos',(req, res) =>{
//   res.render('cursos')
// });



//pagina de registro
app.post('/validaLogin',(req,res) => {
	res.render('validaLogin',{
		cedulau: req.body.cedulau,
		nombre: req.body.nombre
	});
});






// Página de Registro de cursos
// Pendiente crear esta vista
// app.post('/listacursos',(req,res) => {
// 	res.render('listacursos',{
// 		id : req.body.id,
// 		nombre : req.body.nombre,
// 		descripcion : req.body.descripcion,
// 		valor : req.body.valor,
// 		modalidad : req.body.modalidad,
// 		intensidad : req.body.intensidad

// 	});
// 	res.redirect('/home');
// });


// VISTAS DE CURSOS FIN


app.get('*',(req,res) => {
	res.render('error',{
		Usuario: 'error'
	});
});


app.listen(5000,() => {
    console.log("escuchando en el 5000");
});
