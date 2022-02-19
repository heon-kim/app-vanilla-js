const toDoForm = document.getElementById("todo__form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo__list");

const toDos_KEY = "toDos";
let toDoArray = [];

function saveToDos() {
  localStorage.setItem(toDos_KEY, JSON.stringify(toDoArray));
}

function doneToDo(event) {
  const span = event.target.nextSibling;
  span.classList.toggle("done");
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDoArray = toDoArray.filter((toDosItem) => toDosItem.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const dellBtn = document.createElement("button");
  const doneBtn = document.createElement("button");

  li.appendChild(dellBtn);
  li.appendChild(doneBtn);
  li.appendChild(span);
  toDoList.appendChild(li);

  li.id = newToDoObj.id;
  span.className = "todo__span";
  dellBtn.className = "todo__button";
  doneBtn.className = "todo__button";

  span.innerText = newToDoObj.text;
  dellBtn.innerText = "x";
  doneBtn.innerText = "v";
  dellBtn.addEventListener("click", deleteToDo);
  doneBtn.addEventListener("click", doneToDo);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  const newToDoObj = {
    id: Date.now(),
    text: newTodo,
  };
  toDoInput.value = "";
  toDoArray.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(toDos_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDoArray = parsedToDos;
}
