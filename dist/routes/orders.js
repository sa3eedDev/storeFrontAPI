"use strict";
exports.__esModule = true;
var ordersRoutes = function (app) {
    app.get('/orders', function (_req, res) {
        res.send('orders API');
    });
};
exports["default"] = ordersRoutes;
