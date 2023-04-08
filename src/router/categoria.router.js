const router = require("express").Router();

const categoriaController = require("../controller/categoria.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaCategoria, validaId } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");


router.get("/find/:id", authMiddleware, validaId, categoriaController.findCategoriaByIdController);
router.get("/findAll", authMiddleware, paginacao, categoriaController.findAllCategoriasController);

router.post("/create", authMiddleware, validaCategoria, categoriaController.createCategoriaController);
router.put("/update/:id", authMiddleware, validaId, validaCategoria, categoriaController.updateCategoriaController);

router.delete("/delete/:id", authMiddleware, validaId, categoriaController.deleteCategoriaController);


module.exports = router;