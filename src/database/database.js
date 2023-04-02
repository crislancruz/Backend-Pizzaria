
const mongoose = require('mongoose');

function connectToDatabase(){
    mongoose.connect('mongodb://127.0.0.1:27017/pizzaria', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then( () => {
        console.log('Mongo DB Conectado!');    
    }).catch( (err) => {
        return console.log(`Erro na Conexão com o Banco: ${err}`)
    })

}

module.exports = connectToDatabase;