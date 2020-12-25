
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
 
    const repeatChecker = () => {
    
        let tasks = document.querySelectorAll('.task-name');
    
        for (let i=0; i<tasks.length; i++){
            console.log(tasks[i].textContent)
        }
    
    }

    return {StorageVal,
            repeatChecker}

};

// !!! Get the data from local storage and add them using DOM

const addDOM = () => {

    const getData = () => {

        for (let i=0; i<localStorage.length; i++) {
            let value = JSON.parse(localStorage.getItem( localStorage.key(i)));
            console.log(`The task title is: ${value.taskTitle}`)
            checkExists(value.taskTitle);
        }

    }

    const addHtml = (valueTask) => {

        let task_content = document.getElementById('add-tasks');

        let li = document.createElement('li');
        let input = document.createElement('input');
        let button = document.createElement('button');
        let deleteButton = document.createElement('button');

        input.type = 'checkbox';
        button.className = 'task-name';
        button.textContent = valueTask;
        deleteButton.classList = 'delete-button';
        deleteButton.textContent = 'X'

        li.appendChild(input);
        li.appendChild(button);
        li.appendChild(deleteButton);

        task_content.appendChild(li);

    }

    const checkExists =(taskTitle) => {

        let domTasks = document.querySelectorAll('.task-name');
        let arrayTasks = [];

        // Get all the tasks name and put it in an array
        for (let i=0; i<domTasks.length; i++) {
            arrayTasks.push(domTasks[i].textContent);
        }

        // Let's check this with the taskTitle we want to put in from local storage

        if (arrayTasks.includes(taskTitle)==false) {
            addHtml(taskTitle)
        }




    }

    return {getData}

}


export {
    storeData, 
    addDOM
} 

// One for adding a Note object in an object.
// One for adding it in local storage.
// One for making elements and attaching in the website

// Or can just make a key


// https://stackoverflow.com/questions/42020577/storing-objects-in-localstorage

// Making objects key variable different
// https://stackoverflow.com/questions/11508463/javascript-set-object-key-by-variable