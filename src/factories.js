const todoFactory = 
    (title, 
    description = '',
    dueDate='',
    priority=0,
    notes='',
	) => {
        let self = {};
        let completed = false;

        const setCompleted = (bool) => { 
            self.completed = bool;
            console.log(title + completed);
        }

        const setTitle = (titleEdit) => self.title = titleEdit;
        
        const setDescription = (descript) => self.description = descript;

        //Edits for all other categories 
        self = {title, description, dueDate, priority, completed, setTitle, setCompleted, setDescription};

        return self;
    };

const projectFactory = 
    (title, 
    todos=[], 
	defaultProj=false) =>
    {
    	const addTodos = (todo) => todos.push(todo);
    	const changeTitle = (newTitle) => title = newTitle;
    	const setDefault = () =>
        {
	    	removeDefault();
	    	//^ When calling setDefault need way to assure that no other project has default set
            //perhaps a Profile facorty with a default project variable
            //How else can I change the current default project?
	    	defaultProj = true;	
    	};
    	return{title, todos, defaultProj, addTodos, changeTitle, setDefault}
    };

const profileFactory =
    (username,
    password='',
    projects=[]) => {
        let self = {};
        const addProjects = (project) => projects.push(project);
        defaultProj = 0; 
        //How to change insert projectFactory 
        //Link defProj to current default project. LINK not copy.
    };

export { projectFactory, todoFactory};
