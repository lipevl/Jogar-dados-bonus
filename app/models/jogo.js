function Jogo(dados = 5, lados = 6){
	
	console.log('model: executar construtor de Jogo');
	this.dados = dados;
	this.lados = lados;
	this.pontos = 0;
	this.n = 0;
	this.bonus = 0;	
	this.mensagem = "";

}

Jogo.prototype.novoJogo = function(){
console.log('model: novoJogo');
this.pontos = 0;
this.n = 0;

}

Jogo.prototype.lancarUmDado = function(){
	var valorAleatiorio = Math.random(); // No intervalo [0,1]
	// De [0,1) * 5 => [0,6)
	// Usando Math.floor temos [0,1,2,3,4,5]
	//Somando uma unidade temos [1,2,3,4,5,6]
	var lado = 1 + Math.floor(valorAleatiorio * this.lados);
	return lado;
}

Jogo.prototype.lancarDados = function(){
	console.log('model: lancarDados');
	var lancamento = []
	for (var i = 0; i < this.dados; i++) {
		lancamento[i] = this.lancarUmDado();
	}

	return lancamento;
}

Jogo.prototype.contarDados = function(lancamento){
	var contagem = Array(this.lados).fill(0);
	for (var i = 0; i < lancamento.length; i++) {
		var numero = lancamento[i];
		contagem[numero-1] += 1;
	}

	return contagem;
}

const GENERALA = { jogo : 'Generala', pontos : 100 }
const POKER = { jogo : 'POKER', pontos : 50 }
const FULL = { jogo : 'Full', pontos : 30 }
const DIAMANTE = { jogo : 'DIAMANTE', pontos : 500 }
const OURO = { jogo : 'OURO', pontos : 250 }
const PRATA = { jogo : 'PRATA', pontos : 100 }
const BRONZE = { jogo : 'BRONZE', pontos : 30 }
const NADA = { jogo : 'Nenhum', pontos : 0 }

Jogo.prototype.analisarLancamento = function(lancamento){

	var contagem = this.contarDados(lancamento);
	var recebe = this.n;
	var resultado;

	if (contagem.find(e => e === 5) ){
		resultado = GENERALA;
	}

	else if (contagem.find(e=> e === 4) ){
		resultado = POKER;
	}

	else if (recebe == 29){
		resultado = BRONZE;
	}

	else if (recebe == 99){
		resultado = PRATA;
	}

	else if (recebe == 249){
		resultado = OURO;
	}

	else if (recebe == 499){
		resultado = DIAMANTE;
	}

	else if (contagem.find(e => e === 3) && contagem.find(e=> e ===2) ){
		
	    	resultado = FULL;
            
	    }
	    
	   
	else{ 
		  resultado = NADA;
    }

    

// Bronze

if (recebe == 29) {



this.mensagem = "Parabéns, você chegou a liga bronze e ganhou 30 pontos!";
}


else if (recebe == 99) {



this.mensagem = "Parabéns, você chegou a liga prata e ganhou 100 pontos!";

}


else if (recebe == 249) {


this.mensagem = "Parabéns, você chegou a liga ouro e ganhou 250 pontos!";

}

else if (recebe == 499) {



this.mensagem = "Parabéns, você chegou a liga diamante e ganhou 500 pontos!";

}



	//
	return resultado;

}

//


Jogo.prototype.novoLancamento = function(){

	console.log('model: novoLancamento');
	var lancamento = this.lancarDados();
	console.log('model: analiseLancamento');
	var analiseLancamento = this.analisarLancamento(lancamento);
	this.pontos += analiseLancamento.pontos;
	this.n += 1;
	console.log('model: prepara resultado');

	var resultado = {
		pontosAcumulados : this.pontos,
		nLancamentos : this.n,
		bonus : this.bonus,
		mensagem : this.mensagem,
		lancamento : lancamento,
		jogoLancamento : analiseLancamento.jogo,
		pontosLancamento : analiseLancamento.pontos

	};

	return resultado;
}


jogo = new Jogo();
lancamento = jogo.lancarDados();
contagem = jogo.contarDados(lancamento);
resultado = jogo.analisarLancamento(lancamento);

console.log('dados sorteados: ', lancamento );
console.log('contagem: ', contagem);
console.log('analise do lancamento: ', resultado);


module.exports.Jogo = Jogo;