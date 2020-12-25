import { changeProject } from './modules/view';
import { getTask } from './modules/getData';
import { storeData,addDOM } from './modules/addData';
import {deleteItems} from './modules/complete_and_delete';

let dataStore ;
let notesStorage = [];
let repopulateData = addDOM();
let deleteAction = deleteItems();
// Goes to different projects section
changeProject();

// Repopulates the data from local storage when user refreshes.
repopulateData.getData();

// Gets the data from form submition
getTask();


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