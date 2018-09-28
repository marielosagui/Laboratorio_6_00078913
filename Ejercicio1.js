function ocurrencias(numero, arreglo){
    var x=0;
    arreglo.forEach((index) => {
        x+=1;
    });
    console.log("El numero"+ numero+" se repite"+ x+"veces");
}