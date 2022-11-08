"use strict";
exports.__esModule = true;
var users_1 = require("../handlers/users");
var usersRoutes = function (app) {
    app.get('/users', function (_req, res) {
        res.send("users api");
    });
    app.post("/users", users_1.createUser);
};
exports["default"] = usersRoutes;
