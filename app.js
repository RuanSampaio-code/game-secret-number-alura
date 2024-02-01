
let listaNumerosSorteados = [];  
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0; 

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function exibirMensagemInicial() {
        
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

   
}

exibirMensagemInicial();

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

//veririficar se o numero é o sorteado
function verificarChute() {
    let chute = document.querySelector('input').value

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'acertou!')
        
        //validação de palavra tentativa no plural
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `voce descobriu o  numero secreto em ${tentativas +1} ${palavraTentativa}`

        exibirTextoNaTela('p', mensagemTentativas)
        
        //removendo atributo de um botao
        document.getElementById('reiniciar').removeAttribute('disabled')
        
        //dica se o numero é maior ou menor
    } else{
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'o numero secreto é menor do que o chute');
        } else{
            exibirTextoNaTela('p', 'o numero secreto é maior do que o chute');
        }
        exibirTextoNaTela('h1', 'error!') ;  

        //limpando campo
        limparCampo()

        //quantidade de tentantivas 
        tentativas++;
    }
}


//função para gerar numero aletorio
function gerarNumeroAleatorio() {
    //numero random entre 0 e 3
    let numerEscolhido = parseInt(Math.random() * numeroLimite + 1);

    let quantidadeDeElementos = listaNumerosSorteados.length;

    if (quantidadeDeElementos == numeroLimite ) {
        listaNumerosSorteados = []
    }

    //verirfico se o numero sorteado esta no array
    if (listaNumerosSorteados.includes(numerEscolhido)) {
        return gerarNumeroAleatorio();
        
    }else {
        listaNumerosSorteados.push(numerEscolhido)
        console.log(listaNumerosSorteados)
        return numerEscolhido; 
    }
}

function limparCampo(params) {
    chute = document.querySelector('input');
    chute.value = '';
}


function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();

    //setando o status de campo para desabilitdo
    document.getElementById('reiniciar').setAttribute('disabled',true )
}










