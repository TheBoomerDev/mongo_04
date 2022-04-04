const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    nombre   : { type: String, default: 'Gollum' },
    apellidos: { type: String },
    asignaturas:[
        {
            asignatura:{
                type: Schema.Types.ObjectId,
                ref: 'asignatura'
            },
            nota: { type: Number, default: 5 }
        }
    ],
    asignaturas2:[{
        type: Schema.Types.ObjectId,
        ref: 'asignatura_alumno'
    }]
}
const Esquema = new Schema(schema, params);
const model = mongoose.model('alumno', Esquema);

module.exports = model