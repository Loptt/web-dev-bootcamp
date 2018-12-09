var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/blog_demo_2", { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log("DATABASE ERROR");
        console.log(err);
        return;
    }

    console.log("Database connected");
});

var Post = require("./models/post");
var User = require("./models/user");

Post.create({
    title: "How to cook the best burger part 4",
    content: "sldkfsldkflsdkmlskdmflksdm"
}, (err, post) => {
    if (err) {
        console.log(err);
    } else {
        User.findOne({email: "bob@gmail.com"}, (err, foundUser) => {
            if (err) {
                console.log(err);
            } else {
                foundUser.posts.push(post);
                foundUser.save((err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data);
                    }
                });
            }
        });
    }
});


// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher"
// });

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec((err, user) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });