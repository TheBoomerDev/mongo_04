let alumno = {
	"nombre":"",
	"apellidos":"",
	"asignaturas":[
		{"nombre":"Marcas","nota":0},
		{"nombre":"Bases","nota":0}
	]
}

let nombres = ["Iván,Silvosa Rodriguez",
"Daniel,Vázquez Suárez",
"Daniel,Alvariño",
"Eloy,Zas Martinez",
"Iago,Rey Allo",
"Alejandro,Caamaño Guitián",
"Jade,Bocija Rioboo",
"Sandra,Mira Martín",
"Mercedes,Rey Lara",
"César,Carvalhal Tajes",
"Sara Ying, Suarez Blanco",
"Miguel,Cano de Sola",
"Gabriel,Machado Macedo",
"Andrés,Crespo Álvarez",
"Lucía,Silva González",
"Aitor,Ares Montes",
"Antía,López Garcia",
"Roque,Chao Rama"]

function nombreFn(){

}
let nombreFn2 = function (){

}

let alumnos = nombres.map((nombre) => {
  let valores = nombre.split(',')
  let obj = {
    "nombre":valores[0],
		"apellidos":valores[1],
    "asignaturas":[
      {"nombre":"Marcas","nota":0},
			{"nombre":"Bases","nota":0}
    ]
  }
  return obj
})

alumnos = alumnos.map(alumno=>{
  let nota1 = Math.floor(1 + Math.random() * 10);
  let nota2 = Math.floor(1 + Math.random() * 10);
  alumno.asignaturas[0].nota = nota1
  alumno.asignaturas[1].nota = nota2
  return alumno
})
console.log(JSON.stringify(alumnos) )



// ====================================
// https://www.npmjs.com/package/mongoose
const mongoose = require('mongoose');


let guardarAlumno = async ()=>{
    const mAsignatura = require('./asignaturas.model')

    // Guardo La asignatura ''Marcas''

    let asignatura =  new mAsignatura()
    asignatura.nombre = 'Marcas'

    // SAVE - Asyncrono
    asignatura.save().then((data)=>{
      // Guardo BIEN
    }).catch((error)=>{
      // Hubo algun error
    })

    // SAVE - Syncrono
    asignatura = await asignatura.save()




    // SYNC
    for (let idx = 0; idx < alumnos.length; idx++) {
      const alumno = alumnos[idx];
      let asign = new mAsignatura()

      asign.nombre = alumno.nombre
      console.log('Nombre:', alumno.nombre)

      asign = await asign.save()
    }

    for (const alumno of alumnos) {

    }

    // ASYNC - PARALELO
    let salvar = (alumno) => {

    }

    alumnos.forEach(salvar)


}

let manejaError = (err) => {
  console.log(err);
}

const database = "mongodb+srv://dev:A.joker.1@dev.kdfi4.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(database)
.then(guardarAlumno)
.catch(manejaError)

//*/


