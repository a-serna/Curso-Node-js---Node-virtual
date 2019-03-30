const express = require('express');
const app = express();
const path = require('path');
const hbs = require ('hbs');
require('./helpers');

// esta ruta permite tener accedo a la carpeta node modules
const dirNode_modules = path.join(__dirname , '../node_modules')

// rutas de mdbootstrap
app.use('/css', express.static(dirNode_modules + '/mdbootstrap/css'));
app.use('/js', express.static(dirNode_modules + '/mdbootstrap/js'));


const directoriopublico = path.join(__dirname, '../public' );
const directoriopartials = path.join(__dirname, '../partials' );
app.use(express.static(directoriopublico));
hbs.registerPartials(directoriopartials);

app.set ('view engine', 'hbs');

app.get('/', (req, res) =>{
  res.render('index')
})

app.get('/cursos',(req, res) =>{
  res.render('cursos',{
    curso: 'inglés'
  });
});

app.get('/registro', (req, res) =>{
	res.render('registro')
})

app.get('/usuarios', (req, res) =>{
	res.render('usuarios')
})

app.get('/error', (req, res) =>{
	res.render('error')
})

app.listen(3000, () => {
  console.log ('escuchando en el puerto')
});
