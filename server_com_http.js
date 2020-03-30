//Criando servidor com o módulo HTTP

// módulo HTTP importado
const http = require('http');

//Criando o servidor e retornando uma resposta
const server = http.createServer( (req, resp) => {

	let html = '';	

	if(req.url=="/"){
		html = `
			<html>
				<head>
					<meta charset="utf-8">
				</head>
				<body>
					 <h1> Casa do Código </h1>
				</body>
			</html>
		`
	}else if(req.url=="/livros"){
		html = `
			<html>
				<head>
					<meta charset="utf-8">
				</head>
				<body>
					 <h1> Livros </h1>
				</body>
			</html>
		`
	}

	resp.end(html);
})


//Servidor escuta pela porta 3000
server.listen(3000, 'localhost', function(){
	console.log("Servidor rodando na porta 3000...");
});
