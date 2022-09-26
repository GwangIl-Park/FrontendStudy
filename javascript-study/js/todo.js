const todoForm = document.getElementById('todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.getElementById('todo-list');

const TODOS_KEY = 'toDos';
let todoArray = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todoArray));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  todoArray = todoArray.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintTodo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  const button = document.createElement('button');
  button.addEventListener('click', deleteTodo);
  button.innerText = 'X';
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = '';
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  paintTodo(newTodoObj);
  todoArray.push(newTodoObj);
  saveToDos();
}

todoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  todoArray = parsedToDos;
  parsedToDos.forEach((item) => {
    paintTodo(item.text);
  });
}
