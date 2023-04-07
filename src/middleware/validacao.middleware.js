
const validaUsuario = (req, res, next) => {

    //testa um erro por vez e toma apenas uma decisão também por vez
    if (!req.body.nome){
        return res.status(400).send({message: `Campo Nome precisa ser preenchido!`});
    }
    if (!req.body.email){
        return res.status(400).send({message: `Campo Email precisa ser preenchido!`});
    }
    if (!req.body.senha){
        return res.status(400).send({message: `Campo Senha precisa ser preenchido!`});
    }
    if (!req.body.imagem){
        return res.status(400).send({message: `Campo Imagem precisa ser preenchido!`});
    }
    
    //se tiver vazio, assume valor default false no model.
    if (req.body.admin.length >0 ){  //se não tiver vazio, testa se é true|false.
        if( (req.body.admin != "true") && (req.body.admin != "false") ){
            return res.status(400).send({message: `Campo Admin deve ser somente 'true' ou 'false'!`});
        }
    }

    return next();
}


const validaProduto = (req, res, next) => {
    let erros = [];  //var para acumular os erros

    if (!req.body.nome){
        erros.push("nome"); 
    }
    if (!req.body.descricao){
        erros.push("descricao"); 
    }
    if (!req.body.precoUnitario){
        erros.push("precoUnitario"); 
    }
    if (!req.body.imagem){
        erros.push("imagem"); 
    }
    if (!req.body.codigoBarra){
        erros.push("codigoBarra"); 
    }
    
    // testando a quantidade de erros e tomando decisão conforme quantidade retornada.
    if(erros.length == 0){
        return next();
    }else{
        if(erros.length == 1){
            return res.status(400).send({message: `O campo ${erros} precisa ser preenchido!`});
        }else{
            return res.status(400).send({message: `Os campos ${erros} precisam ser preenchidos!`});
        }
    }
}

const validaCategoria = (req, res, next) => {
    if (!req.body.nome){
        return res.status(400).send({message: `Campo Nome precisa ser preenchido!`});
    }
}

const validaCarrinho = (req, res, next) => {
    let erros = [];  //var para acumular os erros

    if (!req.body.precoTotal){
        erros.push("precoTotal"); 
    }
    if (!req.body.frete){
        erros.push("frete"); 
    }
    
    // testando a quantidade de erros e tomando decisão conforme quantidade retornada.
    if(erros.length == 0){
        return next();
    }else{
        if(erros.length == 1){
            return res.status(400).send({message: `O campo ${erros} precisa ser preenchido!`});
        }else{
            return res.status(400).send({message: `Os campos ${erros} precisam ser preenchidos!`});
        }
    }
}

const validaPedido = (req, res, next) => {
    let erros = [];  //var para acumular os erros

    if (!req.body.precoTotal){
        erros.push("precoTotal"); 
    }
    if (!req.body.frete){
        erros.push("frete"); 
    }

    if (req.body.concluido == undefined){  //se tiver vazio
        erros.push("concluido");
    }else{
        //se tiver algo, tem que ser somente ou true ou false.
        if( (req.body.concluido != "true") && (req.body.concluido != "false") ){
            erros.push("concluido"); 
        }
    }
    
    // testando a quantidade de erros e tomando decisão conforme quantidade retornada.
    if(erros.length == 0){
        return next();
    }else{
        if(erros.length == 1){
            return res.status(400).send({message: `O campo ${erros} precisa ser preenchido!`});
        }else{
            return res.status(400).send({message: `Os campos ${erros} precisam ser preenchidos!`});
        }
    }
}


module.exports = {
    validaUsuario,
    validaProduto,
    validaCategoria,
    validaCarrinho,
    validaPedido
}