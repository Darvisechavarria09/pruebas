//declarando la funcion principal
function principal(user,pass){
    //proceso de la funcion principal
    //se instancia un objecto de la clase PROMESA DE JS
    let promesa=new Promise(function(resolve,reject){
        setTimeout(function(){
            if(user=='darvis09' && pass=='admin123'){
                resolve('Bienvenido')
            }
            else{
                reject('Revisa tus Datos')
            }
        },5000)
    })
    //LA FUNCION PRINCIPAL RETORNA LA PROMESA
    return promesa
}

//llamando a la funcion principal
principal('darvis09','login123')
.then(function(respuesta){
    console.log(respuesta)
})
.catch(function(respuesta){
    console.log(respuesta)
})