

const deleteItems = () => {

    
    // Need to delete tasks on the browser using DOM 
    // Need to delete the value from the local storage
    const delTasks = () => {

        

        let taskContentDiv = document.querySelector('#task-content');
        taskContentDiv.addEventListener('click', deleteTask);


        function deleteTask(e) {

            let div = e.target.parentNode;
            // get the takss list, ul list
            let mainNode = div.parentNode;

            if(e.target.classList.contains('delete-button')) {
                
                if(confirm('Are you sure the Krabby Patty formula will be deleted, aka the task.')) {

                    mainNode.removeChild(div);
                    // console.log(div.id);

                    delStorageLocal(div.id);

                }


             }

        }
        
    }

    const delStorageLocal = (item_obj) => {

        localStorage.removeItem(item_obj);

    }





    return {delTasks}

}


const completedTasks = () => {

    const markDone = () => {

        let taskContentDiv = document.getElementById('task-content');
        // let taskContentDiv = document.querySelector('.task-content2');


        taskContentDiv.addEventListener('click', strikethrough);

        function strikethrough(e) {

            if(e.target.classList.contains('checkbox-item')) {

                let div = e.target.parentNode.childNodes;
                // console.log(div)

                // console.log(e.target.checked)

                // Condtional to put a strikethrough when it is ticked
                // and take it off when it is ticked off
                if (e.target.checked == true) {
                    // for task
                    for (let i=0; i<div.length; i++) {
                        if (div[i].classList == 'task-name'){
                            div[i].classList = "task-name line-through"
                        }
                    // for dates
                        if (div[i].className == 'days-remaining') {
                            div[i].className = "days-remaining line-through"
                        }
    
                    }

                } else if (e.target.checked == false) {
                    for (let i=0; i<div.length; i++) {
                        if (div[i].classList == 'task-name line-through'){
                            div[i].classList = "task-name"
                        }

                        if (div[i].className == 'days-remaining line-through'){
                            div[i].className = "days-remaining"
                        }

                    }
                }
                // console.log(div);


                // e.target.parentNode.childNodes[3].classList = "task-name line-through"
                // // console.log(e.target.parentNode.childNodes);
                // console.log(e.target.parentNode.childNodes[3].classList[0])

            }

        }

    }
    return {
        markDone
    }

}


export {
    deleteItems,
    completedTasks
} 