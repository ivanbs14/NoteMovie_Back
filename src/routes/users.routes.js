/* imports */
const { Router, request, response } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const UserController = require("../controllers/UserController");
const UserAvatarController = require("../controllers/UserAvatarController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

/* instanciando rota na memoria */
const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const userController = new UserController();
const userAvatarController = new UserAvatarController();

/* utilizando metodo POST para enviar e receber users*/
usersRoutes.post("/", userController.create);

/* utilizando metodo PUT para updated dados */
usersRoutes.put("/", ensureAuthenticated, userController.update);

/* carregando campo de avatar do user */
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update);

/* exportando o userRoutes */
module.exports = usersRoutes;