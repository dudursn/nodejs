//Módulo que serve para gerar templates HTML
require('marko/node-require').install();

const bodyParser = require('body-parser');

const markoExpress = require('marko/express');

// módulo express para tratar as requisições
const express = require('express');

//Criando server com express
const app = express();

//enable res.marko(template, data)
app.use(markoExpress());

//configura url para tratar arquivos javascript estáticos
app.use('/js', express.static('src/app/public/js'));

//configura url para tratar arquivos css estáticos
app.use('/css', express.static('src/app/public/css'));

//configura url para tratar arquivos com imagens estáticas
app.use('/img', express.static('src/app/public/img'));

//enable body parser
app.use(bodyParser.urlencoded({
	extended: true
}));

//Importa os arquivo de rotas
const rotas = require('../app/routes/routes');

rotas(app);

//Diz para o node que  esse módulo exportará essa constante
module.exports = app;