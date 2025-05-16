function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  const message = document.getElementById("message");

  if (taskText !== "") {
    const list = document.getElementById("taskList");
    const li = document.createElement("li");
    li.textContent = taskText;
    list.appendChild(li);
    input.value = "";
    message.textContent = "Task added!";
    setTimeout(() => message.textContent = "", 1500);
  }
}
