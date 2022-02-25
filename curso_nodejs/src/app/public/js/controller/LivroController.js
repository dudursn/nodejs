class LivroController{

	constructor(){
		
	}

	remove(livroId){

		//console.log(livroId);
    	
		fetch(`http://localhost:3000/livros/${livroId}`, { 
				method: 'DELETE' 
			})
            .then(resposta => {

                let tr = document.querySelector(`#livro_${livroId}`);
                tr.remove();

            })
            .catch(erro => console.log(erro));
			
	}

	voltar(route){
		window.location.ref = route;
	}
	
}
