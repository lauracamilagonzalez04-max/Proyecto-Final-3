const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    correo: String,
    password: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);