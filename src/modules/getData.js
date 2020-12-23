// import Note from './modules/notes'
import { storeData } from './addData'

function getTask() {
    
    let textText = document.getElementById('form-input');
    // This is the project name variable
    let parentElement = textText.parentElement.parentElement.id;
    let storeObj = {taskValue : '', projectName: parentElement}

    let storeDataTest = storeData();

    textText.addEventListener('keypress', gatherData);
    

    function gatherData(e) {
        if (e.code === 'Enter') {
            e.preventDefault();
            
            storeObj.taskValue = textText.value;
            clearText('form-input');
            
           }
        // Testing
        // console.log(storeObj.taskValue!="");
        // console.log(storeObj);
        

        // !!! Feels like this will the main page, importing notes, making notes and 
        // putting them in the local storage. !!!

        // checking if the input is not blank, if it's not blank then send the data.
        if (storeObj.taskValue != "") {
            // console.log(storeObj)
            
            storeDataTest.localStorageVal(storeObj.projectName, storeObj.taskValue);

        }
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