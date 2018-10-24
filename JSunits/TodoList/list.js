window.setTimeout(function() {
    var todos = ["Buy new turtle"];

    var input = "";

    function listTodos() {
        console.log("**********");
        todos.forEach(function(todo, i) {
            console.log(i + ": " + todo);
        });
        console.log("**********");
    }

    function addTodo() {
        var newTodo = prompt("Enter new todo:");
        todos.push(newTodo);
        console.log("Added Todo");
    }

    function deleteTodo() {
        var index = prompt("Enter index to remove:");
        todos.splice(index, 1);
        console.log("Deleted Todo");
    }

    while (input !== "quit") {
        input = prompt("What would yo like to do?");

        if (input === "list") {
            listTodos();
        } else if (input === "new") {
            addTodo();
        } else if (input === "delete") {
            deleteTodo();
        } else if (input !== "quit") {
            alert("Invalid command!");
        }
    }

    console.log("You quit the app!!");
}, 500);
