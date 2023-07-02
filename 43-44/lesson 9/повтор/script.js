const form = document.querySelector('.add_task');
const tasks = document.querySelector('.tasks')
let tasksArray = JSON.parse(localStorage.getItem('tasks')) ?? [];





console.log(tasks);

form.addEventListener('submit', function(event){
    event.preventDefault();


const {title, priority} = event.target

tasksArray.push({
    id: Date.now(),
    title: title.value,
    priority: +priority.value,
})


    rerender()
  

    // const title = event.target.title;
    // const priority = event.target.priority;
//    const newElem =  createTask(title.value, priority.value);
//    tasks.append(newElem)

    event.target.reset() 
})


function createTask(id, title, priority) {
    const container = document.createElement('div')
    const ptitle = document.createElement('p') 
    const remove = document.createElement('button')

    remove.innerText = "Delete"
    
    ptitle.innerText = title;

   if (+priority === 1) {
    container.style.backgroundColor = '#e74c3c'
   } else {
      container.style.backgroundColor = '#ecf0f1'
   }

   container.addEventListener('dblclick', function(){
    const task = tasksArray.find(function(item){
        return item.id === id
    })
    task.priority = task.priority === 1 ? 2 : 1;
    rerender()
   })

   remove.addEventListener('click', function(event){
    tasksArray = tasksArray.filter(function(item){
        return item.id !== id

    })
     rerender()
     calculate()
   })
  
    container.append(ptitle, remove)
    return container
    
}

function rerender() {

    tasks.innerText = ''
    tasksArray.forEach(function ({id, title,priority}) {
     const newElem = createTask (id, title, priority)
     tasks.append(newElem)
    })
    localStorage.setItem('tasks', JSON.stringify(tasksArray))
    calculate()
}

rerender();


// создать функцию, calculate. Которая находит кол-во важных и не важных дел
// и выводит в консоль

// tasksArray.forEach(function ({priority}) {
//     let importantCount = 0;
//     let unimportantCount = 0;
//     if (priority === "1") {
//         importantCount++;
//       } else {
//         unimportantCount++;
//       }
//         console.log(`Количество важных дел: ${importantCount}`);
//         console.log(`Количество не важных дел: ${unimportantCount}`);
//     })
    
// }

function calculate() {
    const spanimp = document.querySelector('.imp')
    const spanunimp = document.querySelector('.unimp')
    const spanallImp = document.querySelector('.allimp')
    // первый способ
    const imp = tasksArray.filter(function({priority}){
        return priority === 1
    }).length;
    const unimp = tasksArray.filter(function({priority}) { return priority === 2
    }).length
    const allimp = tasksArray.filter(function({priority}){
        return priority++;
    }).length;
// доработать функцию calculate таким образом, чтобы при вызове этой функции
// данные о важных и неважных делах отображались на экране
//добавить отображение "Всего дел"
spanimp.innerText =  imp;
spanunimp.innerText = unimp;
spanallImp.innerText = allimp;

//другой способ
// spanallImp.innerText = tasksArray.length;

console.log(imp, unimp);
}

// 1) выводить в консоль фразу "привет" при двойном нажатии на карточку



// remove.addEventListener('click', function(event){
//     tasksArray = tasksArray.filter(function(item){
//         return item.id !== id

//     })
//      rerender()
//      calculate()
//    })
  
//     container.append(ptitle, remove)
//     return container


// второй способ
// const {imp, unimp} = tasksArray.reduce(function(acc, {priority}){
//     if (priority === 1) {
//         acc.imp++;
//     }else{
//         acc.unimp++;
//     }
//     return acc
// }, {imp:0, unimp: 0});


//     console.log(imp, unimp);
// }

//через тернарный
// const {imp, unimp} = tasksArray.reduce(function(acc, {priority}){
//     acc.imp += priority === 1 ? 1 : 0
//     acc.unmimp += priority === 2 ? 1 : 0
//     return acc
// }, {imp:0, unimp: 0});
// console.log(imp, unimp);
// }


// Этот код создает список задач на странице, который пользователь может добавлять и удалять.

// Сначала код получает ссылки на форму и контейнер для задач, используя метод document.querySelector(). Затем создается пустой массив tasksArray, который будет хранить информацию о каждой задаче.

// При отправке формы на странице с помощью метода addEventListener() вешается обработчик события на форму. Внутри этого обработчика, используя объект события event, мы получаем значение полей title и priority в форме. Затем эти значения сохраняются в массиве tasksArray как новый объект задачи с уникальным id, созданным с помощью метода Date.now(). Затем функция rerender() вызывается для обновления списка задач на странице, и форма очищается с помощью метода reset().

// Функция createTask() создает новый элемент для каждой задачи в списке, используя переданные параметры id, title и priority. Она создает контейнер div, который содержит p элемент для отображения названия задачи и кнопку button для удаления задачи. В зависимости от значения priority фона цвет контейнера будет либо красным (для высокоприоритетных задач), либо серым (для остальных задач). Кнопка "Delete" также имеет обработчик события click, который удаляет задачу из массива tasksArray, вызывает функцию rerender() для обновления списка на странице.

// Функция rerender() очищает содержимое tasks, перебирает каждый элемент в массиве tasksArray, создает новый элемент задачи с помощью функции createTask(), и добавляет его в контейнер tasks на странице. Как только цикл forEach() завершен, список задач на странице будет обновлен согласно содержанию массива tasksArray.


// 1) задний фон

// const elem = document.createElement('div');
// elem.style.backgroundImage = `url("${ссылка на картинку}")`;

// // 2) картинка

// const elem = document.createElement('img');
// elem.src = 'ссылка на картинку';

// указать ключ со значением
// localStorage.setItem('test_key', 'test_value');

// считать ключ со значением
// localStorage.getItem('test_key')