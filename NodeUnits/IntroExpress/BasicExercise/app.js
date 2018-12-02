var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("Hi there, welcome to my assignment");
});

app.get("/speak/pig", function (req, res) {
    res.send("Oink");
});

app.get("/speak/cow", function (req, res) {
    res.send("Moo");
});

app.get("/speak/dog", function (req, res) {
    res.send("Woof Woof!");
});

app.get("/repeat/:word/:num", function (req, res) {
    var word = req.params.word;
    var num = Number(req.params.num);

    if (!num) {
        res.send("Invalid input");
    }

    var response = "";

    for (var i = 0; i < num; i++) {
        response += word;
        response += " ";
    }

    res.send(response);
});

app.get("*", function (req, res) {
    res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});