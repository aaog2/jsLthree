// UI
const formel = document.getElementById('form');
const inputel = document.getElementById('input');
const todoul = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));
console.log(todos);
console.log(typeof todos);

if(todos) {
    todos.forEach(function (todo) {
        addtodo(todo);
    })
}

formel.addEventListener('submit',(e)=>{
    // console.log("hey");

    addtodo();

    e.preventDefault();
});

function addtodo(todo){
    // console.log('i am working');

    let todotext = inputel.value;

    if(todo){
        todotext = todo.text;
    }

    if(todotext){
        const li = document.createElement("li");

        if(todo && todo.complete){
            li.classList.add("completed");
        }



        li.appendChild(document.createTextNode(todotext));
        todoul.appendChild(li);
        inputel.value = "";

        // add to localStorage
        updatelocalstorage();

        // add linethrough by left click
        li.addEventListener('click',()=>{
            li.classList.toggle("completed");
            updatelocalstorage();
        });

        // remove by rightclick
        li.addEventListener('contextmenu',(e)=>{
            li.remove();
            updatelocalstorage();

            e.preventDefault();
        })

    }else {
        window.alert('Enter your todo');
    }
}

function updatelocalstorage(){
    // console.log("storage is ready");

    todolis = document.querySelectorAll('li');
    // console.log(todolis);

    const todos = [];

    todolis.forEach(todoli=>{
        // console.log(todoli);

        todos.push({
            text : todoli.innerText,
            complete : todoli.classList.contains("completed")
        });

        // console.log(todos);
    })

    localStorage.setItem('todos',JSON.stringify(todos));
}

// 22NF WDFXXXX