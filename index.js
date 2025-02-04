const todos = [
  {
    title: "Initial Todo",
    description: "This is the initial todo",
    complete: false,
  },
];

function addTodo() {
  todos.push({
    title: "New Todo",
    description: "This is a new todo",
    complete: false,
  });
}

function removeTodo(item) {
  todos.pop();
}

function editTodo(item, element, edit) {
  if (element == "title"){
    todos[item].title = edit;}
    else {
      if (element == "description"){
        todos[item].description = edit
      }
    }
}

function markTodoComplete(item) {
  todos[item].complete = true;
}

function displayTodoLength() {
  if (todos.length > 1) {
    console.log("You have " + todos.length + " to-dos");
  } else {
    console.log("You have " + todos.length + " to-do");
  }
  todos.length;
}

function app() {
  console.log("Welcome to the To-do Application");
  console.log("================================");
  
  // You will need to call your methods above this comment to edit the todos array
  console.log("Here is a list of your to-dos:");
  // Print the length of the todos array below this comment
  displaylen = displayTodoLength();
  // Print the length of the todos array above this comment
  // You will need to call your methods below this comment to edit the todos array

  for (let todo of todos) {
    console.log("To-do:", todos.indexOf(todo) + 1);
    console.log("The title of the to-do: ", todo.title) 
    console.log("The description of the to-do: ", todo.description)
    if (todo.complete == false)
      {console.log("The todo is not complete")}
        else {
          console.log("The todo is complete")
        }
  }
  // Iterate over the todos array and console.log each todo below this comment
}
addTodo();
addTodo();
addTodo();
removeTodo();
markTodoComplete(2);
editTodo(1, "title", "Second To-do")
editTodo(2, "title", "Third To-do")
editTodo(2, "description", "This is the third to-do")
app();

