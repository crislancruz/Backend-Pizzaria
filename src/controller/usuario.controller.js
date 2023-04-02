
const UserService = require("../service/usuario.service");

const findUserByIdController = async (req, res) => {
    try{
        const user = await UserService.findUserByIdService(req.params.id);
        if (!user){
            return res.status(404).send({message: `Usuario não encontrado!`});
        }
        return res.status(200).send(user);

    }catch(err){
        if(err.kind=="ObjectId"){
            return res.status(400).send({message: `ID Informado está incorreto!`});
        }
        console.log(`Erro: ${err.message}`);        
        return res.status(500).send({message: `Erro Inesperado. Tente novamente!`});
    }
};

const findAllUsersController = async (req, res) => {
    try{
        //fazer tratativa pra saber se não retornou vazio
        return res.status(200).send( await UserService.findAllUsersService() );

    }catch(err){
        console.log(`Erro: ${err.message}`);        
        return res.status(500).send({message: `Erro Inesperado. Tente novamente!`});
    }
};

const createUserController = async (req, res) => {
    try{
        // const body = req.body;
        const bodyValido = UserService.isBodyValidService(req.body);
        
        if (!bodyValido){
            return; //já mostrou msg erro referente ao campo e agora apenas retorna. 
        }
        return res.status(201).send( await UserService.createUserService(body) );

    }catch(err){
        console.log(`Erro: ${err.message}`);        
        return res.status(500).send({message: `Erro Inesperado. Tente novamente!`});
    }
};

const updateUserController = async (req, res) => {
    try{
        const bodyValido = UserService.isBodyValidService(req.body);

        if (!bodyValido){
            return; //já mostrou msg erro referente ao campo e agora apenas retorna. 
        }
        return res.send( await UserService.updateUserService(req.params.id, req.body) );

    }catch(err){
        console.log(`Erro: ${err.message}`);        
        return res.status(500).send({message: `Erro Inesperado. Tente novamente!`});
    }
};

const removeUserController = async (req, res) => {
    try{
        const deletedUser = await UserService.removeUserService(req.params.id);

        if (deletedUser.deletedCount > 0){
            return res.status(200).send({message: `Usuário deletado com sucesso`});
        }else{
            return res.status(404).send({message: `Usuário não encontrado!`});
        }

    }catch(err){
        console.log(`Erro: ${err.message}`);        
        return res.status(500).send({message: `Erro Inesperado. Tente novamente!`});
    }
};

const addUserAddressController = async (req, res) => {
    try{

    }catch(err){
        console.log(`Erro: ${err.message}`);        
        return res.status(500).send({message: `Erro Inesperado. Tente novamente!`});
    }
};

const removeUserAddressController = async (req, res) => {
    try{

    }catch(err){
        console.log(`Erro: ${err.message}`);        
        return res.status(500).send({message: `Erro Inesperado. Tente novamente!`});
    }
};

const addUserFavProductController = async (req, res) => {
    try{

    }catch(err){
        console.log(`Erro: ${err.message}`);        
        return res.status(500).send({message: `Erro Inesperado. Tente novamente!`});
    }
};

const removeUserFavProductController = async (req, res) => {
    try{

    }catch(err){
        console.log(`Erro: ${err.message}`);        
        return res.status(500).send({message: `Erro Inesperado. Tente novamente!`});
    }
};

module.exports = {
    findUserByIdController,
    findAllUsersController,
    createUserController,
    updateUserController,
    removeUserController,
    addUserAddressController,
    removeUserAddressController,
    addUserFavProductController,
    removeUserFavProductController
}