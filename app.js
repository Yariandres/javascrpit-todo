//Select DOM
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listeners
// document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);
filterOption.addEventListener('click', filterTodo);

//Functions

function addTodo(e) {
	e.preventDefault();

	//Create todo div
	const todoDiv = document.createElement('div');
	todoDiv.classList.add('todo');

	//Create list
	const newTodo = document.createElement('li');
	newTodo.innerText = todoInput.value;

	//Save to local - do this last
	//Save to local
	// saveLocalTodos(todoInput.value);
	
	newTodo.classList.add('todo-item');
	todoDiv.appendChild(newTodo);

	// reset input text to empty
	// todoInput.value = '';


	//Create Completed Button
	const completedButton = document.createElement('button');

	completedButton.innerHTML = `<i class="fas fa-check"></i>`;

	completedButton.classList.add('complete-btn');
	todoDiv.appendChild(completedButton);

	//Create trash button
	const trashButton = document.createElement('button');

	trashButton.innerHTML = `<i class="fas fa-trash"></i>`;

	trashButton.classList.add('trash-btn');
	todoDiv.appendChild(trashButton);

	//attach final Todo
	todoList.appendChild(todoDiv);
}

function deleteTodo(e) {
	const item = e.target;

	if (item.classList[0] === 'trash-btn') {
		// e.target.parentElement.remove();
		const todo = item.parentElement;
		todo.classList.add('fall');
		//at the end
		// removeLocalTodos(todo);
		todo.addEventListener('transitionend', e => {
			todo.remove();
		});
	}
	if (item.classList[0] === 'complete-btn') {
		const todo = item.parentElement;
		todo.classList.toggle('completed');
		console.log(todo);
	}
}

function filterTodo(e) {
	const todos = todoList.childNodes;
	console.log(todos) 

	todos.forEach(function (todo) {
		console.log(todo)
		switch (e.target.value) {
			case 'all':
				todo.style.display = 'flex';
				break;
			case 'completed':
				if (todo.classList.contains('completed')) {
					todo.style.display = 'flex';
				} else {
					todo.style.display = 'none';
				}
				break;
			case 'uncompleted':
				if (!todo.classList.contains('completed')) {
					todo.style.display = 'flex';
				} else {
					todo.style.display = 'none';
				}
		}
	});
}


function getTodos() {
	let todos;
	if (localStorage.getItem("todos") === null) {
	  todos = [];
	} else {
	  todos = JSON.parse(localStorage.getItem("todos"));
	}
	todos.forEach(function(todo) {
	  //Create todo div
	  const todoDiv = document.createElement("div");
	  todoDiv.classList.add("todo");
	  //Create list
	  const newTodo = document.createElement("li");
	  newTodo.innerText = todo;
	  newTodo.classList.add("todo-item");
	  todoDiv.appendChild(newTodo);
	  todoInput.value = "";
	  //Create Completed Button
	  const completedButton = document.createElement("button");
	  completedButton.innerHTML = `<i class="fas fa-check"></i>`;
	  completedButton.classList.add("complete-btn");
	  todoDiv.appendChild(completedButton);
	  //Create trash button
	  const trashButton = document.createElement("button");
	  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
	  trashButton.classList.add("trash-btn");
	  todoDiv.appendChild(trashButton);
	  //attach final Todo
	  todoList.appendChild(todoDiv);
	});
  }