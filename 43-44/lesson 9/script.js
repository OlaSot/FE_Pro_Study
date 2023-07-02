const form = document.querySelector('.add_task');
const tasks = document.querySelector('.tasks');
let tasksArray = [];




form.addEventListener('submit', function(event){
    event.preventDefault();
    const {title, priority} = event.target;


    tasksArray.push({
        id: Date.now(),
        title: title.value,
        priority: priority.value,
    });

   

    // const title = event.target.title;
    // const priority = event.target.priority
    rerender()
    event.target.reset()

})




function createTask(id, title, priority) {
   const container = document.createElement("div")
   const pTitle = document.createElement("p")
   const pPriority = document.createElement("p")
   const rButton = document.createElement("button")
   rButton.innerText = "delete"
   pTitle.innerText = title;
   pPriority.innerText = priority;
    
   
   rButton.addEventListener('click', function(){
        // event.preventDefault(); 
        container.remove();
    })


    container.append(pTitle, rButton)
    if (+priority === 1){
        container.style.backgroundColor = 'red'
    } else {
        container.style.backgroundColor = 'grey'
    }

    // все что пишем в коде после ретёрн не отработает
    return container
}

function rerender() {
    tasks.innerText = ''
    tasksArray.forEach(function({id, title, priority}){
        const newElem = createTask(id, title, priority);
        tasks.append(newElem)
    })
}



// function createTask(title, priority){
    // реализовать процесс формирования
    // карточки с задачей
    // createElement
    // append
    // innerText
// }

// {/* <div>
//     <p>title</p>
//     <p>priority</p>
// </div> */}

// реализовать вызов createTask в процессе обработки 
// отправки формы

// доработать createTask таким образом, чтобы 
// данная функция возвращала div с параграфами

// то, что возвращает createTask необходимо добавить 
// в div с классом tasks