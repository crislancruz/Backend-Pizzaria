
const Usuario = require("../model/Usuario");


const findUserByIdService = (id) => {
    return Usuario.findById(id);
};


const findAllUsersService = (limit, offset) => {
    return Usuario.find().limit(limit).skip(offset);
};


//verifica se existe email cadastrado antes de um create.
const findUserByEmail = (v_email) => {
    return Usuario.findOne(
        { email: v_email }
    )
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
    return Usuario.findOneAndUpdate(
        {
            _id: id, 
        },
        {
            $push:{
                enderecos: endereco
            }
        },
        {
            rawResult: true,
        }
    )
};


const removeUserAddressService = (id, addressId) => {
    return Usuario.findOneAndUpdate(
        {
            _id: id, 
        },
        {
            $pull:{
                enderecos: {
                    _id: addressId
                },
            }
        },
        {
            rawResult: true,
        }
    )    

};


const addUserFavProductService = (id, productId) => {
    return Usuario.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $push: {
                produtos_fav: {
                    _id: productId,
                }
            }
        },
        {
            rawResult: true,
        }
    );
};


const removeUserFavProductService = (id, productId) => {
    return Usuario.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $pull: {
                produtos_fav: {
                    _id: productId,
                }
            }
        },
        {
            rawResult: true,
        }
    );
};


//valida sequencialmente todos os campos do Body até que nenhum seja inválido, retornando true
const isBodyValidService = (body, res) => {

    // falta validar os endereços e funçao "now" para createAt

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
    isBodyValidService,
    findUserByEmail
}