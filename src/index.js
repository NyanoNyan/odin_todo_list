console.log('hello')

import Note from './modules/notes'
import { changeProject } from './modules/view';
import { addTask } from './modules/addData'

let dataStore = [];
let notesStorage = [];

// Goes to different projects section
changeProject()

const note1 = Note('Joey', "It's time to duel!");
console.log(note1.noteDetails())

addTask()





// Need to find out a way to make sure when the checkbox is clicked that button and
// the checkbox gets deleted

// Need to learn about local storage