//function suma (a, b){
//    return a + b;
//}

//console.log("mi suma es >>>", suma(12, 30))

//const suma = function (a, b){
//    return a + b;
//}
//console.log(">>>", suma (23, 30))

//let array = [
//   {
//        nombre: "soylo"
//    },
//    {
//        nombre: "nacle"
//    },
//]

//const saludarPersonas = (arrayDePersonas) => {
//    array.forEach(persona =>{
//        console.log(
//            "Hola ", persona.nombre
//        )
//    })
//}
//saludarPersonas(array)

//const holaMundo = () => console.log ("Hola mundo!")
//holaMundo ()

//const sumarSaludos = () => {
//   let contador = 0;
//    arrayDePersonas.forEach(() => {
//        let otraPersona = "exequiel"
//        contador ++
//    })
//    console.log (contador)
//}
//sumarSaludos ()

const verificarPositivo = (numero) => {
        if (numero > 0){
            return numero
        } else {
            return -numero
        }
}
console.log (verificarPositivo (-2))