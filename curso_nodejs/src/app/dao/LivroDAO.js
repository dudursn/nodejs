class LivroDAO {

	constructor(db){
		this._db = db;
	}

	findById(id){

		return new Promise( (resolve, reject) => {

			this._db.get(
				`SELECT * FROM livros WHERE id = (?)`,
				id,
				(erro, resultado) => {
					if(erro){
						return reject('Erro. Não foi possível retornar a consulta');
					}
					return resolve(resultado);
				}
					
			);
		});

	}

	findByTitulo(titulo){

		return new Promise( (resolve, reject) => {

			this._db.all(
				`SELECT * FROM livros WHERE titulo LIKE (?)`,
				[`%${titulo}%`],
				(erro, resultado) => {
					if(erro){
						return reject('Erro. Não foi possível retornar a consulta');
					}
					return resolve(resultado);
				}
					
			);
		});

	}

	findAll(){

		return new Promise( (resolve, reject) => {

			this._db.all(
				'SELECT * FROM livros',
				(erro, resultado) => {
					if(erro){
						return reject('Erro. Não foi possível retornar a consulta');
					}
					return resolve(resultado);
				}
					
			);
		});

	}

	save(obj){

		return new Promise( (resolve, reject) => {

			this._db.run(`
				INSERT INTO livros (
					titulo,
					preco,
					descricao
				) VALUES (?, ?, ?)`,

				[
					obj.titulo,
					obj.preco,
					obj.descricao
				],

				(err) => {
					if(err){
						return reject('Erro. Não foi possível retornar a consulta');
					}
					return resolve();
				}
			);

		});

	}

	update(obj){

		return new Promise( (resolve, reject) => {

			this._db.run(`
				UPDATE livros SET
					titulo = (?),
					preco = (?),
					descricao = (?)
				WHERE id = (?)`,

				[
					obj.titulo,
					obj.preco,
					obj.descricao,
					obj.id
				],

				(err) => {
					if(err){
						return reject('Erro. Não foi possível retornar a consulta');
					}
					return resolve();
				}
			);

		});

	}

	delete(id){

		return new Promise( (resolve, reject) => {

			this._db.run(`
				DELETE FROM livros 
					WHERE id =(?)
				`,
					id
				,

				(err) => {
					if(err){
						console.log(err);
						return reject('Erro. Não foi possível deletar o elemento');
					}
					return resolve();
				}
			);

		});

	}

}

module.exports = LivroDAO;