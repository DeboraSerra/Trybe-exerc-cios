const inputTask = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const taskButton = document.querySelector('#criar-tarefa');
const deleteAllButton = document.querySelector('#apaga-tudo');
const deleteCompleted = document.querySelector('#remover-finalizados');
const saveTasksButton = document.querySelector('#salvar-tarefas');
const moveUpButton = document.querySelector('#mover-cima');
const moveDownButton = document.querySelector('#mover-baixo');
const removeSelectedButton = document.querySelector('#remover-selecionado');

const completeTask = (e) => (e.target.classList.contains('completed')) ? e.target.classList.remove('completed') : e.target.classList.add('completed');

const selectItem = (e) => {
  const newTaskList = document.querySelectorAll('.task');
  newTaskList.forEach((item) => (item !== e.target) ? item.classList.remove('selected') : stop);
  e.target.classList.toggle('selected');
}

const addNewTaskButton = () => {
  if (!inputTask.value) {
    alert('Nenhuma tarefa adicionada!');
  } else {
    let newItem = document.createElement('li');
    let text = inputTask.value;
    newItem.innerText = text;
    newItem.className = 'task';
    taskList.appendChild(newItem);
    newItem.addEventListener('click', selectItem);
    newItem.addEventListener('dblclick', completeTask);
    inputTask.value = '';
  }
}

taskButton.addEventListener('click', addNewTaskButton);

const clearTaskList = () => {
  const newTaskList = document.querySelectorAll('.task');
  newTaskList.forEach((item) => taskList.removeChild(item));
  localStorage.removeItem('Task list');
}

deleteAllButton.addEventListener('click', clearTaskList);

const clearCompletedTasks = () => {
  const completedTasks = document.querySelectorAll('.completed');
  completedTasks.forEach((item) => taskList.removeChild(item));
}

deleteCompleted.addEventListener('click', clearCompletedTasks);

const saveTasks = () => {
  const tasksToSave = taskList.innerHTML
  localStorage.setItem('Task list', tasksToSave);
}

saveTasksButton.addEventListener('click', saveTasks);

function getTasks() {
  const savedTasks = localStorage.getItem('Task list');
  taskList.innerHTML = savedTasks;
  const newTaskList = document.querySelectorAll('.task');
  newTaskList.forEach((item) => {
    item.addEventListener("click", selectItem);
    item.addEventListener("dblclick", completeTask);
  })
}

window.onload = function () {
  if (localStorage.getItem('Task list')) {
    getTasks();
  }
}

const moveUp = () => {
  if (document.querySelector('.selected')) {
    if (document.querySelector('.selected').previousElementSibling) {
      let taskOne = document.querySelector('.selected');
      let classOne = taskOne.classList.value;
      let taskTwo = document.querySelector('.selected').previousElementSibling;
      let classTwo = taskTwo.classList.value;
      localStorage.setItem('selectTask', JSON.stringify(taskOne.innerHTML));
      let taskItem = JSON.parse(localStorage.getItem('selectTask'));
      taskOne.innerText = taskTwo.innerText;
      taskTwo.innerText = taskItem;
      taskOne.classList = classTwo;
      taskTwo.classList = classOne;
    }
  }
}

moveUpButton.addEventListener('click', moveUp);

const moveDown = () => {
  if (document.querySelector('.selected')) {
    if (document.querySelector('.selected').nextElementSibling) {
      let taskOne = document.querySelector('.selected');
      let classOne = taskOne.classList.value;
      let taskTwo = document.querySelector('.selected').nextElementSibling;
      let classTwo = taskTwo.classList.value;
      localStorage.setItem('selectTask', JSON.stringify(taskOne.innerHTML));
      let taskItem = JSON.parse(localStorage.getItem('selectTask'));
      taskOne.innerText = taskTwo.innerText;
      taskTwo.innerText = taskItem;
      taskOne.classList = classTwo;
      taskTwo.classList = classOne;
    }
  }
}

moveDownButton.addEventListener('click', moveDown);

const removeSelected = () => {
  const selectedTask = document.querySelector('.selected');
  taskList.removeChild(selectedTask);
}

removeSelectedButton.addEventListener('click', removeSelected);
