let allTodo = JSON.parse(localStorage.getItem('todo')) ||  [{
}];


const todoNameInput = document.querySelector('.js-todo-name-input');
const dateInput = document.querySelector('.js-date-input');
const addTodoButton = document.querySelector('.js-add-todo-button');
const todoGridElement = document.querySelector('.js-todo-list');
updateTodoGrid();

const deleteTodoButton = document.querySelectorAll('.js-delete-todo-button');


addTodoButton.addEventListener('click', () => {
    if (!todoNameInput.value) {
        return;
    }

    allTodo.push( {
        todoName: todoNameInput.value,
        date : dateInput.value
    });
    console.log(allTodo);
    updateTodoGrid();
});

todoGridElement.addEventListener('click', (event) => {
    if (!event.target.classList.contains('delete-todo-button') ){
        return;
    }
    allTodo.splice(event.target.dataset.index, 1);
    updateTodoGrid();
})

function updateTodoGrid(){
    let output = '';
    allTodo.forEach((element,index) => {
        output += `<p class="todo-name">${element.todoName}</p> <p class="todo-date">${element.date}</p> <button class="delete-todo-button js-delete-todo-button" data-index='${index}'>Delete</button>`;
    });
    todoGridElement.innerHTML = output;
    todoNameInput.value = '';
    dateInput.value = '';

    localStorage.setItem('todo',JSON.stringify(allTodo));
}   

