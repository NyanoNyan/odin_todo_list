

const deleteItems = () => {

    

    const delTasks = () => {

        let taskContentDiv = document.querySelector('.task-content2');
        let buttonTask = 
        taskContentDiv.addEventListener('click', strikethrough);

        function strikethrough(e) {
            if(e.target.classList.contains('delete-button')) {
                let div = e.target.parentNode.childNodes;
                // console.log(div);

                for (let i=0; i<div.length; i++) {
                    if (div[i].classList == 'task-name'){
                        div[i].classList = "task-name line-through"
                    }

                }
                // e.target.parentNode.childNodes[3].classList = "task-name line-through"
                // // console.log(e.target.parentNode.childNodes);
                // console.log(e.target.parentNode.childNodes[3].classList[0])

            }

        }


    }


    return {delTasks}


}


export {
    deleteItems
} 