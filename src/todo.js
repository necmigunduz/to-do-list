import { getProjects, start } from './initStart';

class Todo {
    constructor(title, date, description, priority, project) {
      this.title = title;
      this.date = date;
      this.description = description;
      this.priority = priority;
      this.project = project;
      this.id = Date.now().toString();
      this.status = false;
    };
    updateTodo(title, date, description, priority){
      this.title = title;
      this.date = date;
      this.description = description;
      this.priority = priority;
      return this;
    }
};

function removeTodo(projects, project, todoId) {
  project.todos = project.todos.filter((x) => x.id !== todoId);
  localStorage.toDoProjects = JSON.stringify(projects);
}

// const todoModule = (() => {
    function createTodo (title,date,description,priority,project){
        if (title !== '' && description !== '' && priority !== '' && project !== '' && date !== ''){ 
            const projects = getProjects();
            const index = projects.findIndex(({ name }) => name === project);
            const newTodo = new Todo(title,date,description,priority,project);
            projects[index].todos.push(newTodo);
            localStorage.toDoProjects = JSON.stringify(projects);
            start();  
        } 
    }
// })();


// export default todoModule;
export { Todo, createTodo, removeTodo };