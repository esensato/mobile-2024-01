
document.addEventListener('deviceready', onDeviceReady, false);

var celulaSelecionada = "33";

var tabuleiro = [
    [0, 4, 1, 3],
    [2, 0, 1, 3],
    [2, 0, 1, 3],
    [2, 0, 1, 3]];

function onDeviceReady() {

    document.getElementById("00").addEventListener('click', onCelulaClick, false);
    document.getElementById("01").addEventListener('click', onCelulaClick, false);
    document.getElementById("02").addEventListener('click', onCelulaClick, false);
    document.getElementById("03").addEventListener('click', onCelulaClick, false);

    document.getElementById("10").addEventListener('click', onCelulaClick, false);
    document.getElementById("11").addEventListener('click', onCelulaClick, false);
    document.getElementById("12").addEventListener('click', onCelulaClick, false);
    document.getElementById("13").addEventListener('click', onCelulaClick, false);

    document.getElementById("20").addEventListener('click', onCelulaClick, false);
    document.getElementById("21").addEventListener('click', onCelulaClick, false);
    document.getElementById("22").addEventListener('click', onCelulaClick, false);
    document.getElementById("23").addEventListener('click', onCelulaClick, false);

    document.getElementById("30").addEventListener('click', onCelulaClick, false);
    document.getElementById("31").addEventListener('click', onCelulaClick, false);
    document.getElementById("32").addEventListener('click', onCelulaClick, false);
    document.getElementById("33").addEventListener('click', onCelulaClick, false);

    desenharTabuleiro();
}

function desenharTabuleiro() {

    for (let x = 0; x < tabuleiro.length; x++) {
        for (let y = 0; y < tabuleiro[x].length; y++) {
            let cor;
            if (tabuleiro[x][y] === 0) {
                cor = 'red';
            } else if (tabuleiro[x][y] === 1) {
                cor = 'green';
            } else if (tabuleiro[x][y] === 2) {
                cor = 'yellow';
            } else if (tabuleiro[x][y] === 3) {
                cor = 'blue';
            } else {
                cor = 'black';
            }

            document.getElementById("" + x + y).style.backgroundColor = cor;
        }
    }

}

function obterCoordenadas(id) {
    let coordX = id.substring(0, 1);
    let coordY = id.substring(1, 2);

    return { x: coordX, y: coordY };

}

function onCelulaClick(event) {

    let idSelecionado = event.target.id;
    let coordenadasAtual = obterCoordenadas(idSelecionado);
    let corSelecionada = tabuleiro[coordenadasAtual.x][coordenadasAtual.y];

    // indica cor 'black' -> trocar a posição no tabuleiro
    if (corSelecionada === 4) {
        let coordenadasAnterior = obterCoordenadas(celulaSelecionada);
        let corSelecionadaAnterior = tabuleiro[coordenadasAnterior.x][coordenadasAnterior.y];
        if (movimentoValido(coordenadasAnterior, coordenadasAtual)) {
            tabuleiro[coordenadasAtual.x][coordenadasAtual.y] = corSelecionadaAnterior;
            tabuleiro[coordenadasAnterior.x][coordenadasAnterior.y] = 4;
            // atualiza a imagem do tabuleiro na tela
            desenharTabuleiro();
        }

    }

    celulaSelecionada = idSelecionado;

    if (colunaIgual(0) && colunaIgual(1) && colunaIgual(2) && colunaIgual(3)) {
        document.getElementById("mensagem").innerHTML = "Você Ganhou!!!!";
    }

}

// movimento somente é valido quando for um vizinho
// não pode ser vizinho na diagonal
function movimentoValido(origem, destino) {

    let xOrigem = origem.x;
    let yOrigem = origem.y;

    let xDestino = destino.x;
    let yDestino = destino.y;

    return (Math.abs(xOrigem - xDestino) + Math.abs(yOrigem - yDestino) === 1)

}

function colunaIgual(idColuna) {

    let x = 0;
    let idCor = tabuleiro[x][idColuna];

    if (idCor === 4) {
        x = 1;
        idCor = tabuleiro[x][idColuna];
    }

    for (; x < tabuleiro.length; x++) {

        if (tabuleiro[x][idColuna] !== idCor) {
            return false;
        }
    }

    return true;
}

