let taskList = [];

function renderTasks() {
    const taskListEl = document.getElementById("task-list");
    taskListEl.innerHTML = '';

    taskList.forEach((task, index) => {
        const li = document.createElement("li");

        if (task.editing) {
            li.classList.add("edit-mode");

            const input = document.createElement("input");
            input.type = "text";
            input.value = task.name;
            input.id = `edit-input-${index}`;  // Menggunakan backtick untuk template literal
            li.appendChild(input);

            const saveBtn = document.createElement("button");
            saveBtn.innerText = "Simpan";
            saveBtn.onclick = () => saveTask(index);
            li.appendChild(saveBtn);
        } else {
            const taskContent = document.createElement("div");
            taskContent.classList.add("task-content");

            const taskName = document.createElement("span");
            taskName.classList.add("task-name");
            taskName.innerText = task.name;
            taskContent.appendChild(taskName);

            const btnContainer = document.createElement("div");
            btnContainer.classList.add("buttons");

            const editBtn = document.createElement("button");
            editBtn.innerText = "Edit";
            editBtn.onclick = () => editTask(index);
            btnContainer.appendChild(editBtn);

            const deleteBtn = document.createElement("button");
            deleteBtn.innerHTML = "&#128465;";  // Ikon tong sampah
            deleteBtn.classList.add("delete-btn");
            deleteBtn.onclick = () => deleteTask(index);
            btnContainer.appendChild(deleteBtn);

            taskContent.appendChild(btnContainer);
            li.appendChild(taskContent);
        }

        taskListEl.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskName = taskInput.value.trim();

    if (taskName !== '') {
        taskList.push({ name: taskName, editing: false });
        taskInput.value = '';
        renderTasks();
    } else {
        alert("Tugas tidak boleh kosong.");
    }
}

function deleteTask(index) {
    taskList.splice(index, 1);
    renderTasks();
}

function editTask(index) {
    taskList[index].editing = true;
    renderTasks();
}

function saveTask(index) {
    const newTaskName = document.getElementById(`edit-input-${index}`).value.trim();  // Menggunakan backtick untuk template literal

    if (newTaskName !== '') {
        taskList[index].name = newTaskName;
        taskList[index].editing = false;
        renderTasks();
    } else {
        alert("Tugas tidak boleh kosong.");
    }
}

renderTasks();
