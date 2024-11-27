function limitarCoqueteis() {
    const coquetelB = document.getElementById('coquetelB');
    const coquetelP = document.getElementById('coquetelP');

    if (coquetelB.checked) {
        coquetelP.checked = false;
    }
    
    if (coquetelP.checked) {
        coquetelB.checked = false;
    }
}

function calcularValorTotal() {
    const numConvidados = parseInt(document.getElementById("convidados").value);

    const precoMesaFrutas = 10;
    const precoDecoracao = 500;
    const precoDj = 800;

    const name = document.getElementById("nome").value;
    const nameSelecionado = name ? name.value : alert("Digite um nome");

    const email = document.getElementById("gMail").value;
    const emailSelecionado = email ? email.value : alert("Digite um email");
    
    const dtNasci = document.getElementById("dtNasc").value;
    const dtNascSelecionado = dtNasci ? dtNasci.value : alert("Coloque uma data de nascimento");

    const genero = document.querySelector('input[name="Radiosexo"]:checked');
    const generoSelecionado = genero ? genero.value : alert("Selecione um Sexo");

    const opcoesSelecionadas = [];
    const checkboxes = document.querySelectorAll('input[name="tipo[]"]:checked');
    checkboxes.forEach(checkbox => {
        opcoesSelecionadas.push(checkbox.value);
    });

  
    const mesaFrutas = document.getElementById("ckFruta").checked;
    const decoracao = document.getElementById("ckDecoracao").checked;
    const dj = document.getElementById("ckDj").checked;

    
    const jantar = document.getElementById("jantar").checked;
    const coquetelB = document.getElementById("coquetelB").checked;
    const coquetelP = document.getElementById("coquetelP").checked;

    let total = 1000;

    if (mesaFrutas) total += precoMesaFrutas * numConvidados;
    if (decoracao) total += precoDecoracao;
    if (dj) total += precoDj;

    
    if (jantar) total += 80 * numConvidados;
    if (coquetelB) total += 50 * numConvidados;
    if (coquetelP) total += 60 * numConvidados;
    
    document.getElementById("resultado").innerText = `R$ ${total.toFixed(2)}`; //innerText altera o texto visível dentro de um elemento HTML


    const informacoes = document.getElementById("informacoes");
    informacoes.innerHTML = `
                <p>Obrigado ${name} do email ${email}por agentar em nosso buffet.</p>
            `;
}
