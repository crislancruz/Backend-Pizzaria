
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

        return res.status(200).send( await UserService.findAllUsersService(req.query.limit, req.query.offset));

    }catch(err){
        console.log(`Erro: ${err.message}`);        
        return res.status(500).send({message: `Erro Inesperado. Tente novamente!`});
    }
};


const createUserController = async (req, res) => {
    try{
        const user = await UserService.findUserByEmail(req.body.email);

        if (!user){
            return res.status(201).send(await UserService.createUserService(req.body));
        }else{
            //if achar email na base - --> msg já existe cadastro para este email
            return res.status(400).send({message: `Já existe cadastro para este email!`});
        }
    }catch(err){
        console.log(`Erro: ${err.message}`);        
        return res.status(500).send({message: `Erro Inesperado. Tente novamente!`});
    }
};


const updateUserController = async (req, res) => {
    try{
         return res.send( await UserService.updateUserService(req.params.id, req.body) );
    }catch(err){
        console.log(`Erro: ${err.message}`);        
        return res.status(500).send({message: `Erro Inesperado. Tente novamente!`});
    }
};


const removeUserController = async (req, res) => {
    try{
        const deletedUser = await UserService.removeUserService(req.params.id);

        if (deletedUser == null){
            return res.status(404).send({message: `Usuário não encontrado!`});
        }else{
            return res.status(200).send({message: `Usuário deletado com sucesso`});
        }

    }catch(err){
        console.log(`Erro: ${err.message}`);        
        return res.status(500).send({message: `Erro Inesperado. Tente novamente!`});
    }
};


const addUserAddressController = async (req, res) => {
    try{
        const endereco = await UserService.addUserAddressService(req.params.id, req.body);

        if (endereco.value == null){
            return res.status(400).send({message: `Algo deu errado na adição do Endereço!`});
        }else{
            return res.status(201).send({message: `Endereço adicionado com sucesso`});
        }

    }catch(err){
        console.log(`Erro: ${err.message}`);        
        return res.status(500).send({message: `Erro Inesperado. Tente novamente!`});
    }
};


const removeUserAddressController = async (req, res) => {
    try{
        const endereco = await UserService.removeUserAddressService(req.body.id, req.body.addressId);
        let found = false;

        endereco.value.enderecos.map( (valor, chave) =>{
            if(valor._id == req.body.addressId){
                found = true;
            }
        })

        if (endereco.ok == 1){
            return res.status(200).send({message: `Endereço removido com sucesso`});
        }else{
            return res.status(400).send({message: `Algo deu errado. Não foi possível remover endereço!`});
        }

    }catch(err){
        console.log(`Erro: ${err.message}`);        
        return res.status(500).send({message: `Erro Inesperado. Tente novamente!`});
    }
};


const addUserFavProductController = async (req, res) => {
    try{
        return res.status(201).send(await UserService.addUserFavProductService(req.params.id, req.body));
    }catch(err){
        console.log(`Erro: ${err.message}`);        
        return res.status(500).send({message: `Erro Inesperado. Tente novamente!`});
    }
};


const removeUserFavProductController = async (req, res) => {
    try{
        return res.status(200).send(await UserService.removeUserFavProductService(req.params.id, req.body));
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