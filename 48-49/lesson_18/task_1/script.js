const add_workers_form = document.querySelector('.add_workers_form')
const container = document.querySelector('.container')
const delete_all = document.querySelector('.delete_all')

let all_workers = []

add_workers_form.addEventListener('submit', (event) => {
    event.preventDefault()

    const { avatar, email, firstname, lastname, age } = event.target

    const worker = {
        id: Date.now(),
        avatar: avatar.value,
        email: email.value,
        firstname: firstname.value,
        lastname: lastname.value,
        age: +age.value
    }

    all_workers.push(worker)
    render_cards(all_workers);

    event.target.reset()

})

const render_cards = (workers) => {
    container.innerText = ''

    workers.forEach(({id, avatar, email, firstname, lastname, age}) => {

        const avatarElem = document.createElement('img')
        const emailElem = document.createElement('a')
        const nameElem = document.createElement('p')
        const lastnameElem = document.createElement('p')
        const ageElem = document.createElement('p')
        const cardElem = document.createElement('div')
        const cross = document.createElement('span')

        avatarElem.src = avatar
        avatarElem.alt = `${firstname} ${lastname}`

        nameElem.innerText = firstname
        lastnameElem.innerText = lastname
        ageElem.innerText = age
        emailElem.innerText = email
        cross.innerText = 'X'
        cardElem.classList.add('cardElem')

        emailElem.href = `mailto:${email}`

        cross.addEventListener('click', () => {

           all_workers = all_workers.filter((el) => {
                return el.id !== id
            })

            render_cards(all_workers)
        })

        cardElem.append(avatarElem, emailElem, nameElem, lastnameElem, ageElem, cross)
        container.append(cardElem)


    })

}

delete_all.addEventListener('click', () => {
    all_workers = []
    render_cards(all_workers)
})
