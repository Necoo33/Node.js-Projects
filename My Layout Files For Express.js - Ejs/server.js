// this codes are minimal to start a ready express.js app
// which uses ejs as view engine.

let express = require("express");
let app = express();

let path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd() + "/pages"));
app.use(express.static(__dirname + "/styles"));

app.get("/", function(req, res, next){
    res.render("home");
});

app.listen(3000);
