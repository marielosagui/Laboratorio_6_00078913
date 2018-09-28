function aleatorio(){
    array=[];
    x=0;
    result;
    for(i=0; i<20;i++){
        array[i]=Math.floor(Math.random()*100);
    }
    result=array[Math.floor(Math.random()*20)];
    while(true){
        x=prompt("Ingrese un numero");
        if(x<result){
            console.log("es muy pequeño");
        }
        if(x==result){
            console.log("es correcto");
            break;
        }
    }
}