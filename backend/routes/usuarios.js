const express = require('express');
const router = express.Router();

let usuarios = [];

router.post('/registro', (req, res) => {
    usuarios.push(req.body);

    res.json({
        mensaje: "Usuario registrado"
    });
});

router.get('/', (req, res) => {
    res.json(usuarios);
});

module.exports = router;