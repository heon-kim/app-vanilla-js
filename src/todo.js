const toDoForm = document.getElementById("todo__form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo__list");

const toDos_KEY = "toDos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(toDos_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDosItem) => toDosItem.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  li.appendChild(button);
  li.appendChild(span);
  toDoList.appendChild(li);

  li.id = newToDoObj.id;
  span.className = "todo__span";
  button.className = "todo__button";

  span.innerText = newToDoObj.text;
  button.innerText = "v";
  button.addEventListener("click", deleteToDo);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  const newToDoObj = {
    id: Date.now(),
    text: newTodo,
  };
  toDoInput.value = "";
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(toDos_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
}
