const todoContainer = document.getElementById('todo-container');
const totalLoaded = document.getElementById('total-loaded');
const loadMoreBtn = document.getElementById('load-more-btn');

let todosLoaded = 0;  // Number of todos currently loaded
const todosLimit = 20;  // How many todos to fetch per request
const maxTodos = 100;   // Maximum number of todos to load

// Function to fetch todos
const fetchTodos = async (skip) => {
    const response = await fetch(`https://dummyjson.com/todos?limit=${todosLimit}&skip=${skip}`);
    const data = await response.json();
    return data.todos;
}

// Function to render todos
function renderTodos(todos) {
    todos.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';
        todoItem.innerText = todo.todo;
        todoContainer.appendChild(todoItem);
    });
}

// Function to load more todos
async function loadMoreTodos() {
    const todos = await fetchTodos(todosLoaded);  // Fetch more todos
    renderTodos(todos);  // Render the fetched todos

    // Update the count of loaded todos
    todosLoaded += todos.length;
    totalLoaded.innerText = todosLoaded;

    // If we have loaded 100 todos, hide the Load More button
    if (todosLoaded >= maxTodos) {
        loadMoreBtn.style.display = 'none';
    }
}

// Initial load of todos
loadMoreTodos();

// Event listener for Load More button
loadMoreBtn.addEventListener('click', loadMoreTodos);
