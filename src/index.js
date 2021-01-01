import { viewChanger } from './modules/view';
import { getTask, getProjects, getDate } from './modules/getData';
import { storeData,addDOM, projectMaker, addDate } from './modules/addData';
import {deleteItems, completedTasks} from './modules/complete_and_delete';

let dataStore ;
let notesStorage = [];
let mainView = viewChanger();

let loadDefaultProjects = storeData();
let repopulateData = addDOM();
let repopulateProjects = projectMaker();

let addDate1 = addDate();

let deleteAction = deleteItems();
let checkboxComplete = completedTasks();
// Goes to different projects section
mainView.changeProject()




// Repopulates the data from local storage when user refreshes.
// loadDefaultProjects.storeDefaultProject()

// If there is no key for storing project name and if nothing is inside local storage
// initialize localstorage for project names.
if (localStorage.getItem('!projectNames!') === null) {
    localStorage['!projectNames!'] = JSON.stringify([]);
}
// !!! Bug here, what if somone already adds in the task first then adds the project
// It won't register it beign the first key and localStorage will already be filled up.
// Maybe contains to check if it's in there? 

repopulateProjects.loadAllProjects();
repopulateData.getData();

addDate1.setDate()

// Testing
getDate()

// Gets the data from form submition
getTask();
getProjects();

// markout the completed tasks
checkboxComplete.markDone();


// delete items
deleteAction.delTasks();


// !!! Need to initialize and put the data which are stored in the local storage when
// the page loads.

// !!! Need to make a factory function that triggers of button deletion when checkbox
// is ticked

// dataStore = storeData()
// dataStore.localStorageVal()


// Need to find out a way to make sure when the checkbox is clicked that button and
// the checkbox gets deleted

// Need to learn about local storage


// !!! Need to make this work for the second proejct section

// !!! Add button to add more projects. Would need to make a new html with all of the things inside as
// previous task-content id values. Done

// !!! Also need to add date and time on when it's due and priority 

// !!! How to make two divs not touch

// !!! Hover for the buttons

// !!! Add due date and after remaining days for tasks


// !!! Fix why Modal is not working for new project and tasks creation 
// check addData where you added
// Double check class and id names
// Why is it only working for one project?