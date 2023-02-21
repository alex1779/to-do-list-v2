//import './style.css';
import {
  addEventsToLabels, addEventsCheckBoxes, addEventsNewTasks, addEventclearAllButton,
  addEventsdeleteFromIcons,
} from './utils.js';

window.onload = () => {
  let tasksArray = [];
  let savedFormData = localStorage.getItem('tasksList');
  savedFormData = JSON.parse(savedFormData);
  if (savedFormData) {
    tasksArray = savedFormData;
    const todoList = document.querySelector('.todo-list');
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

  addEventsToLabels();
  addEventsCheckBoxes();
  addEventsNewTasks(tasksArray);
  addEventclearAllButton();
  addEventsdeleteFromIcons();



  
};
