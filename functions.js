var form = document.getElementById("taskForm")
var taskList = document.getElementById("taskList")

form.addEventListener("submit",  (event) =>{
event.preventDefault();
var data = new FormData(event.target);
var submit = Object.fromEntries(data);

var newtask = document.createElement("span")
newtask.classList .add("taskItem")
newtask.append(submit.task);

taskList.appendChild(newtask)
});