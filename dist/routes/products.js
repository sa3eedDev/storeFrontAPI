"use strict";
exports.__esModule = true;
var productsRoutes = function (app) {
    app.get("/products", function (_req, res) {
        res.send("products API");
    });
};
exports["default"] = productsRoutes;
