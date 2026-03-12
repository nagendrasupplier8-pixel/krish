function addTask(){

const input = document.getElementById("taskInput");

const task = input.value;

if(task === "") return;

const li = document.createElement("li");

li.innerText = task;

li.onclick = function(){
li.style.textDecoration = "line-through";
};

document.getElementById("taskList").appendChild(li);

input.value = "";

}
