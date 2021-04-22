
import { getProjects, start } from "./initStart";

class Project {
  constructor(name) {
    this.name = name;
    this.id = name.toLowerCase();
    this.todos = [];
  };  
};

const projectModule = (()=>{
  function createProject(target) {
    const projects = getProjects();
    const targetValue = target.value.toLowerCase();
    const invalidName = projects.find((element) => element.name.toLowerCase() === targetValue);
  
    if (target.value !== '' && !invalidName) {
      const newProject = new Project(target.value);
      projects.push(newProject);
      localStorage.toDoProjects = JSON.stringify(projects);
  
      start();
    } else {
      alert('Project name already exist or empty');
    }
    target.value = '';
  }

  function initProject(name){
    new Project(name)
  }

  return {createProject, initProject}
})()

export default projectModule;
export{Project, projectModule};