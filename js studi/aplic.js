document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todo-list');
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');

    addButton.addEventListener('click', function() {
        if (todoInput.value.trim() !== '') {
            const todoItem = document.createElement('li');
            todoItem.textContent = todoInput.value;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function() {
                todoList.removeChild(todoItem);
            });

            todoItem.appendChild(deleteButton);
            todoList.appendChild(todoItem);
            todoInput.value = '';
        }
    });
});