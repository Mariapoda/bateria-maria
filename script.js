// Criação das constatantes do som
const sons = {
    'A' : 'boom.wav',
    'S' : 'clap.wav',
    'D' : 'hithat.wav',
    'F' : 'kick.wav',
    'G' : 'openhat.wav',
    'H' : 'ride.wav',
    'J' : 'snare.wav',
    'K' : 'tink.wav',
    'L' : 'tom.wav',

}
//Função para criar uma div para cada tecla
const criarDiv = (texto) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = texto;
    div.id =texto;
    doocument.getElementById('container').appendchild(div);
}

//criar função para botao da tela

const exibir = Object.keys(sons).forEach(criarDiv)

const adicionarEfeito = (letra) => document.getElementById(letra)


exibir(sons);
document.getElementById('container');
