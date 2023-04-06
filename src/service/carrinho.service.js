const Carrinho = require("../model/Carrinho");

const findCarrinhoByIdService = (id) => {
    return Carrinho.findById(id);
}

const findAllCarrinhosService = () => {
    return Carrinho.find();
}

// verificar se precisa do ID, q tá sendo passado no Controller
const createCarrinhoService = (id, body) => {
    return Carrinho.create(body);
}

const updateCarrinhoService = (id, body) => {
    return Carrinho.findByIdAndUpdate(id, body, { returnDocument: "after" });
}

const deleteCarrinhoService = (id) => {
    return Carrinho.findOneAndRemove(id);
}


module.exports = {
    findCarrinhoByIdService,
    findAllCarrinhosService,
    createCarrinhoService,
    updateCarrinhoService,
    deleteCarrinhoService
}