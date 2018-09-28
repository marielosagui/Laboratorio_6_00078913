function type(arreglo){
    var tipo;
    var x=0;
    var array=[];
    arreglo.array.forEach((index) => {
        array.push(typeof(index));
    });
    console.log(array);
}