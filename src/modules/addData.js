
let notesMainStore = {}

// console.log(getTask())

const storeData = () => {

    // const setupNote = ()
    

    // taskList must be an array
    const localStorageVal = (projectName, taskList) => {


        localStorage.setItem(taskList, projectName);

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


    return {localStorageVal}

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