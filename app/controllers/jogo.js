/*
Controller jogo:
Responsável por:
-mantar uma instância do model
-Pedir ao model para iniciar o jogo
-Pedir ao model para lançar os dados
-Pedir ao model para encerrar o jogo
-Pedir ao model para iniciar um novo jogo
*/


var jogoModel = undefined;

module.exports.iniciar = function (application, req, res) {
	console.log('controller: iniciar');
	console.log('controller: cria instância de jogo ');
	jogoModel = new application.app.models.jogo.Jogo();
	console.log('controller: atualiza view - novoJogo');
	res.render('novoJogo');

}

module.exports.novoLancamento = function(application, req, res){
	console.log('controller: novoLancamento');
	if (jogoModel) {
		console.log('controller: pede para o model fazer novolancamento');
		var resultado = jogoModel.novoLancamento();

		res.render('novoLancamento', resultado );
	}

}




module.exports.reiniciar = function(application, req, res){
console.log('controller:reiniciar');
if (jogoModel){
console.log('controller: pede para o model criar um novo jogo');
jogoModel.novoJogo();
console.log('controller atualizar a view');
res.render('novoJogo');
}else{
console.log('controller: atualizar a view para página principal');
res.render('home');
}
}

function salvarPontuacao(application, pontos){
	// criar query de insercao
	

}

module.exports.encerrar = function(application, req, res){
console.log('controller:encerrar');
salvarPontuacao(application, jogoModel.pontos);

jogoModel = undefined;
res.render('home');

}
