import { todoFactory } from './factories.js'
import { projectFactory } from './factories.js'

let defProject = projectFactory('default', [], true); 

let consoleDisplay = (curProj) => 
{
    console.log(curProj.todos);
}

let todo1 = todoFactory('Test CRUD', 'Test CRUD ability of Factories',
    '7/8/2020', 1); 
let todo2 = todoFactory('Projects', 'Write Sample Projects');

let todo3 = todoFactory('Edit data', 'Edit data in project using functions from factories');
defProject.addTodos(todo1);
defProject.addTodos(todo2);
defProject.addTodos(todo3);
consoleDisplay(defProject);

let secondProj = projectFactory('secondary', [todo2]);

//defProject.todos[0].setCompleted(true);
/*
let button = document.querySelector('#update');
button.addEventListener('click', () => {
    defProject.todos[0].setCompleted(true);
    defProject.todos[1].setTitle('Add a second project');
    defProject.todos[2].setDescription('.');
    consoleDisplay(defProject);
    secondProj.setDefault();
    consoleDisplay(secondProj);
});
*/
