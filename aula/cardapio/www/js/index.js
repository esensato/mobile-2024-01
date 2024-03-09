document.addEventListener('deviceready', onDeviceReady, false);

//const pizzas = [{ pizza: "Surpresa", preco: "R$ 45,00", imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/9189082f4804c1ab16e77d2cfe8d09d4_XL.jpg" },
//{ pizza: "Marguerita", preco: "R$ 80,00", imagem: "https://i0.statig.com.br/bancodeimagens/3n/0t/fy/3n0tfy3kn0jv6lkafc4cyc41u.jpg" },
//{ pizza: "Frango com Catupiry", preco: "R$ 90,00", imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/ada34cd2101afafaba465aad112ee3c1_XL.jpg" }];

var pizzas;
var idPizza = 0;

// Primeira função executada após o início da app
// Código de inicialização
function onDeviceReady() {
    document.getElementById("direita").addEventListener("click", paginar);
    document.getElementById("esquerda").addEventListener("click", paginar);
    document.getElementById("enviar").addEventListener("click", enviarPedido);
    // carregar os dados do cardapio
    carregarCardapio()
}

// envia os dados do pedido
function enviarPedido() {

    let enderecoPedido = document.getElementById("endereco").value;
    let qtdePedido = document.getElementById("qtde").value;

    cordova.plugin.http.setDataSerializer('json');
    cordova.plugin.http.post('https://pedidos-pizzaria.glitch.me/', {
        pizza: pizzas[idPizza].pizza, quantidade: qtdePedido, endereco: enderecoPedido
    }, {}, function (response) {
        alert(response.status);
    }, function (response) {
        alert(response.error);
    });
}

// carrega os dados das pizzas do backend
function carregarCardapio() {
    cordova.plugin.http.get('https://pedidos-pizzaria.glitch.me/pizzas', {}, {}, function (response) {
        // para converter a resposta em JSON
        pizzas = JSON.parse(response.data);
        atualizarTela();
    }, function (response) {
        alert(response.error);
    });
}

// exibe na tela o nome, preço e imagem da pizza atual
function atualizarTela() {
    let atual = pizzas[idPizza];
    document.getElementById("pizza").innerHTML = atual.pizza;
    document.getElementById("preco").innerHTML = atual.preco;
    //document.getElementById("imagem").style.backgroundImage = "url('" + atual.imagem + "')";
    document.getElementById("imagem").style.backgroundImage = atual.imagem;
}
// navega entre as pizzas do cardápio
function paginar(evt) {

    document.getElementById("esquerda").style.color = 'white';
    document.getElementById("direita").style.color = 'white';
    // evt.target = objeto que gerou o evento
    evt.target.style.color = 'red';

    if (evt.target.id === 'direita') {
        idPizza++;
    } else if (evt.target.id === 'esquerda') {
        idPizza--;
    }
    // evita que seja ocorra navegação fora da quantidade de pizzas
    if (idPizza > pizzas.length) {
        idPizza = 0;
    } else if (idPizza < 0) {
        idPizza = pizzas.length - 1;
    }

    atualizarTela();
}

