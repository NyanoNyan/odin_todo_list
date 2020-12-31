const storeData = () => {

    
    // taskList must be an array
    const StorageVal = (taskName, noteObj) => {

        // !!! checker of duplicate
        // add unique id to each task item
        repeatChecker()

        localStorage[taskName] = JSON.stringify(noteObj);
        // localStorage.setItem(taskName, JSON.stringify(noteObj));
        // console.log(localStorage)

        let my_object = JSON.parse(localStorage.getItem(taskName));
        // console.log(my_object)
        // localStorage.clear()

    }

    /// Get all the project names, parse then then append then add it back again.


    // !!! Can't extract key but can extract value
    // Need to have a look at this issue.

    const storeProjects = (projectName) => {

        // Set up project name storage

        // console.log('local storage start' + localStorage.getItem('!projectNames!'));

        let getNames = JSON.parse(localStorage.getItem('!projectNames!'));
        // console.log('testing' + getNames)
        // console.log('First instance of project name:' + projectName)
        getNames.push(projectName);

        // storeList.push(projectName);
        // console.log(storeList);
        localStorage.setItem('!projectNames!', JSON.stringify(getNames));


        // let test = localStorage.key(0);
        // console.log('testing is :' + test);


        // console.log('local storage end' + localStorage.getItem('!projectNames!'))

        // console.log(localStorage.getItem('!projectNames!'));
        // !!! How to store it properly in a list
        // console.log(typeof localStorage.getItem('!projectNames!'));

        // console.log('Adding more')

        // let currentProjectNames = JSON.parse(localStorage.getItem('!projectNames!'));

        // storeList.push(currentProjectNames);

        // localStorage['!projectNames!'] = JSON.stringify(storeList);
        


        // console.log('Adding just one')
        // localStorage['!projecNames!'] = JSON.stringify(projectName);
    
        // let defaultReportData = JSON.parse(localStorage.getItem('!projecNames!'));
        // console.log(defaultReportData)

        // what if it's empty at the beginning how would you add?

    }




    // const storeDefaultProject = () => {
        
    //     // Store default projects
    //     localStorage['projectNames'] = JSON.stringify(['Today', 'Project One']);

    // }
 
    const repeatChecker = () => {
    
        let tasks = document.querySelectorAll('.task-name');
    
        for (let i=0; i<tasks.length; i++){
            console.log(tasks[i].textContent)
        }
    
    }

    return {StorageVal,
            repeatChecker,
            storeProjects}

};

// !!! Get the data from local storage and add them using DOM

// !!! Need to figure out how to add the tasks when it's loaded again
// but in different project path.

const addDOM = () => {


    const getData = () => {

        for (let i=0; i<localStorage.length; i++) {

           

                // Checking it's not going throught the local storage which stored the project names
                if (localStorage.key(i)[0] != '!' && localStorage.key(i).slice(-1) != '!' ) {

                    let value = JSON.parse(localStorage.getItem( localStorage.key(i)));
                    // console.log(`The task title is: ${value.taskTitle}`)
                    // console.log(`The project title is: ${value.projectName}`)
                    checkExists(value.taskTitle, value.projectName);

                } 



        }

    }

    const addHtml = (valueTask, projectNameN='') => {

        let currentProj = '';

        if (projectNameN == ''){

            // Get the current project name that is selected
            currentProj = document.querySelector('.unique-current-project').id;
            // console.log(currentProj)

        } else if (projectNameN != '') {

            currentProj = projectNameN;

        }

        // Get the element of the project name which has all the lists in the childnodes
        let gatherProj = document.getElementById(currentProj);

        let taskContent2Ele = checkerDomElement('task-content2', gatherProj.childNodes, 'class');
        // console.log(taskContent2Ele)
        
        // new way of getting the task list of each project
        let task_content = checkerDomElement('add-tasks', taskContent2Ele.childNodes, 'id');
        // Is there a better way to do this?

        // old way
        // let task_content = document.getElementById('add-tasks');



        let li = document.createElement('li');
        let input = document.createElement('input');
        let button = document.createElement('button');
        let deleteButton = document.createElement('button');

        li.id = valueTask;

        input.type = 'checkbox';
        input.className = 'checkbox-item';

        button.className = 'task-name';
        button.textContent = valueTask;

        deleteButton.classList = 'delete-button';
        deleteButton.textContent = 'X'

        li.appendChild(input);
        li.appendChild(button);
        li.appendChild(deleteButton);

        task_content.appendChild(li);

    }

    const checkExists =(taskTitle, projectName) => {

        let domTasks = document.querySelectorAll('.task-name');
        // let domProjects = document.querySelectorAll('.task-name');

        let arrayTasks = [];
        let arrayProjects = []; 

        // console.log('here')
        // console.log(arrayProjects);
        // console.log(projectName);

        // Get all the tasks name and put it in an array
        for (let i=0; i<domTasks.length; i++) {
            arrayTasks.push(domTasks[i].textContent);
        }

        // Let's check this with the taskTitle we want to put in from local storage

        if (arrayTasks.includes(taskTitle)==false) {
            addHtml(taskTitle, projectName);
        }


    }

    return {getData}

}


const projectMaker = () => {

    const addProject = (projectName) => {

        let mainTop = document.getElementById('task-content');

        let sidebarValue = document.getElementById('sidebar-tasks');
        let li_sidebar = document.createElement('li');
        let sidebarButton = document.createElement('button');

        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let input = document.createElement('input');
        let button1 = document.createElement('button');
        let button2 = document.createElement('button');

        div1.id = projectName;
        div1.className = 'tab-content';
        div1.style = 'display: none';
        
        div2.className = 'task-content2';

        ul.id = 'add-tasks';
        li.id = 'Example task';
        input.className = "checkbox-item";
        input.type = "checkbox";

        button1.className = "task-name";
        button1.textContent = "Example task";
        button2.className = "delete-button";
        button2.textContent = "X";

        li.appendChild(input);
        li.appendChild(button1);
        li.appendChild(button2);

        ul.appendChild(li);

        div2.appendChild(ul);
        div1.appendChild(div2);

        mainTop.appendChild(div1);

        // Adding the task button;
        sidebarButton.textContent = projectName;
        li_sidebar.appendChild(sidebarButton);
        sidebarValue.appendChild(li_sidebar);

    }

    const loadAllProjects = () => {

        let projectMaker2 = projectMaker();
        let getNames = JSON.parse(localStorage.getItem('!projectNames!'));

        if (getNames != null) {
            for (let i=0; i<getNames.length; i++)  {

                projectMaker2.addProject(getNames[i]);
            }

        }
  



    }



    return {
        addProject,
        loadAllProjects
    }


}

function checkerDomElement(look_value, dom_collection, class_or_id) {

    for (let i=0; i<dom_collection.length; i++) {

        if (class_or_id == 'id') {

            if (dom_collection[i].id == look_value){
                return dom_collection[i];
            }
        } else if (class_or_id == 'class') {
            // console.log(dom_collection[i])
            if (dom_collection[i].classList == look_value) {
                return dom_collection[i];
            }
        }
        
    }

}



export {
    storeData, 
    addDOM,
    projectMaker
} 

// One for adding a Note object in an object.
// One for adding it in local storage.
// One for making elements and attaching in the website

// Or can just make a key


// https://stackoverflow.com/questions/42020577/storing-objects-in-localstorage

// Making objects key variable different
// https://stackoverflow.com/questions/11508463/javascript-set-object-key-by-variable