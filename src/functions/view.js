// For views section


function changeProject() {

    let sidebar = document.getElementById('sidebar');
    sidebar.addEventListener('click', changeView);

    function changeView(e) {

        let contentType = e.target.textContent;
        let tab_content = document.getElementsByClassName('tab-content');

        for (let i = 0; i < tab_content.length; i ++){

            tab_content[i].style.display = "none";

        }

        document.getElementById(contentType).style.display = "block";

    }

}

export {
    changeProject
} 