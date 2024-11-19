function verSequencia(){
    numero = parseInt(document.getElementById('numero').value);
    let i=1;
    let first=0;
    let seg=1;
    let prox=0;

    while(i<numero){
        document.write(first+ " ");

        prox = first+ seg;
        first = seg;
        seg = prox;
        i++;
    }
}