const mongoose = require("mongoose");

const CategoriaSchema = new mongoose.Schema({
    nome: {type: String, unique: true, required: true},
    descricao: {type: String},
});

const Categoria = mongoose.model("categoria", CategoriaSchema);

module.exports = Categoria;

