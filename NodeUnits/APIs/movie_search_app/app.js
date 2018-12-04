var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("search");
});

app.get("/results", (req, res) => {
    var search = req.query.search;
    var url = "http://omdbapi.com/?apikey=thewdb&s=" + search;
    request(url , (error, response, body) => {
        if(!error && response.statusCode == 200) {
            data = JSON.parse(body);
            res.render("results", {data: data});
        } else {
            res.send("ERROR");
        }
    });
});

app.listen(3000, () => {
    console.log("Movie app started!");
});