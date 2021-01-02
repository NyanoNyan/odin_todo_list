import Note from './notes'
import { storeData, addDOM, projectMaker, checkerDomElement, addDate } from './addData'
import {compareAsc, format} from 'date-fns'


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


function getProjects() {

    let projectCreate = projectMaker();
    let projectLocalStorage = storeData();

    let formProject = document.getElementById('project-form');
    formProject.addEventListener('keypress', passData);


    function passData(e) {

        if (e.code === 'Enter') {
            e.preventDefault();

            // listOfProjects.push(e.target.value);
            // Stores project in local storage has name !projectNames!
            projectLocalStorage.storeProjects(e.target.value)
            
            // Creates project list and everything in it such as tasks and layout of all the html
            projectCreate.addProject(e.target.value);

            clearText('form-input-project');
            

        }


    }

}



// Delete input from using DOM, aka used for 
// deleting a task when the enter has been pressed
function clearText (id) {
    document.getElementById(id).value = "";
}

function getDate (modalContent) {

    let storeData1 = storeData();
    // Test with diff dates
    let addDate1 = addDate();

    // let dateForm = document.getElementsByClassName('date-form');
    // let modal = document.getElementById("myModal");

    // console.log(modalContent.childNodes[1])

    // Get the specific form that is inside the task element
    let test_capture = modalContent.childNodes[1];
    // console.log(test_capture)

    test_capture.addEventListener('submit', collectDate);

    // Array.from(dateForm).forEach(function (dateForm1) {
    //     dateForm1.addEventListener('submit', collectDate);

    // });

    // Need to find out if the submit is the correct submit since it's looping through the whole array.
    // if not need to get that specific clicked dom node form.

    // Need the node. 

    // Should go, click task, open span, get the data fields of span which has submit, put event listener on that
    

    function collectDate(e) {
        // alert('hello')
        e.preventDefault();

        // Get the specific clicked butons date-date value
        // console.log(e.target.childNodes)
        let date_date = checkerDomElement('date-date', e.target.childNodes, 'id').value;

        // Need to get the specific date-date value

        // let date_date = document.getElementById('date-date').value;
        let form_date = new Date(date_date);
        let currentDate = new Date();
        
        // console.log(date_date)

        // Get the task name from the form, using parent nodes and child nodes, lol
        let domListTasks = e.target.parentNode.parentNode.parentNode.childNodes;
        let taskName = checkerDomElement('task-name', domListTasks, 'class').textContent;
        let taskNameNode = checkerDomElement('task-name', domListTasks, 'class');

        // console.log(taskNameNode);
        storeData1.storeDateInfo(form_date, taskName);

        // Testing Get difference in dates
        addDate1.domDiffDate(form_date, currentDate, taskNameNode);

        // Need to feed this data through addData to add the data in localStorage
        // Then need to add this data in index.html using DOM
        // Can also do days remaining.
    }

}



export {
    getTask,
    getProjects,
    getDate
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