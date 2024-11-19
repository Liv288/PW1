function verPotencia(){
    var base = parseInt(document.getElementById('base').value);
    var expoente = parseInt(document.getElementById('expoente').value);
    let i=0;
    let resultado=1;

    while(i<expoente){
        resultado*=base;
        i++;
    }

    document.write(resultado);
}