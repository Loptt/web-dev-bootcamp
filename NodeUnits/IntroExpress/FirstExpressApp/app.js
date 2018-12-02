var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("hey");
});

app.get("/bye", function (req, res) {
    res.send("goodbye");
});

app.get("/dog", function (req, res) {
    console.log("Someone has dogged");
    res.send("MEOW!!");
});

app.get("/r/:subredditName", function(req, res) {
    var subreddit = req.params.subredditName;
    res.send("Welcome to the " + subreddit.toUpperCase() + " subreddit");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res) {

});

app.get("*", function(req, res) {
    res.send("You are in star!!!");
});

app.listen(3000, function () {
    console.log("Server has started!!")
});