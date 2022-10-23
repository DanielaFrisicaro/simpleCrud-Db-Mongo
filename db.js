const mongoose= require('mongoose')
const url = 'mongodb://localhost/south-park'

mongoose.connect(url, {
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true,
   // useFindAndModify: false
})

const db= mongoose.connection
db.on('error', console.error.bind(console, "Error al conectar MongoDB"))
db.once('open', function callback(){
    console.log("Conectado a MongoDb")
})

//Otra forma de mostrar la conexión y el error
/*
.then(()=>console.log('CONECTADO A MONGO'))
.catch((e)=>console.log('El error de conexión es ' + e))
*/


module.exports = db