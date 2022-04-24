const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let todoArr = [];
const TODO_KEY = "todo";

function saveTodo() {
  localStorage.setItem(TODO_KEY, JSON.stringify(todoArr));
}

function delTodo(e) {
  const delTodoLi = e.target.parentElement;
  delTodoLi.remove();
  todoArr = todoArr.filter((todo) => todo.id !== parseInt(delTodoLi.id));
  saveTodo();
}

function printTodo(newTodo) {
  const todoItem = document.createElement("li");
  todoItem.id = newTodo.id;
  const todoItemSpan = document.createElement("span");
  todoItemSpan.innerText = newTodo.text;
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.style = "color: #4a0000;";
  delBtn.addEventListener("click", delTodo);
  todoItem.appendChild(delBtn);
  todoItem.appendChild(todoItemSpan);
  todoList.appendChild(todoItem);
}

function onTodoSubmit(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todoArr.push(newTodoObj);
  printTodo(newTodoObj);
  saveTodo();
}

todoForm.addEventListener("submit", onTodoSubmit);

const savedTodos = localStorage.getItem(TODO_KEY);

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todoArr = parsedTodos;
  parsedTodos.forEach(printTodo);
}
