var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });

// george.save((err, cat) => {
//     if (err) {
//         console.log("Something went wrong");
//     } else {
//         console.log("We just saved a cat");
//         console.log(cat);
//     }
// });

Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, (err, cat) => {
    if (err) {
        console.log(err);
    } else {
        console.log(cat);
    }
})

Cat.find({}, (err, cats) => {
    if(err) {
        console.log("OOOPS");
        console.log(err);
    } else {
        console.log("All the cats");
        console.log(cats);
    }
});