//declarando la funcion principal
function principal(){
    //se instancia un objecto de la clase PROMESA DE JS
    let promesa=new Promise(function(resolve,reject){
        setTimeout(function(){
            //definiendo el proceso de la funcion principal
            console.log('soy el proceso principal')
            //RESUELVO O RECHAZO
            resolve('el proceso del callback (soy el segundo proceso)')
        },2000)
    })
    //LA FUNCION PRINCIPAL RETORNA LA PROMESA
    return promesa
    
}
//llamando la funcion principal (EVALUAR EL ESTADO DE LA PROMESA)
principal()
.then(function(respuesta){
    console.log(respuesta)
})