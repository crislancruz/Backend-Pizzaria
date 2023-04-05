const Produto = require("../model/Produto");

const findProductByIdServices = (id) => {
    return Produto.findById(id);
}
const findAllProductsService = () => {
    return Produto.find();
}

const createProductService = (body) => {
    return Produto.create(body);
}

const updateProductService = (id, body) => {
    return Produto.findByIdAndUpdate(id, body, { returnDocument: "after" });
}

const deleteProductService = (id) => {
    return Produto.findOneAndRemove(id);
}

const addCategoriaProdutoService = (id, categoria) => {
    return Produto.findOneAndUpdate(
        {
            _id : id
        },
        {
            $push: {
                categoria: {
                    _id: categoria._id,
                    createdAt: categoria.createdAt
                },
            },
        },
        {
            rawResult: true,
        }
    );
}

const removeCategoriaProdutoService = (categoria) => {
    return Produto.findOneAndUpdate(
        {
            _id : categoria.id
        },
        {
            $pull: {
                categoria: {
                    _id : categoria.idCategoria,
                }
            }
        },
        {
            rawResult: true,
        }
    );
}



module.exports = {
    findProductByIdServices,
    findAllProductsService,
    createProductService,
    updateProductService,
    deleteProductService,
    addCategoriaProdutoService,
    removeCategoriaProdutoService
}