const express = require('express');
const app = express();
const path = require('path');
const hbs = require ('hbs');
require('./helpers');

// esta ruta permite tener accedo a la carpeta node modules
const dirNode_modules = path.join(__dirname , '../node_modules')

// rutas de bootstrap y mdbootstrap css
app.use('/css', express.static(dirNode_modules + '/bootstrap/dist/css'));
// app.use('/css', express.static(dirNode_modules + '/mdbootstrap/css/mdb.min.css'));
// rutas de bootstrap y mdbootstrap js
app.use('/js', express.static(dirNode_modules + '/jquery/dist'));
app.use('/js', express.static(dirNode_modules + '/popper.js/dist'));
app.use('/js', express.static(dirNode_modules + '/bootstrap/dist/js'));
// app.use('/js', express.static(dirNode_modules + '/mdbootstrap/js/mdb.min.js'));

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

app.listen(3000, () => {
  console.log ('escuchando en el puerto')
});
