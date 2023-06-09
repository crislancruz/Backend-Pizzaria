const mongoose = require("mongoose");

const ProdutoSchema = new mongoose.Schema({
    nome: {type: String, unique: true, required: true},
    descricao: {type: String, required: true},
    precoUnitario: {type: Number, required: true},
    imagem: {type: String, required: true},
    codigoBarra: {type: Number, unique: true, required: true},
    categorias: [
        {
            _id: {type: mongoose.Schema.Types.ObjectId, required: true, ref:"categorias"},
            createdAt: {type: Date, required: true, default: Date.now() - 4*60*60*1000 }
        },
    ],
    createdAt: {type: Date, required: true, default: Date.now() - 4*60*60*1000 }
});

const Produto = mongoose.model("produto", ProdutoSchema);

module.exports = Produto;