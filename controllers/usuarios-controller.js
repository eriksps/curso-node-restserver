const { response } = require('express');

const usuariosGet = (req, res = response) => {

    const {asasas, nombre = 'No name'} = req.query;

    res.json({
        msg: 'Get API Controller',
        asasas,
        nombre
    });
}

const usuariosPut = (req, res) => {

    const id = req.params.id;

    res.json({
        msg: 'Put API Controller',
        id
    });
}

const usuariosPost = (req, res) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'Post API Controller',
        nombre,
        edad
    });

}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'Delete API Controller'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}