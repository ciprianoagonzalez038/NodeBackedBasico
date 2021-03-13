const { response } = require('express');

const usuariosGet = (req, res = response) => {
    const {nombre = 'No Name', q} = req.query;

    res.status(200).json({
        msg: 'get API - controlador',
        nombre,
        q
    })
}

const usuariosPut = (req, res) => {
    const id = req.params.id

    res.json({
        msg: 'put API',
        id
    })
}

const usuariosPost = (req, res) => {
    const {nombre, edad} = req.body;

    res.status(201).json({
        msg: 'p0st API',
        nombre,
        edad
    })
}

const usuariosDelete = (req, res) => {
    res.json({
        ok: true,
        msg: 'delete API'
    })
}

module.exports ={
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
}