// UI Event Variables

const form = document.querySelector(".task-form");
const taskInput = document.querySelector("#task");
const filterTask = document.querySelector("#filter");
const clearBtn = document.querySelector("#clear-btn");
const taskList = document.querySelector(".collection");

// load event listeners
loadEventListeners();

// load all Event Listeners

function loadEventListeners(){

    form.addEventListener("submit", addTask);

    clearBtn.addEventListener("click", clearTask);

    filterTask.addEventListener('keyup', taskFilter);
}

// Add Tasks

function addTask(e){
    if(taskInput.value === ''){
        alert("Please enter a task");
    }
    else{
    const li = document.createElement("li");
    li.className = "collection-item";
    li.appendChild(document.createTextNode(taskInput.value.charAt(0).toUpperCase() + taskInput.value.slice(1)));
    taskList.appendChild(li);
    taskInput.value = '';
    }
    e.preventDefault();
}

// Clear Task

function clearTask(e){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    e.preventDefault();
}

// filter task input

function taskFilter(e){
    const text = e.target.value.toLowerCase();
    querySelectorAll(".collection-item").forEach(function(task){
        let item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }
        else{
            task.style.display = 'none';
        }
    });
}