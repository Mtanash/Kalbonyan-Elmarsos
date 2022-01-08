const todos = [
  {
    text: "Pray",
    completed: true,
  },
  {
    text: "Study programming",
    completed: true,
  },
  {
    text: "Go to gym",
    completed: false,
  },
];

const sortTodos = function (todos) {
  todos.sort((a, b) => {
    if (!a.completed && b.completed) {
      return -1;
    } else if (a.completed && !b.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortTodos(todos);
console.log(todos);

const removeTodo = function (todos, todoText) {
  const index = todos.findIndex((todo) => {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });
  if (index > -1) todos.splice(index, 1);
};

const getThingsTodo = function (todos) {
  return todos.filter((todo) => {
    return !todo.completed;
  });
};

// console.log(getThingsTodo(todos));

// removeTodo(todos, "go to gym");
// console.log(todos);
