//convención que el nombre del modelo va con mayúscula

//utilizamos mongoose

const mongoose= require('mongoose')

const Schema = mongoose.Schema

//aqui colocamos el formato que tenemos en la Base de Datos
const characterSchema= new Schema ({
nombre: String,
apellido: String
}, {versionKey:false})

//nombre de la colección y nombre del esquema

module.exports = mongoose.model('characters', characterSchema)