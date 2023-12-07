const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');
const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', addTask)

// add task on click enter button 

inputBox.addEventListener('keypress', (e)=>{
    if(e.key === 'Enter' && inputBox.value !== ''){
        addTask()
    }
})

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something")
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span')
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
    inputBox.value = ''
}

// add and remove close button 

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// save data on localStorage 

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// show saved data after refresh page 
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data')
}

showTask();


