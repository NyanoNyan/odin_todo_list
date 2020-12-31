import { viewChanger } from './modules/view';
import { getTask, getProjects } from './modules/getData';
import { storeData,addDOM, projectMaker } from './modules/addData';
import {deleteItems, completedTasks} from './modules/complete_and_delete';

let dataStore ;
let notesStorage = [];
let mainView = viewChanger();

let loadDefaultProjects = storeData();
let repopulateData = addDOM();
let repopulateProjects = projectMaker();

let deleteAction = deleteItems();
let checkboxComplete = completedTasks();
// Goes to different projects section
mainView.changeProject()




// Repopulates the data from local storage when user refreshes.
// loadDefaultProjects.storeDefaultProject()

// If there is no key for storing project name and if nothing is inside local storage
// initialize localstorage for project names.
if (localStorage.length == 0 && localStorage.key(0) != '!projectNames!') {
    localStorage['!projectNames!'] = JSON.stringify([]);
}

repopulateProjects.loadAllProjects();
repopulateData.getData();


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
// previous task-content id values.

// !!! Also need to add date and time on when it's due and priority 

// !!! How to make two divs not touch