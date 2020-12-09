console.log('hello')

import Note from './functions/notes'
import { changeProject } from './functions/view';

let notesStorage = [];

// Goes to different projects section
changeProject()

const note1 = Note('Joey', "It's time to duel!");
console.log(note1.noteDetails())


// Need to find out a way to make sure when the checkbox is clicked that button and
// the checkbox gets deleted

// Need to learn about local storage