const CategoriaService = require("../service/categoria.service");

const findCategoriaByIdController = async (req, res) => {
    try{
        res.status(200).send(await CategoriaService.findCategoriaByIdService(req.params.id));
    }catch(err){
        console.log(`Erro: ${err.message}`);        
        return res.status(500).send({message: `Erro Inesperado. Tente novamente!`});
    }
};

const findAllCategoriasController = async (req, res) => {
    try{
        res.status(200).send(await CategoriaService.findAllCategoriasService());
    }catch(err){
        console.log(`Erro: ${err.message}`);        
        return res.status(500).send({message: `Erro Inesperado. Tente novamente!`});
    }
};

const createCategoriaController = async (req, res) => {
    try{
        // Com spready (...) Pega toda inf q o usuario passou, adiciona login e datahora da criação.
        const corpo = {  
            ...req.body,  
            createAt: new Date(),
        }
        res.status(201).send(await CategoriaService.createCategoriaService(corpo));
    
    }catch(err){
        console.log(`Erro: ${err.message}`);        
        return res.status(500).send({message: `Erro Inesperado. Tente novamente!`});
    }
};

const updateCategoriaController = async (req, res) => {
    try{
        res.status(200).send(await CategoriaService.updateCategoriaService(req.params.id, req.body));
    }catch(err){
        console.log(`Erro: ${err.message}`);        
        return res.status(500).send({message: `Erro Inesperado. Tente novamente!`});
    }
};

const deleteCategoriaController = async (req, res) => {
    try{
        res.status(200).send(await CategoriaService.deleteCategoriaService(req.params.id));
    }catch(err){
        console.log(`Erro: ${err.message}`);        
        return res.status(500).send({message: `Erro Inesperado. Tente novamente!`});
    }    
};

module.exports = {
    findCategoriaByIdController,
    findAllCategoriasController,
    createCategoriaController,
    updateCategoriaController,
    deleteCategoriaController
}