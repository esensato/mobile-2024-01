document.addEventListener('deviceready', onDeviceReady, false);
// ira armazenar os dados da imagem para envio ao backend
var dadoImagem;

function onDeviceReady() {

    // adicionar o evento de click ao botão Tirar Foto
    document.getElementById('tirarfoto').addEventListener('click', tirarFoto, false);
    // adicionar o evento de click ao botão Enviar Foto
    document.getElementById('enviar').addEventListener('click', enviar, false);

}

function tirarFoto() {
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
    });
}

// imagem capturada com sucesso e armazenada no parametro imageData
function onSuccess(imageData) {
    // a imagem vem codigicada em base64
    dadoImagem = imageData;
    document.getElementById("preview").style.backgroundImage = "url('data:image/jpeg;base64," + imageData + "')";


}

function onFail(mensagem) {
    alert(mensagem)
}

function enviar() {

    // efetuar um post para envio da imagem ao backend
    cordova.plugin.http.setDataSerializer('json');

    cordova.plugin.http.post('https://pedidos-pizzaria.glitch.me/imagem', {
        imagem: "data:image/jpeg;base64," + dadoImagem
    }, {}, function (response) {
        alert(response.status);
    }, function (response) {
        alert(response.error);
    });

}
