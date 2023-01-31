alert('CARREGANDO O JOGO')

var nome = prompt('Qual é o seu nome?')
alert(`${nome}! SEJA BEM VINDO AO [MENTALISTA].\nTente advinhar entre 0 e 1000 \nVocê terá 15 tentativas para acertar o NÚMERO SECRETO. \nBOA SORTE!`)

var numeroSecreto = parseInt(Math.random() * 1001);
var contador = 15;


while(chute != numeroSecreto) {
  var chute = parseInt(prompt ('Digite um número entre 0 e 1000'))
  if (chute == numeroSecreto) {
    alert (`${nome}![PARABÉNS!] VOCÊ ACERTOU RESTANDO ${contador} TENTATIVAS.\nO NÚMERO SECRETO ERA ${numeroSecreto}.`)
  } else if (chute > numeroSecreto) {
    contador -= 1;
    alert (`${nome}! [ERROU], O NÚMERO É MENOR!\nNÚMERO DE TENTATIVAS RESTANTES: ${contador - 1}.`)
  } else {
    alert (`${nome}! [ERROU], O NÚMERO É MAIOR!\nNÚMERO DE TENTATIVAS RESTANTES: ${contador - 1}.`)
    contador -= 1;
  } 
    if (contador == 0) {
      alert (`[GAME OVER!]\nSUAS TENTATIVAS CHEGARAM A ${contador}!\nBOA SORTE NA PRÓXIMA!`)
      break;
    }
}