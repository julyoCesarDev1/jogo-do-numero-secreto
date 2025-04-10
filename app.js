let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirMensagemInicial()

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
 

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        let palavraTentativa = tentativa > 1? 'tentativas' : 'tentativa';
        let mensagem = `Isso ai! você descobriu o número secreto com ${tentativa} ${palavraTentativa}!`;
        exibirTextoNaTela('h1','Acertou');
        exibirTextoNaTela('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled')
  
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p','O número é menor');
        } else {
            exibirTextoNaTela('p','O número é maior');
        }
    }

     tentativa++
     limparCampo();

}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

 function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio;
    limparCampo()
    tentativa = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
 }











