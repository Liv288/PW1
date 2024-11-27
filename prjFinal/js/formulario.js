function limitarCoqueteis() {
    var coquetelB = document.getElementById('coquetelB');
    var coquetelP = document.getElementById('coquetelP');

    if (coquetelB.checked) {
        coquetelP.checked = false;
    }
    
    if (coquetelP.checked) {
        coquetelB.checked = false;
    }
}

function calcularValorTotal() {
    var numConvidados = parseInt(document.getElementById("convidados").value);

    
    var precoMesaFrutas = 10;
    var precoDecoracao = 500;
    var precoDj = 800;

  
    var mesaFrutas = document.getElementById("ckFruta").checked;
    var decoracao = document.getElementById("ckDecoracao").checked;
    var dj = document.getElementById("ckDj").checked;

    
    var jantar = document.getElementById("jantar").checked;
    var coquetelB = document.getElementById("coquetelB").checked;
    var coquetelP = document.getElementById("coquetelP").checked;

    let total = 1000;

    if (mesaFrutas) total += precoMesaFrutas * numConvidados;
    if (decoracao) total += precoDecoracao;
    if (dj) total += precoDj;

    
    if (jantar) total += 80 * numConvidados;
    if (coquetelB) total += 50 * numConvidados;
    if (coquetelP) total += 60 * numConvidados;
    
    document.getElementById("resultado").innerText = `R$ ${total.toFixed(2)}`; //innerText altera o texto visível dentro de um elemento HTML
}