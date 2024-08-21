// let todoList = [];
// const todoNameInput = document.querySelector('.todo-name-input');
// const addTodoElm = document.querySelector('.js-add-todo');
// const todoListContainerElm = document.querySelector('.js-todo-list-container');
// const 
// addTodoElm.addEventListener('click', () => {
//     if (todoNameInput.value){
//         todoList.push(todoNameInput.value);
//      } else {
//         return;
//      }
//     let output = '';
//     todoList.forEach((element,index) => {
//         output += `<p class='todo-list-name'>${element}</p> <p class='date'>${} </p> <button>Delete</button>`
//     });
//     todoListContainerElm.innerHTML = output;
// });



let allTodo = []

const todoNameInput = document.querySelector('.js-todo-name-input');
const dateInput = document.querySelector('.js-date-input');
const addTodoButton = document.querySelector('.js-add-todo-button');