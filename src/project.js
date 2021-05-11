// eslint-disable-next-line import/no-cycle
import { getProjects } from './initStart';

class Project {
  constructor(name) {
    this.name = name;
    this.id = name.toLowerCase();
    this.todos = [];
  }
}

const projectModule = (() => {
  function createProject(target) {
    const projects = getProjects();
    const targetValue = target.value.toLowerCase();
    const invalidName = projects.find((element) => element.name.toLowerCase() === targetValue);
    let newProject;
    if (target.value !== '' && !invalidName) {
      newProject = new Project(target.value);
      projects.push(newProject);
      localStorage.toDoProjects = JSON.stringify(projects);
    }

    target.value = '';
    return newProject || 'Could not create a project';
  }

  return { createProject };
})();
function removeProject(projects, project) {
  projects = projects.filter((element) => element.id !== project.id);
  localStorage.toDoProjects = JSON.stringify(projects);
  return projects;
}

export default projectModule;
export { Project, projectModule, removeProject };