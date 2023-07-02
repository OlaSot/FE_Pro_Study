const tutors = [
    {
        id: 1,
        fullname: 'Dmiriy Ivanov',
        position: {
            title: "Specialist",
            status:'Employee'
        },
        photo: 'https://www.zooplus.at/magazin/wp-content/uploads/2017/12/kitten-eingew%C3%B6hnen-768x547.jpeg'
    },
    {
        id: 2,
        fullname: 'Milana Ivanova',
        position: {
            title: "Specialist about smth else",
            status:'Employee'
        },
        photo: 'https://wissgetierig.de/wp-content/uploads/2015/10/Katzen-sozialisieren-Titel.jpg'
    },
    {
        id: 3,
        fullname: 'Irina Ivanov',
        position: {
            title: "Director",
            status:'Manager'
        },
        photo: 'https://animonda.de/media/da/8c/f9/1656680391/kleines-kaetzchen-magazin-kitten-fuettern-titleimage-767x500.jpg'
    },
]

const tutors_container = document.querySelector('.tutors_container');

tutors.forEach(function({ id, fullname, position, photo}) {
    const cardElem = document.createElement('div')
    const avatarElem = document.createElement('div')
    const nameElem = document.createElement('p')
    const positionElem = document.createElement('p')
    const btnElem = document.createElement('button')

    const { title, status } = position

    nameElem.innerText = fullname;
    positionElem.innerText = title;
    btnElem.innerText = 'Biography';

    avatarElem.style.backgroundImage = `url(${photo})`;

    cardElem.append(avatarElem, nameElem, positionElem, btnElem )
    tutors_container.append(cardElem);

    //Если человек директор


    // if(title === 'Director') {
    //     cardElem.style.backgroundColor = 'lightgreen'
    // } else {
    //     cardElem.style.backgroundColor = 'lightpink'
    // }
    

    //через тернарный оператор

    cardElem.style.backgroundColor = title === 'Director' ? 'lightgreen' : 'lightpink'





    // if(fullname[0] === 'I') {
    //     cardElem.style.backgroundColor = 'red'
    // }
})


