const ProdutoService = require("../service/produto.service");

const findProductByIdController = async (req, res) => {
    try{
        res.send(await ProdutoService.findProductByIdServices(req.params.id));
    }catch(err){
        console.log(`Erro: ${err.message}`);        
        return res.status(500).send({message: `Erro Inesperado. Tente novamente!`});
    }
}
const findAllProductsController = async (req, res) => {
    try{
        res.send(await ProdutoService.findAllProductsService());
    }catch(err){
        console.log(`Erro: ${err.message}`);        
        return res.status(500).send({message: `Erro Inesperado. Tente novamente!`});
    }
}

const createProductController = async (req, res) => {
    try{
        // Com spready (...) Pega toda inf q o usuario passou, adiciona login e datahora da criação.
        const corpo = {  
            ...req.body,  
            userId: req.userId,
            createAt: new Date(),
        }

        res.send(await ProdutoService.createProductService(corpo));

    }catch(err){
        console.log(`Erro: ${err.message}`);        
        return res.status(500).send({message: `Erro Inesperado. Tente novamente!`});
    }
}

const updateProductController = async (req, res) => {
    try{
        res.send(await ProdutoService.updateProductService(req.params.id, req.body));
    }catch(err){
        console.log(`Erro: ${err.message}`);        
        return res.status(500).send({message: `Erro Inesperado. Tente novamente!`});
    }
}

const deleteProductController = async (req, res) => {
    try{
        res.send(await ProdutoService.deleteProductService(req.params.id));
    }catch(err){
        console.log(`Erro: ${err.message}`);        
        return res.status(500).send({message: `Erro Inesperado. Tente novamente!`});
    }
}

module.exports = {
    findProductByIdController,
    findAllProductsController,
    createProductController,
    updateProductController,
    deleteProductController
}