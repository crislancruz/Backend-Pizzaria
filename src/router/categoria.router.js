const router = require("express").Router();

const categoriaController = require("../controller/categoria.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.get("/find/:id", authMiddleware, categoriaController.findCategoriaByIdController);
router.get("/findAll", authMiddleware, categoriaController.findAllCategoriasController);

router.post("/create", authMiddleware, categoriaController.createCategoriaController);
router.put("/update/:id", authMiddleware, categoriaController.updateCategoriaController);

router.delete("/delete/:id", authMiddleware, categoriaController.deleteCategoriaController);

module.exports = router;