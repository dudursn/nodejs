
const app = require('./src/config/custom-express');

app.listen(3000, 'localhost', function(){
	console.log("Servidor rodando na porta 3000...");
});

