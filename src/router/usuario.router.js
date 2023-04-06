const router =  require("express").Router();

const usuarioController = require("../controller/usuario.controller");
const authMiddleware = require("../middleware/auth.middleware");

//rotas GET
router.get('/find/:id', authMiddleware, usuarioController.findUserByIdController);
router.get('/findAll', authMiddleware, usuarioController.findAllUsersController);

//rotas POST
router.post('/create', usuarioController.createUserController);
router.post('/addAddress/:id', usuarioController.addUserAddressController);
router.post('/addFavProduct/:id', usuarioController.addUserFavProductController);

//rotas PUT
router.put('/update/:id', usuarioController.updateUserController);

//rotas DELETE
router.delete('/remove/:id', usuarioController.removeUserController);
router.delete('/removeAddress', usuarioController.removeUserAddressController);
router.delete('/removeFavProduct', usuarioController.removeUserFavProductController);

module.exports = router;