const { exists, updateOne, update } = require('../models/Character')
const Character = require('../models/Character')


const home = (req, res) => {
    res.render('home')
}

//......................LIST. MOSTRAR.....................................//
const mostrar = (req, res) => {
    Character.find({}, (error, characters) => {
        if (error) {
            return res.status(500).json({
                message: "Error mostrando los characters"
            })//o enviar un mensaje de consola
        }
        //console.log(characters)
        return res.render('list', { characters: characters })//le paso el arreglo characters, que es la colección.
    })
}
const create = (req, res) => {
    res.render('create')
}

const post = (req, res) => {
    // res.render('create')
    const character = new Character({
        nombre: req.body.nombre,
        apellido: req.body.apellido
    })

    character.save(function (error, character) {
        if (error) {
            return res.status(500).json({
                message: "Error al crear character"
            })
        }
        res.redirect('/')
    })
    //console.log(req.body)
}

const editar = (req, res) => {

    Character.findById(req.params._id).then((characters) => {
        res.render('edit', { characters: characters })
    });

    //res.send(req.params._id)
    //console.log(req.params._id)
}


//////

const edicion = (req, res) => {
    // res.send('el boton con put funcionando' + req.params._id)
    //res.send(req.body)
    //res.send(req.params._id)
    //console.log(req.body._id)

    //  console.log('el boton con put funcionando')
    //  console.log(req.body)
    //console.log(req.params)

    const id = req.params._id
    const nombre = req.body.nombre
    const apellido = req.body.apellido
    Character.findByIdAndUpdate(id, { nombre, apellido }, (error, characters) => {
        if (error) {
            return res.status(500).json({
                message: 'Error actualizando el Alumno'
            })
        }
        res.redirect('/')
    })
    //....console.log del Body
    console.log(req.body.nombre)
    console.log(req.body.apellido)
    console.log(req.params._id)

}

const borrar = (req, res) => {
    //res.send('Funcionamiento correcto del boton Borrar')
    //console.log('Funcionamiento correcto del boton Borrar')
    const id = req.params._id
    Character.findByIdAndRemove(id, (error, character) => {
        if (error) {
            return res.status(500).json({
                message: 'Error eliminando el Character'
            })
        }
        res.redirect('/')
    })
}
const detalle = async (req, res) => {
    const id = req.params._id

    // res.send('Probando del Detail del Character' + id )
    const charactersDetail = await Character.findById(id)
    console.log(charactersDetail)
    console.log(charactersDetail.nombre)//no se colocó con llaves del Objeto Literal pero trae la información igual en este caso el "nombre"
    res.render('detail', { charactersDetail })
}

module.exports = { home, mostrar, create, post, editar, edicion, borrar, detalle }