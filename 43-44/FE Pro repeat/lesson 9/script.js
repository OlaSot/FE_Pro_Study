const form = document.querySelector('.add_task')
const tasks = document.querySelector('.tasks')
let tasksArray = []

form.addEventListener('submit', function(event){
    event.preventDefault()
    //нужно добраться до элемента формы
    //у event есть свойство таргет и оно ссылается на событие

    // const title = event.target.title
    // const priority = event.target.priority 

    // event.target это объект
    //через деструктуризацию

    const {title, priority} = event.target //это ссылки на поля ввода

    tasksArray.push({
        id: Date.now(), 
        title: title.value,
        priority: priority.value,
    })

    // const newElem = createTask(title.value, priority.value) //1
    // tasks.append(newElem) //3

    // console.log(title.value, priority.value); // value позволяет считывать значение
    rerender()
    event.target.reset() //очищает поля ввода
})

function createTask(id, title, priority) { 
    const container = document.createElement('div')
    const tElem = document.createElement('p')
    
    tElem.innerText = title

    if (+priority === 1) { //значение считывается из формы всегда строкой, поэтому надо преобраховать результат к числау с помощью +
        container.style.backgroundColor = '#e74c3c'
    } else {
        container.style.backgroundColor = '#ecf0f1'
    }

    const btn = document.createElement('button')
    btn.innerText = 'Delete'

    container.append(tElem, btn)

    btn.addEventListener('click', function(){
        tasksArray = tasksArray.filter(function(item){
            return item.id !== id
        })
        
        // container.remove(); //Метод remove() в JavaScript используется для удаления элемента из DOM (Document Object Model) - древовидной структуры, которая представляет все элементы веб-страницы. Кнопка удалить
        rerender()
    })
    
    
    //все что пишем после ретерна не отработает
    return container; //2
}


function rerender() {
    tasks.innerText = ''
    tasksArray.forEach(function({id, title, priority}){
        const newElem = createTask(id, title, priority);
        tasks.append(newElem)
    })
}



// 1.реализовать вызов createTask в процессе обработки 
// отправки формы

// 2.доработать createTask таким образом, чтобы 
// данная функция возвращала div с параграфами

// 3.то, что возвращает createTask необходимо добавить 
// в div с классом tasks