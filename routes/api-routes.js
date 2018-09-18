var db = require("../models");

module.exports = function (app) {
    app.get("/", function (req, res) {
        db.Burger.findAll({}).then(function (results) {
            res.json(results);
        });
    });
    app.post("/api/burgers", function (req, res) {
        db.Burger.create({
            name: req.body.name,
            devoured: req.body.devoured
        }).then(function (results) {
            res.json(results);
        });
    });
    app.put("/api/burgers/:id", function (req, res) {
        db.Burger.update({
            name: req.body.name,
            devoured: req.body.devoured
        }, {
                where: {
                    id: req.body.id
                }
            }).then(function (results) {
                res.json(results);
            });
    });
    app.delete("/api/burgers/:id", function (req, res) {
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (results) {
            res.json(results);
        });
    });
}