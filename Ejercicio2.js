function sumaprom(arreglo){
    var suma=0;
    var x=0;
    var prom=0;
    arreglo.array.forEach((index) => {
        suma+= parseInt(index);
        x+=1;
    });
    prom=suma/x;
    console.log(suma);
    console.log(prom);
}