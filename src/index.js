import { viewChanger } from './modules/view';
import { getTask } from './modules/getData';
import { storeData,addDOM } from './modules/addData';
import {deleteItems, completedTasks} from './modules/complete_and_delete';

let dataStore ;
let notesStorage = [];
let mainView = viewChanger();
let repopulateData = addDOM();
let deleteAction = deleteItems();
let checkboxComplete = completedTasks();
// Goes to different projects section
mainView.changeProject()

// Repopulates the data from local storage when user refreshes.
repopulateData.getData();

// Gets the data from form submition
getTask();

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