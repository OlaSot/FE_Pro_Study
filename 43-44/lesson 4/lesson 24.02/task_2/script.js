const products = [
    {
        id: 1,
        title: 'Apple',
        price: 50,
        image: 'https://dom-eda.com/uploads/images/catalog/item/86df51de21/c25c94fe96_1000.jpg'
    },
    {
        id: 2,
        title: 'Orange',
        price: 20,
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Ambersweet_oranges.jpg'
    },
    {
        id: 3,
        title: 'Lime',
        price: 50,
        image: 'https://www.collinsdictionary.com/images/full/lime_232550995.jpg'
    },
    {
        id: 4,
        title: 'Kiwi',
        price: 50,
        image: 'https://www.naturespride.eu/media/fzxfw2x4/kiwi-productfoto-hayward-vari%C3%ABteit.jpg?anchor=center&mode=crop&width=1000&height=1000&rnd=132457563923470000'
    }
]


// для каждого продукта создать карточку, которая содержит информацию о названии, цене, изображение, добавить карточки в div products_container


const products_container = document.querySelector('.products_container')

products.forEach(function({price, title, image}) {
    const cardMain = document.createElement('div');
   const cardTitle = document.createElement('p');
   const cardPrice = document.createElement('p');
    const cardImg = document.createElement('div');

    cardTitle.innerText = `Title: ${title}`;
    cardPrice.innerText = `Price: ${price}$`;
    cardImg.style.backgroundImage = `url(${image})`;

    //добавляем класс к элемменту

    cardMain.classList.add('product_card');
    
    cardMain.append(cardImg, cardTitle, cardPrice )
    products_container.append(cardMain)
})