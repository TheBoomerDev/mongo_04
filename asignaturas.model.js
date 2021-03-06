const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    nombre: { type: String, default: 'Gollum' },
    nota:{ type: Number, default: 1 }
}
const Esquema = new Schema(schema, params);
const model = mongoose.model('asignatura', Esquema);

module.exports = model