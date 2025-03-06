const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

function addTask() {
    const taskText = taskInput.value.trim();  

    if (taskText !== "") {
        const li = document.createElement("li");
        li.classList.add("todo-item");

        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");
        removeButton.onclick = () => removeTask(li);

        li.appendChild(taskSpan);
        li.appendChild(removeButton);

        todoList.appendChild(li);
        taskInput.value = "";
    }
}

function removeTask(taskItem) {
    todoList.removeChild(taskItem);
}

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
