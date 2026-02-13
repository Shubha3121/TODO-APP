const todoInput = document.getElementById("myInput");
const addbtn = document.getElementById("addBtn");
const myList = document.getElementById("tasklist");

addbtn.addEventListener('click',function() {
    const taskText = todoInput.value.trim();

    if(taskText === ""){
        alert("Please enter  the tassk!!");
        return;
    }

    const newLi = document.createElement('li');
    newLi.textContent = taskText;
    myList.appendChild(newLi);
    todoInput.value = "";
});