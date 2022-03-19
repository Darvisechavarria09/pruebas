let nombres=['paloma petro','alvaro cepeda','polo inverso','juanpis gonzales','malefico']
let sexos=['0','1']

let senadores=[]
for (let i=0; i < 20;i++)
{
    let senador={}

    //lenando un objeto{estudiante}
    senador.nombre=nombres[Math.floor(Math.random()*nombres.length)]
    senador.sexo=sexos[Math.floor(Math.random()*sexos.length)]
    senador.votos=Math.floor(Math.random()*1000)
    //agregando el objeto {estudiante} al arreglo [estudiantes]
    senadores.push(senador)
}

function filtrarMujeres(senadores,callback){
    setTimeout(function(){        
        let senadorasFiltradas = senadores.filter(function(senador){
            return(senador.sexo =='0' && senador.votos >250)
        })
        //llamo al callback
        callback(senadorasFiltradas)
    },1000)
}

filtrarMujeres(senadores,function(senadorasFiltradas){
    let sumaVotos = senadorasFiltradas.map(senadora => senadora.votos).reduce((prev, curr) => prev + curr, 0)
    console.log(senadorasFiltradas)
    console.log("la suma de los votos: " + sumaVotos)
})