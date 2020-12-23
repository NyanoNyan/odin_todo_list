// Note Class

let dataList = {
    'Today': {
    },

    'Project One' : {

    }
}

// How to add objects in a object. This to store the task data.
// https://stackoverflow.com/questions/617036/appending-to-an-object



const Note = (projectName, title, description= '') => {

    const getProjectName = () => projectName;
    const getTitle = () => title;
    const getDescription = () => description;

    const changeDescription = newDescription => {
        description = newDescription;
    }

    const noteDetails = () => {
        console.log(` The Title is: ${getTitle()} \n The project name is: ${getProjectName()}`)
    };

    const setupData = () => {
        let dataHold = {
            projectName: getProjectName(),
            taskTitle: getTitle(),
            description: getDescription(),
            dueDate: '',
        }

        return dataHold;
    }

    return {changeDescription, 
        noteDetails,
        setupData}

}


export default Note

// const note1 = Note('Joey', "It's time to duel!");


// console.log(note1.noteDetails())
// console.log('hello')


// Constructor code
// function Note(title, description='') {

//     this.title = title;
//     this.description = description;

// }

// Note.prototype.changeDescription = function(newDescription) {
//     this.description = newDescription
// };

// Note.prototype.noteDetails = function() {
//     console.log(` The Title is: ${this.title} \n The description is: ${this.description}`)
// };


// // Test 
// let test = new Note('New Note');
// test.changeDescription('Time to duel')

// console.log(test.noteDetails());