
function sumatriz(matriz1, matriz2){
    matriz3=[];
    for(i=0; i < matriz1.length; i++){
        for(j=0; j< matriz2[i].length;j++){
            matriz3[i][j]=matriz1[i][j] + matriz2[i][j];
        }
    }
    console.log(matriz3);
}