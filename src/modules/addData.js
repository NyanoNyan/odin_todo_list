import Note from './modules/notes'


function addTask() {

    let textText = document.getElementById('form-input');
    textText.addEventListener('keypress', gatherData);

    function gatherData(e) {
        if (e.code === 'Enter') {
            e.preventDefault();
            
            let taskValue = textText.value;
            const note_1 = Note(taskValue);
           }
    }


}






export {
    addTask
} 


// Old code using less code.
// addForm.addEventListener("keypress", function(event) {
//     if (event.code === 'Enter') {
//      event.preventDefault();
//      alert('hello')
//     }
//   });