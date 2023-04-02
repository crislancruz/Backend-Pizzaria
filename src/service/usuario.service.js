const Usuario = require("../model/Usuario");


const findUserByIdService = (id) => {
    return Usuario.findById(id);
};

const findAllUsersService = () => {
    return Usuario.find();
};

const createUserService = (body) => {
    return Usuario.create(body);
};

const updateUserService = (id, body) => {
    return Usuario.findByIdAndUpdate(id, body, {returnDocument: "after"});
};

const removeUserService = (id) => {
    return Usuario.findByIdAndRemove(id);
};

const addUserAddressService = (id, endereco) => {

};

const removeUserAddressService = (id) => {

};

const addUserFavProductService = (id, produto) => {

};

const removeUserFavProductService = (produto) => {

};

//valida sequencialmente todos os campos do Body até que nenhum seja inválido, retornando true
const isBodyValidService = (body) => {

    // nome
    // email
    // senha
    // imagem
    // admin
    // createdAt
    // enderecos: logradouro, numero, complemento, cep, createdAt

    if( Object.keys(body).length === 0 ){
        return res.status(400).send({message:"Corpo da mensagem vazio!"});
    }
    if (!body.nome){
        res.status(400).send({message: `Campo Nome precisa ser preenchido!`});
        return false;
    }
    if (!body.email){
        res.status(400).send({message: `Campo Email precisa ser preenchido!`});
        return false;
    }
    if (!body.senha){
        res.status(400).send({message: `Campo Senha precisa ser preenchido!`});
        return false;
    }
    if (!body.imagem){
        res.status(400).send({message: `Campo Imagem precisa ser preenchido!`});
        return false;
    }

    // se não forneceu vai ser "false" por default qnd inserir no banco.
    // mas se forneceu, tem que ser somente "true" ou "false".
    if (body.admin){
        if( (body.admin != "true") && (body.admin != "false") ){
            res.status(400).send({message: `Campo Admin deve ser "true" ou "false"!`});
            return false;
        }
    }

    // Campo createdAt --> preencher automaticamente com funçao semelhante now()

    // VERIFICAR SE PRECISA DE MAP... NAS AULAS.
    // validar enderecos: logradouro, numero, complemento, cep, createdAt 
    // if (body.enderecos.......){
    //     if( (body.enderecos != "true") && (body.enderecos !=" false") ){
    //         res.status(400).send({message: `Campo Endereço precisa ser preenchido!`});
    //         return false;
    //     }
    // }

    //todos os campos foram validados
    return true;
};


module.exports = {
    findUserByIdService,
    findAllUsersService,
    createUserService,
    updateUserService,
    removeUserService,
    addUserAddressService,
    removeUserAddressService,
    addUserFavProductService,
    removeUserFavProductService,
    isBodyValidService
}