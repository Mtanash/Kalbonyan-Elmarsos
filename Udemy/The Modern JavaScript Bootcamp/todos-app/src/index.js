import { setFilters } from "./filters";
import { createTodo } from "./todos";
import { renderTodos } from "./views";

renderTodos();

document.querySelector("#search-input").addEventListener("input", (e) => {
  setFilters({
    searchText: e.target.value,
  });
  renderTodos();
});

document.querySelector("#hide-completed").addEventListener("change", (e) => {
  setFilters({
    hideCompleted: e.target.checked,
  });
  renderTodos();
});

document.querySelector("#todo-form").addEventListener("submit", (e) => {
  e.preventDefault();

  if (e.target.elements.todoText.value === "") return;

  createTodo(e.target.elements.todoText.value.trim());
  renderTodos();
  e.target.elements.todoText.value = "";
});

window.addEventListener("storage", (e) => {
  if (e.key === "todos") {
    renderTodos();
  }
});
