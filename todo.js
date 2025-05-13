function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    const message = document.getElementById('addMessage');
  
    if (taskText) {
      const li = document.createElement('li');
      li.textContent = taskText;
      document.getElementById('taskList').appendChild(li);
      taskInput.value = '';
      message.textContent = "✅ Task Added";
  
      setTimeout(() => {
        message.textContent = "";
      }, 2000);
    }
  }
  