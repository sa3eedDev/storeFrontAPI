"use strict";
exports.__esModule = true;
var users_1 = require("../handlers/users");
var validetor_1 = require("../middlewares/validetor");
var usersRoutes = function (app) {
    app.post("/users", users_1.createUser);
    app.get("/users", validetor_1.verifyAuthToken, users_1.indexUsers);
};
exports["default"] = usersRoutes;
