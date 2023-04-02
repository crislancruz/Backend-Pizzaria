const Usuario = require("../model/Usuario");
const jwt = require("jsonwebtoken");

const loginService = (email) => Usuario.findOne({email: email}).select("senha");

const generateToken = (userId) => jwt.sign({id: userId}, "632ecc6429f18a90f849nk0a6bda85872", {expiresIn: 86400});

module.exports = {
    loginService,
    generateToken
}
