(()=>{"use strict";const e=()=>{const e=e=>{let t=document.querySelectorAll(".task-name"),l=[];for(let e=0;e<t.length;e++)l.push(t[e].textContent);0==l.includes(e)&&(e=>{let t=document.getElementById("add-tasks"),l=document.createElement("li"),n=document.createElement("input"),a=document.createElement("button");n.type="checkbox",a.className="task-name",a.textContent=e,l.appendChild(n),l.appendChild(a),t.appendChild(l)})(e)};return{getData:()=>{for(let t=0;t<localStorage.length;t++){let l=JSON.parse(localStorage.getItem(localStorage.key(t)));console.log(`The task title is: ${l.taskTitle}`),e(l.taskTitle)}}}};console.log("hello");let t=e();document.getElementById("sidebar").addEventListener("click",(function(e){let t=e.target.textContent,l=document.getElementsByClassName("tab-content");for(let e=0;e<l.length;e++)l[e].style.display="none";document.getElementById(t).style.display="block"})),t.getData(),function(){let t=document.getElementById("form-input"),l={taskValue:"",projectName:t.parentElement.parentElement.id},n=(()=>{const e=()=>{let e=document.querySelectorAll(".task-name");for(let t=0;t<e.length;t++)console.log(e[t].textContent)};return{StorageVal:(t,l)=>{e(),localStorage[t]=JSON.stringify(l),JSON.parse(localStorage.getItem(t))},repeatChecker:e}})(),a=e();t.addEventListener("keypress",(function(e){if("Enter"===e.code&&(e.preventDefault(),l.taskValue=t.value,"form-input",document.getElementById("form-input").value="",""!=l.taskValue)){let e=((e,t,l="")=>{const n=()=>e,a=()=>t;return{changeDescription:e=>{l=e},noteDetails:()=>{console.log(` The Title is: ${a()} \n The project name is: ${n()}`)},setupData:()=>({projectName:n(),taskTitle:a(),description:l,dueDate:""})}})(l.projectName,l.taskValue);n.StorageVal(l.taskValue,e.setupData()),a.getData()}}))}()})();