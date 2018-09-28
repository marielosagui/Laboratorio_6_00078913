function suma(arr){
let cant=arr.length;
if(cant%2==0){
    for (let i=0; i<cant/2-1;i++){
    console.log(arr[i]+arr[cant-i-1]);
    }
}
else{
    for(let i=0; i<Math.floor(cant/2);i++){
        console.log(arr[i]+arr[cant-(1+i)]);
    }
    console.log(arr[Math.floor(cant/2)])
}
return;
}