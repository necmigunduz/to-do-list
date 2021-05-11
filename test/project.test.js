const initStart = require('../src/initStart');
const project = require('../src/project');

const target = document.createElement('input');
target.setAttribute('type','text');
target.value = 'Jest-test';
let projects =  initStart.getProjects();

describe('createProject', ()=>{
  it('Creates a new Project', ()=>{
    let newProject = project.projectModule.createProject(target)
    expect(  newProject instanceof project.Project).toEqual(true)
  })
})

describe('removeProject', ()=>{

  it('Removes a new Project', ()=>{
    let resultProjects = project.removeProject(projects, projects[0])
    expect(resultProjects.length ).toBe(projects.length -1)
  })
})
