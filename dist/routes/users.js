"use strict";
exports.__esModule = true;
var usersRoutes = function (app) {
    app.get('/users', function (_req, res) {
        res.send("users api");
    });
};
exports["default"] = usersRoutes;
