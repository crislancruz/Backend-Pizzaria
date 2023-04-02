const mongoose = require("mongoose");
const usuarioSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    senha: {type: String, required: true}, 
    imagem: {type: String, required: true},
    enderecos: [
        {
            logradouro: {type: String, required: true},
            numero: {type: Number, required: true},
            complemento: {type: String, required: false},
            cep: {type: String, required: true},
            createdAt: {type: Date, required: true, default: Date.now()}
        }
    ],
    // produtos_fav: [
    //     {
    //         _id: {type: mongoose.Types.ObjectId, required: true, unique: true, ref: "produtos"},
    //         createdAt: {type: Date, required: true, default: Date.now()}
    //     }
    // ],
    admin: {type: Boolean, required: true, default: false},
    createdAt: {type: Date, required: true, default: Date.now()}
});

const Usuario = mongoose.model("usuarios", usuarioSchema);

module.exports = Usuario;