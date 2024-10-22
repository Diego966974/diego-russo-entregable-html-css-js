
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');


function addTask() {
    const taskText = taskInput.value.trim(); 

    if (taskText === '') {
        alert('Por favor, ingresa una tarea.'); 
        return;
    }

    const listItem = document.createElement('li'); 
    listItem.textContent = taskText; 

    
    listItem.addEventListener('click', () => {
        listItem.classList.toggle('completed'); 
    });

    
    listItem.addEventListener('dblclick', () => {
        taskList.removeChild(listItem); 
    });

    taskList.appendChild(listItem); 
    taskInput.value = ''; 
}


addButton.addEventListener('click', addTask);
