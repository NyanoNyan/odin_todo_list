// For views section



const viewChanger = () => {

    const changeProject = () => {

        let currentProj = document.querySelector('.unique-current-project');
        
        let sidebar = document.getElementById('sidebar');
        sidebar.addEventListener('click', changeView);
    
        function changeView(e) {
    
            let contentType = e.target.textContent;
            let tab_content = document.getElementsByClassName('tab-content');

            for (let i = 0; i < tab_content.length; i ++){
    
                tab_content[i].style.display = "none";
    
            }
            // console.log(contentType)
            // projectName = contentType;
            
            document.getElementById(contentType).style.display = "block";
            currentProj.id = contentType;

            // Change title
            let title = document.querySelector('.h4-content');
            title.textContent = `${contentType} Tasks`

        }
    }

    return {
        changeProject
    }


}


export {
    viewChanger
} 

// !!! How to make global variable so I can share contentType, the name of the project
// So it knows which group to add it in since one is hidden when form is submitted.