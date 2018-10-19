window.setTimeout(function () {

    var todos = ["Buy new turtle"];

    var input = "";

    while (input !== "quit") {
        input = prompt("What would yo like to do?");

        if (input === "list") {
            console.log(todos);
        } else if (input === "new") {
            var newTodo = prompt("Enter new todo:");
            todos.push(newTodo);
        } else if (input !== "quit"){
            alert("Invalid command!");
        }
    }

    console.log("You quit the app!!");
}, 500);
