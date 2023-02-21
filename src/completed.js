class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

export function loadFromStorage() {
  let savedFormData = localStorage.getItem('tasksList');
  savedFormData = JSON.parse(savedFormData);

  if (savedFormData) {
    const tasksArray = savedFormData;
    const todoList = document.querySelector('.todo-list');
    todoList.innerHTML = '';
    tasksArray.forEach((todo) => {
      todoList.innerHTML += `<li>
            <div class="taskCont">
              <input type="checkbox" class="checkBoxesTasks" id="checkbox${todo.index}">
              <div class="task" id="taskText${todo.index}">${todo.description}</div>
              <textarea class="textArea" maxlength="255"></textarea>
            </div>
            <div class="icon">&#8942</div>
          </li>
        `;
    });
  }
}

export function evaluateCheckBox() {
  const tasksArray = [];
  const liElements = document.querySelectorAll('li');

  liElements.forEach((liElem, index) => {
    const labelTask = liElem.querySelector('.task');
    let labelTaskText;
    const strike = labelTask.getElementsByTagName('strike');
    labelTaskText = labelTask.innerHTML;
    if (strike[0]) {
      labelTaskText = strike[0].innerHTML;
    }
    const indexLocal = index + 1;
    const checkboxElem = liElem.querySelector('.checkBoxesTasks');
    const completed = checkboxElem.checked;
    const task = new Task(labelTaskText, completed, indexLocal);
    tasksArray.push(task);
  });
  localStorage.setItem('tasksList', JSON.stringify(tasksArray));
  loadFromStorage();
}
