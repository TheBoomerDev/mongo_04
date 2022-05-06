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
    console.log('OK- Conectado')
    const mAsignatura = require('./asignaturas.model')
    const mAlumno     = require('./alumno.model')
    const mAAlumno    = require('./asignatura_alumno.model')


    const asignAlumno = await mAAlumno.find({}).populate('asignatura')

    const asignaturas = await mAsignatura.find({})

    let asignatura1 = new mAsignatura()
    asignatura1.nombre = 'Lenguaje de Marcas'
    asignatura1 = await asignatura1.save()

    let asignatura2 = new mAsignatura()
    asignatura2.nombre = 'Bases de Datos'
    asignatura2 = await asignatura2.save()

   /*

    // Guardo La asignatura ''Marcas''

    let asignatura =  new mAsignatura()
    asignatura.nombre = 'Marcas'
    asignatura.nota = 5

    // SAVE - Asyncrono
    asignatura.save().then((data)=>{
      // Guardo BIEN
    }).catch((error)=>{
      // Hubo algun error
    })

    // SAVE - Syncrono
    asignatura = await asignatura.save()

   //*/


    // SYNC
    for (let idx = 0; idx < alumnos.length; idx++) {
      let obj = new mAlumno()
      const alumno = alumnos[idx]
      obj.nombre    = alumno.nombre
      obj.apellidos = alumno.apellidos

      let notas   = []
      let notasAA = []
      let asignaturasAlumno = alumno.asignaturas
      for (let idx = 0; idx < asignaturasAlumno.length; idx++) {
        const asignatura = asignaturasAlumno[idx]

        const notaAA = new mAAlumno()

        let nota = {
          asignatura:'',
          nota: asignatura.nota
        }
        notaAA.nota = asignatura.nota

        if (asignatura.nombre === 'Marcas'){
          nota.asignatura   = asignatura1._id
          notaAA.asignatura = asignatura1._id
        }else{
          nota.asignatura   = asignatura2._id
          notaAA.asignatura = asignatura2._id
        }
        notas.push(nota)

        notaAA = await notaAA.save()
        notasAA.push(notaAA)

      }
      obj.asignaturas = notas
      obj.asignatura2 = notasAA

      obj = await obj.save()
      console.log('Alumno', obj)
    }
}

let manejaError = (err) => {
  console.log(err);
}

const database = "mongodb+srv://dev:A.joker.1@dev.kdfi4.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(database)
.then(guardarAlumno)
.catch(manejaError)

//*/


