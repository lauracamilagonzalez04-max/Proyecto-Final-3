const express = require('express');
const router = express.Router();

let productos = [
    {
        id: 1,
        nombre: "Nike Air Max",
        precio: 450000
    },
    {
        id: 2,
        nombre: "Adidas Forum",
        precio: 390000
    }
];

router.get('/', (req, res) => {
    res.json(productos);
});

router.post('/', (req, res) => {
    productos.push(req.body);
    res.json({
        mensaje: "Producto agregado",
        productos
    });
});

router.put('/:id', (req, res) => {
    res.json({
        mensaje: "Producto actualizado"
    });
});

router.delete('/:id', (req, res) => {
    res.json({
        mensaje: "Producto eliminado"
    });
});

module.exports = router;