let dispositivo = {
    nombre: "gateway",
    nSerie: 123456,
    valor: 1500,
    direccionIpv4:[192,168,10,5],
    estado:false,
    cambiarEstado: function(){
        this.estado=!this.estado,
        console.log(`Estado cambio: ${this.estado}`)
    }

}

dispositivo.valor_2500
console.log(dispositivo)

dispositivo.cambiarEstado()
console.log(dispositivo.estado)

let numeroSerie = dispositivo.nSerie
let nombreDispositivo = dispositivo.nombre

console.log(numeroSerie,nombreDispositivo)

//Extraer informacion de un objeto
//Desctructuracion

let {nSerie,nombre} = dispositivo

console.log(nSerie,nombre)

let Equipo = {
    nombre: "Real Madrid",
    golesFavor: 1,
    golesEnContra: 3,

}

/*golesLocal
golesVisitantes
*/

