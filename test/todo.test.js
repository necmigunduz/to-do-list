const initStart = require('../src/initStart');
const todo = require('../src/todo');
const project = require('../src/project');


let todoExample1 = new todo.Todo('title','May 1st, 2021','description','high');

describe('updateTodo', () => {
    it('updateTodo should update a todo', () => {
        todoExample1.updateTodo('title2','May 2nd, 2021','description2','low');
        expect(todoExample1.date).toBe('May 2nd, 2021')
    })
});

let projects = initStart.getProjects();
let projectExample = new project.Project('projectExample');

let todoExample2 = new todo.Todo('title3','May3rd, 2021','description3','medium');
projectExample.todos.push(todoExample2,todoExample1);

describe('removeTodo', () => {
    it('It should remove a todo', () => {
        todo.removeTodo(projects, projectExample, projectExample.todos[0].id);
        expect(projectExample.todos.length).toEqual(1)
    })
})

describe('updateStatus', () => {
    it('It should update a status', () => {
        todo.updateStatus(projects, projectExample, projectExample.todos[0].id);
        expect(projectExample.todos[0].status).toEqual(true)
    })
})

let projectExample2 = new project.Project('projectExample2');
projects.push(projectExample2)
describe('createTodo', () => {
    it('It should create a todo', () => {
        let newTodo = todo.createTodo('title', 'april 2nd 2022', 'description', 'High', 'projectExample2');
        projects = initStart.getProjects()
        expect(projects[projects.length-1].todos[0].title).toBe('title')
        
    })
})