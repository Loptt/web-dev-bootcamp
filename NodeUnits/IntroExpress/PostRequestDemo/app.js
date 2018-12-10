var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/friends", (req, res) => {
    res.render("friends", {friends: friends});
});

app.post("/addfriend", (req, res) => {
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.listen(3000, () => {
    console.log("Server started!!");
});