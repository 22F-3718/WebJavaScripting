
document.getElementById("addTodoButton").addEventListener("click", () => {
    document.getElementById("todoInputContainer").style.display = "block";
});

document.getElementById("saveTodoButton").addEventListener("click", () => {
    const todoInput = document.getElementById("todoInput");
    const todoText = todoInput.value.trim();

    if (todoText) {
        const todoList = document.getElementById("todoList");
        const li = document.createElement("li");

        li.textContent = todoText;

        const deleteIcon = document.createElement("img");
        deleteIcon.src = "delete.png";
        deleteIcon.alt = "Delete";
        deleteIcon.style = "width: 35px; height: 35px";
        deleteIcon.addEventListener("click", () => {
            todoList.removeChild(li);
        });

        li.appendChild(deleteIcon);
        todoList.appendChild(li);

        todoInput.value = "";
        document.getElementById("todoInputContainer").style.display = "none";
    }
});