const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    asignatura:{
        type: Schema.Types.ObjectId,
        ref: 'asignatura'
    },
    nota:{ type: Number, default: 1 }
}
const Esquema = new Schema(schema, params);
const model = mongoose.model('asignatura_alumno', Esquema);

module.exports = model