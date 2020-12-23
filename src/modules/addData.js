
let notesMainStore = {}

// console.log(getTask())

const storeData = () => {

    // const setupNote = ()
    

    // taskList must be an array
    const StorageVal = (taskName, noteObj) => {


        // !! New thing how to put note class object in local storage for use

        // What about storing objects here now from Note class
        // Give a random note number each time for a new item or a unique id, no
        // duplicates
        
        let test = {name:"test", time:"Date 2017-02-03T08:38:04.449Z"};
        // atm need to figure out how to use string for the key name for local storage
        localStorage.setItem(taskName, JSON.stringify(noteObj));
        

        console.log(localStorage)

        let my_object = JSON.parse(localStorage.getItem(taskName));
        console.log(my_object)

        localStorage.clear()
        // let objectStore = {[projectName]:taskList}
        // console.log(objectStore)
        
        
        // // !!! How to make a new object for each project !!!!
       
        // localStorage.setItem('objectStore', JSON.stringify(objectStore))

        // let getObj = localStorage.getItem('objecStore');
        // console.log(getObj)
        // console.log('getObj:', JSON.parse(getObj))

        // let testObject = {'Today':['Today', 'Project One']};
        // localStorage.setItem('testObject', JSON.stringify(testObject));

        // // get the storage back
        // let retreivedObject = localStorage.getItem('testObject');
        // console.log('retreivedObject:', JSON.parse(retreivedObject))

    }


    return {StorageVal}

};




export {
    storeData
} 

// One for adding a Note object in an object.
// One for adding it in local storage.
// One for making elements and attaching in the website

// Or can just make a key


// https://stackoverflow.com/questions/42020577/storing-objects-in-localstorage

// Making objects key variable different
// https://stackoverflow.com/questions/11508463/javascript-set-object-key-by-variable