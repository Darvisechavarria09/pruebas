//datos semilla
let nombres=['juanjo JR','maxi','joao','ronaldo','messi']
let cursos=['Avanzada','Nuevas','Moviles 3']

//numeros aleatorios donde su limite es dado por la longitud del arreglo(semilla)
let numero=Math.floor(Math.random()*nombres.length)
let numero2=Math.floor(Math.random()*cursos.length)

//imprimo un elemento de las semillas de forma aleatoria
/*console.log(nombres[numero])
console.log(cursos[numero2])*/

let estudiantes=[]
for (let i=0; i < 50;i++)
{
    let estudiante={}

    //lenando un objeto{estudiante}
    estudiante.nombre=nombres[Math.floor(Math.random()*nombres.length)]
    estudiante.curso=cursos[Math.floor(Math.random()*cursos.length)]
    //agregando el objeto {estudiante} al arreglo [estudiantes]
    estudiantes.push(estudiante)
}

console.log(estudiantes)