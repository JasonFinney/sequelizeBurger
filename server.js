var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 9000;
var db = require("./models");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require("./routes/api-routes")(app);

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("Server listening on: http://localhost:" + PORT);
    });
});