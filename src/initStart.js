const container = document.getElementById('content');

function displayProjectForm(){

}

function displayTodoForm(){

}

function clearContent(){

}

function displayProjects(){
  
}




function start() {
  clearContent(container);
  const mainContent = container.appendChild(document.createElement('div'));
  mainContent.setAttribute('class', 'main-content');
  const projectSection = mainContent.appendChild(document.createElement('section'));
  projectSection.setAttribute('class', 'project-section ');
  const header = projectSection.appendChild(document.createElement('h3'));
  header.setAttribute('class', 'text-center mt-3');
  header.innerHTML = 'Projects';

  const projectList = projectSection.appendChild(document.createElement('div'));
  projectList.setAttribute('class', 'project-list mx-auto w-75');

  const formContainer = projectSection.appendChild(document.createElement('div'));
  formContainer.setAttribute('class', 'form-container mx-auto w-75');
  const addProjectBtn = formContainer.appendChild(document.createElement('button'));

  addProjectBtn.setAttribute('class', 'btn text-center  mt-5 mx-auto text-white bg-dark add-project');
  addProjectBtn.textContent = 'Add Project';
  // eslint-disable-next-line no-use-before-define
  addProjectBtn.addEventListener('click', displayProjectForm);

  const taskSection = mainContent.appendChild(document.createElement('section'));
  taskSection.setAttribute('class', 'task-section');

  const addTaskBtn = taskSection.appendChild(document.createElement('button'));
  addTaskBtn.setAttribute('class', 'btn mt-2 ml-5 text-white bg-dark add-task');
  addTaskBtn.innerHTML = 'Add Task';
  addTaskBtn.addEventListener('click', displayTodoForm);

  const projectContainer = taskSection.appendChild(document.createElement('div'));
  projectContainer.setAttribute('class', 'project-container mt-4 mx-3 ');

  header.addEventListener('click', () => {
    clearContent(projectContainer);
    localStorage.removeItem('selectedProjectId');
  });

  displayProjects();
};


export {start};