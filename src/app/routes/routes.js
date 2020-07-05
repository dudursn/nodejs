//Acesso ao banco de dados
const db = require('../../config/database');

//Classe DAO de Livro
const LivroDAO = require('../dao/LivroDAO');

//Diz para o node que  esse módulo exportará essa função
module.exports = (app) => {

	//Home
	app.get('/', (req, resp) => {
		resp.send(`
			<html>
				<head>
					<meta charset="utf-8">
				</head>
				<body>
					 <h1> Casa do Código </h1>
				</body>
			</html>
		`)
		
	});

	//Listar
	app.get('/livros', (req, resp) => {

		
		let livroDAO = new LivroDAO(db);

		//Promise
		livroDAO.findAll()
			.then( livros => {
				
				resp.marko(
					require('../views/livros/list/list.marko'),
					{ livros: livros}
				);
				/*
				resp.json({
					"message": "success",
					"data": livros
				})
				*/

			})
			.catch( erro =>
				console.log(erro)
			);
	});

	//Formulário cadastro
	app.get('/livros/form', (req, resp) => {
		resp.marko(
			require('../views/livros/form/form.marko'),
			{ livro: {id: 0, titulo: '', preco: '', descricao: ''} }
		);
	});

	//Formulário editar
	app.get('/livros/form/:id', (req, resp) => {

		const id = req.params.id;
    	console.log(id);
	    const livroDao = new LivroDAO(db);
	   	livroDao.findById(id)
	   		.then(livro => {
	   			console.log('==>'+livro);
	   			resp.marko(
					require('../views/livros/form/form.marko'),
					{ livro: livro }
				);
	   		})
	   		.catch( erro => {
				console.log(erro);
				resp.redirect('/livros');
			});
		
	});

	//Salvar
	app.post('/livros', (req, resp) =>{

		let livroDAO = new LivroDAO(db);

		if(req.body.id == 0){
			//Promise
			livroDAO.save(req.body)
			.then(
				resp.redirect('/livros')
			)
			.catch( erro =>
				console.log(erro)
			);
		}else{
			//Promise
			livroDAO.update(req.body)
			.then(
				resp.redirect('/livros')
			)
			.catch( erro =>
				console.log(erro)
			);
		}
		
	})

	//Deletar
	app.delete('/livros/:id', function(req, resp) {

    	const id = req.params.id;
    	console.log(id);
	    const livroDao = new LivroDAO(db);
	    livroDao.delete(id)
	        .then(() => 
	        	resp.status(200).end()
	        )
	        .catch(erro => console.log(erro));

	});

	//Pesquisar por titulo
	app.post('/livros/pesquisar/', (req, resp) =>{

		let livroDAO = new LivroDAO(db);
		livroDAO.findByTitulo(req.body.titulo)
			.then(livros => {
				resp.marko(
					require('../views/livros/list/list.marko'),
					{ livros:livros }
				)
			})
			.catch(erro => {
				console.log(erro);
				resp.redirect('/livros');
			});
		
	});
};
