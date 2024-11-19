function verNumero(){
    var numero = parseInt(prompt("Digite o número desejado:"));
   
    let inicializador=1;

    while(inicializador<11){
        document.write(numero+"x"+inicializador+"="+(numero*inicializador) + "<br />");
        inicializador=inicializador+1;
    }
}