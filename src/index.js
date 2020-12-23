console.log('hello')

import { changeProject } from './modules/view';
import { getTask } from './modules/getData'
import { storeData } from './modules/addData'

let dataStore ;
let notesStorage = [];

// Goes to different projects section
changeProject()

getTask()

// dataStore = storeData()
// dataStore.localStorageVal()


// Need to find out a way to make sure when the checkbox is clicked that button and
// the checkbox gets deleted

// Need to learn about local storage