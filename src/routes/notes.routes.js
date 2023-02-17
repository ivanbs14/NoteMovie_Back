/* imports */
const { Router } = require("express");

const NotesController = require("../controllers/NotesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

/* instanciando rota na memoria */
const notesRoutes = Router();

const notesController = new NotesController();

notesRoutes.use(ensureAuthenticated)

/* utilizando metodo GET receber as notas do users*/
notesRoutes.get("/", notesController.index);

/* utilizando metodo POST para enviar e receber users*/
notesRoutes.post("/", notesController.create);

/* utilizando metodo GET para receber os dados da nota*/
notesRoutes.get("/:id", notesController.show);

/* utilizando metodo delete para deletar nota*/
notesRoutes.delete("/:id", notesController.delete);

/* exportando o userRoutes */
module.exports = notesRoutes;