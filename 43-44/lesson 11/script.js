// 1) создать параграф, записать туда текст "я параграф из JS" и добавить в div#root


const container = document.querySelector('#root')
const pElement = document.createElement('p');

// pElement.innerText = 'я параграф из JS';
// container.append(pElement);

// создать div и добавить в него тег span с текстом "Я span, который внутри div"
// созданный div добавить в div#root

// const newElem = document.createElement('div')
// const span = document.createElement ('span')

// span.innerText = "Я span, который внутри div"
// newElem.append(span)
// container.append(newElem)

// написать цикл, который добавляет в #root 100 p элементов 
// с содержимым 1, 2, 3 ... 100

// for (let i = 0; i <= 100; i++) {
//     const p = document.createElement('p');
//     p.innerText = i
//     container.append(p)
// }



// const words = ['слон', 'жираф', 'лошадь', 'енот', 'змея', 'сова'];
// // написать скрипт, который создает параграфы и помещает в них слова из массива
// words.forEach(function(el){
//     const pEl = document.createElement ('p')
//     pEl.innerText = el
//     container.append(pEl)
// })



const products = [
    {id: 1, title: 'велосипед', price: 5000},
    {id: 2, title: 'ролики', price: 700},
    {id: 3, title: 'самокат', price: 1000},
    {id: 4, title: 'лыжи', price: 1200},
    {id: 5, title: 'сноуборд', price: 1100},
    {id: 6, title: 'скейт', price: 850}
];

// products.forEach(function({title, price}){
//     const cardElem = document.createElement('div');
//     const titleElem = document.createElement('p');
//     const priceElem = document.createElement('p');

//     titleElem.innerText = title;
//     priceElem.innerText = price

//     cardElem.append(titleElem, priceElem)
//     container.append(cardElem)
// })


// доработать данный скрипт и вынести процесс создания карточки в отдельную функцию
// данная функция получает в качестве аргументов title и price и возвращает div с параграфами

function create({title, price}) {
    const cardElem = document.createElement('div');
    const titleElem = document.createElement('p');
    const priceElem = document.createElement('p');

    titleElem.innerText = title;
    priceElem.innerText = price

    cardElem.append(titleElem, priceElem)

    return container
}


products.forEach(function ({title, price}){
    const card = create(title, price)
    container.append(card)
})

// написать цикл, который создает карточки и по описаным товарам и добавляет их в #root

/* 
<div>
    <p>название товара</p>
    <p>цена товара</p>
</div> 
*/