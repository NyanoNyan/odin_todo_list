
console.log('hello')
let sidebar = document.getElementById('sidebar');
sidebar.addEventListener('click', changeView);


function changeView(e) {

    let contentType = e.target.textContent;
    let tab_content = document.getElementsByClassName('tab-content');

    for (let i = 0; i < tab_content.length; i ++){

        tab_content[i].style.display = "none"

    }

    document.getElementById(contentType).style.display = "block";

}


// Need to find out a way to make sure when the checkbox is clicked that button and
// the checkbox gets deleted