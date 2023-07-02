const add_user_form = document.querySelector('.add_user_form');
const container = document.querySelector('.container')
const delete_all_btn = document.querySelector('.delete_all_btn')



let users = [];


add_user_form.addEventListener('submit', (event) => {
    event.preventDefault();

    const { firstname, age } = event.target //создание переменной, достается  здесь из event.target


    const user = {
        id: Date.now(),
        firstname: firstname.value,
        age: parseInt(age.value)
    }

    users.push(user)
    render_cards(users)

    event.target.reset() 

    // users.map(el => {
    //     const firstnameinp = document.createElement('p')
    //     const ageinp = document.createElement('p')

    //     firstnameinp.innerText = el.firstname
    //     ageinp.innerText = el.age


    //     add_user_form.append(firstnameinp, ageinp)
    // })

    //через forEach


})

const render_cards = users => {
    container.innerText = ''
    users.forEach(({firstname, age, id}) => {
        const firstnameinp = document.createElement('p')
        const ageinp = document.createElement('p')
        const cardElem = document.createElement('div')
        const cross_icon = document.createElement('span')

        firstnameinp.innerText = firstname
        ageinp.innerText = `Age${age}`
        cross_icon.innerText = 'x'

        cross_icon.classList.add('cross_icon')

        cross_icon.addEventListener('click', () => {
            users = users.filter(el => el.id !== id)
            render_cards(users)
        })

        cardElem.append(firstnameinp, ageinp, cross_icon)
        container.append(cardElem)
    })

}




delete_all_btn.addEventListener('click', () => {
    users = []
    render_cards(users)
//    container.innerText = ''
})