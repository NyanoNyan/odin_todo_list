import {differenceInDays} from 'date-fns'


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

    const storeDateInfo = (dueDate, taskName) => {

        // Issues with pre built tasks as they don't have data stored in them 
        // such as due date. So won't work when submittng it's due date.

        console.log('I am in store Date info');
        console.log(taskName)
        let getTask = JSON.parse(localStorage.getItem(taskName));
        console.log(getTask);

        getTask.dueDate = dueDate;
        console.log(dueDate)
        localStorage.setItem(taskName, JSON.stringify(getTask));




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
            storeProjects,
            storeDateInfo}

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
        // console.log('Task_content is ');
        // console.log(task_content)
        // Is there a better way to do this?

        // old way
        // let task_content = document.getElementById('add-tasks');
        let modalValues = setUpModal();


        let li = document.createElement('li');
        let input = document.createElement('input');
        let button = document.createElement('button');
        let deleteButton = document.createElement('button');
        
        // let form = document.createElement('form');
        // let input2 = document.createElement('input');

        li.id = valueTask;

        input.type = 'checkbox';
        input.className = 'checkbox-item';

        button.className = 'task-name';
        button.textContent = valueTask;

        // form.className = "date-form";
        // form.style.display = "none";
        // input2.type = "date";
        // input2.class = "date-data";
        // input.name = "due-date";

        deleteButton.classList = 'delete-button';
        deleteButton.textContent = 'X'

        li.appendChild(input);
        li.appendChild(button);
        li.appendChild(deleteButton);
        li.appendChild(modalValues);
        

        // form.appendChild(input2);
        // li.appendChild(form);

        task_content.appendChild(li);


    }

    const setUpModal = () => {

        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let span = document.createElement('span');

        let form = document.createElement('form');
        let p = document.createElement('p');
        let input1 = document.createElement('input');
        let input2 = document.createElement('input');

        div1.id = "myModal";
        div1.className = "modal";

        div2.className = "modal-content";
        span.className = "close-modal";
        span.innerHTML = '&times;'
        
        form.className = "date-form";
        p.textContent = "Set Due Date";
        input1.type = "date";
        input1.id = "date-date";
        input1.className = "date-data";
        input1.name = "due-date";
        input2.type = "submit";
        input2.value = "Submit";

        form.appendChild(p);
        form.appendChild(input1);
        form.appendChild(input2);

        div2.appendChild(span);
        div2.appendChild(form);
        div1.appendChild(div2);

        return div1



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

    return {getData,
        setUpModal}

}


const projectMaker = () => {

    let addDOM_modal = addDOM()

    
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

        let modal_values = addDOM_modal.setUpModal()

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
        sidebarButton.className = "proj-name";

        li.appendChild(input);
        li.appendChild(button1);
        li.appendChild(button2);
        li.appendChild(modal_values);

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


const addDate = () => {


    const setDate = () => {

        let task_names = document.querySelectorAll('#add-tasks');
        
        Array.from(task_names).forEach(function (task_name) {
            task_name.addEventListener('click', datePopup);
        });
    

        function datePopup(e) {

            // console.log(e.target.parentNode.childNodes);
            
            // Checking if the button clicked is the task button only
            if (e.target.nodeName === "BUTTON" && e.target.className == "task-name") {
                // console.log(e.target.className)
                // let date_form = e.target.nextElementSibling.nextElementSibling;

                // Get unique modal box depending on the button clicked on different project.
                // Make a Modal Box
                // Get the modal
                // let modal = document.getElementById("myModal");
                let modal = checkerDomElement('myModal',e.target.parentNode.childNodes, 'id');
      
                let modalContent = checkerDomElement('modal-content', modal.childNodes, 'class');
                // console.log(modalContent.childNodes);

                // Get the <span> element that closes the modal
                // let span = document.querySelector('.close-modal');
                let span = checkerDomElement('close-modal',modalContent.childNodes, 'class');

                // When the user clicks on the button, open the modal
                modal.style.display = "block";

                // When the user clicks on <span> (x), close the modal
                
                span.onclick = function(e) {
                    // Using this because of event bubbling
                    e.stopPropagation();
                    // console.log(modal.style.display)
                    modal.style.display = "none";

                    // console.log(modal.style.display)


                }
                // When the user clicks anywhere outside of the modal, close it
                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                } 

            }




        }

    }

    const domDiffDate = (dueDate, currentDate) => {

        console.log(differenceInDays(dueDate, currentDate));



    }

    return {
        setDate,
        domDiffDate
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
    projectMaker,
    addDate,
    checkerDomElement
} 

// One for adding a Note object in an object.
// One for adding it in local storage.
// One for making elements and attaching in the website

// Or can just make a key


// https://stackoverflow.com/questions/42020577/storing-objects-in-localstorage

// Making objects key variable different
// https://stackoverflow.com/questions/11508463/javascript-set-object-key-by-variable