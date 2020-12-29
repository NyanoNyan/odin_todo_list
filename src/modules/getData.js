import Note from './notes'
import { storeData, addDOM } from './addData'




function getTask() {
    
    let textText = document.getElementById('form-input');


    let storeDataTest = storeData();
    let test = addDOM();

    textText.addEventListener('keypress', gatherData);
    

    function gatherData(e) {

        // This is the project name variable
        let currentProj = document.querySelector('.unique-current-project');
        let parentElement = currentProj.id;
        // old code
        // let parentElement = textText.parentElement.parentElement.id;
        let storeObj = {taskValue : '', projectName: parentElement}

        if (e.code === 'Enter') {
            e.preventDefault();
            
            storeObj.taskValue = textText.value;
            clearText('form-input');
            
            
            if (storeObj.taskValue != "") {
                // console.log(storeObj.projectName)

                let note = Note(storeObj.projectName, storeObj.taskValue);
                // console.log(`The note obj is ${note.noteDetails()}`)
                storeDataTest.StorageVal(storeObj.taskValue, note.setupData());

                
                test.getData()
    
            }
           }
        // Testing
        // console.log(storeObj.taskValue!="");
        // console.log(storeObj);
        

        // !!! Feels like this will the main page, importing notes, making notes and 
        // putting them in the local storage. !!!

        // checking if the input is not blank, if it's not blank then send the data.

    }



}

// Delete input from using DOM, aka used for 
// deleting a task when the enter has been pressed
function clearText (id) {
    document.getElementById(id).value = "";
}




export {
    getTask
} 


// Old code using less code.
// addForm.addEventListener("keypress", function(event) {
//     if (event.code === 'Enter') {
//      event.preventDefault();
//      alert('hello')
//     }
//   });


// // Gather tasks from object and put them in list to prepare it for the local storage
// function gatherTasks(mainStore, storeObj) {

//     // loop over main storage which has projects and tasks listed in them
//     for (const key in mainStore) {
//         if (storeObj.projectName == key) {
//             mainStore[key].push(storeObj.taskValue);
            
//         }
//     }

// }


// let mainStore = {'Today': [],
//                 'Project One': []}