(()=>{"use strict";console.log("hello"),document.getElementById("sidebar").addEventListener("click",(function(e){let t=e.target.textContent,n=document.getElementsByClassName("tab-content");for(let e=0;e<n.length;e++)n[e].style.display="none";document.getElementById(t).style.display="block"})),function(){let e=document.getElementById("form-input"),t={taskValue:"",projectName:e.parentElement.parentElement.id},n=(()=>{const e=()=>{let e=document.querySelectorAll(".task-name");for(let t=0;t<e.length;t++)console.log(e[t].textContent)};return{StorageVal:(t,n)=>{e(),localStorage[t]=JSON.stringify(n);let l=JSON.parse(localStorage.getItem(t));console.log(l)},repeatChecker:e}})();e.addEventListener("keypress",(function(l){if("Enter"===l.code&&(l.preventDefault(),t.taskValue=e.value,"form-input",document.getElementById("form-input").value="",""!=t.taskValue)){let e=((e,t,n="")=>{const l=()=>e,a=()=>t;return{changeDescription:e=>{n=e},noteDetails:()=>{console.log(` The Title is: ${a()} \n The project name is: ${l()}`)},setupData:()=>({projectName:l(),taskTitle:a(),description:n,dueDate:""})}})(t.projectName,t.taskValue);n.StorageVal(t.taskValue,e.setupData()),(()=>{const e=e=>{let t=document.querySelectorAll(".task-name"),n=[];for(let e=0;e<t.length;e++)n.push(t[e].textContent);0==n.includes(e)&&(e=>{let t=document.getElementById("add-tasks"),n=document.createElement("li"),l=document.createElement("input"),a=document.createElement("button");l.type="checkbox",a.className="task-name",a.textContent=e,n.appendChild(l),n.appendChild(a),t.appendChild(n)})(e)};return{getData:()=>{for(let t=0;t<localStorage.length;t++){let n=JSON.parse(localStorage.getItem(localStorage.key(t)));e(n.taskTitle)}}}})().getData()}}))}()})();