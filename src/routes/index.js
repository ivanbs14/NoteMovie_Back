const { Router } = require("express");

/* import userRoutes */
const userRoutes = require("./users.routes");
const notesRoutes = require("./notes.routes");
const tagsRoutes = require("./tags.routes");
const sessionsRouter = require("./sessions.routes");

const routes = Router();

/* redireciona o usuario para o userRoutes */
routes.use("/users", userRoutes);
routes.use("/sessions", sessionsRouter);
routes.use("/notes", notesRoutes);
routes.use("/tags", tagsRoutes);

module.exports = routes;