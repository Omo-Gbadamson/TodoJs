const inputBox = document.querySelector(".typespace input")
const addBtn = document.querySelector(".typespace button")
const todoList = document.querySelector(".todolist")
const deleteAll = document.querySelector(".footer button")

inputBox.onkeyup=()=>{
    let userData = inputBox.value;
    if(userData.trim()!=0){
        addBtn.classList.add("active")
    }else{
        addBtn.classList.remove("active")
    }
}
showTasks()

addBtn.onclick=()=>{
    let userData = inputBox.value
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage==null){
        listArr = []       
    }else{
        listArr = JSON.parse(getLocalStorage)
    }
    listArr.push(userData)
    localStorage.setItem("New Todo", JSON.stringify(listArr))
    showTasks()
    addBtn.classList.remove("active")
}

function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage==null){
        listArr = []       
    }else{
        listArr = JSON.parse(getLocalStorage)
    }
    const pendingTask = document.querySelector(".num2do")
    pendingTask.textContent = listArr.length
    if(listArr.length > 0){
        deleteAll.classList.add("active")
    }else{
        deleteAll.classList.remove("active")
    }
    let newLiTag = '';
    listArr.forEach((element, index)=>{
        newLiTag += `<li>${element} <span onclick= "deleleTask(${index})">Del</span></li>`
    })
    todoList.innerHTML = newLiTag
    inputBox.value = "";
}

function deleleTask(item){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage)
    listArr.splice(item, 1)
    localStorage.setItem("New Todo", JSON.stringify(listArr))
    showTasks()
}

deleteAll.onclick =()=>{
    listArr=[]
    localStorage.setItem("New Todo", JSON.stringify(listArr))
    showTasks()
}