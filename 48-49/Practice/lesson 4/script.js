const button = document.querySelector(".id_form__button");
const input = document.querySelector(".id_form__input");
const cards = document.querySelector(".cards");
const btnFilter = document.querySelector('.btnFilter')
const priceForm = document.querySelector('.priceForm')





priceForm.addEventListener("click", (e) => {
    e.preventDefault()
   
    console.log(min);


})

button.addEventListener("click", (e) => {
  e.preventDefault();

  // 1. получить значение инпута где id
  console.log(input.value);

  // 2. отправить запрос по адресу   https://dummyjson.com/products/1 - где 1 это должен быть id из инпута

  fetch(`https://dummyjson.com/products/${input.value}`)
  .then(res => res.json())
  .then(data => renderProduct(data));
});


const renderProduct = (obj) => {

  
        const titleEl = obj.title
        const descEl = obj.description
        const priceEl = obj.price
        const imgElem = obj.images[0]


        const html = `
        <div class="card">
            <img src="${imgElem}" />
            <h1>${titleEl}</h1>
            <p>${descEl}</p>
            <p>Price: ${priceEl}$</p>
        </div>
        
        `;
          cards.innerHTML = "";
          cards.insertAdjacentHTML("afterbegin", html);
        };
    


        btnFilter.addEventListener('click', (e) => {
            e.preventDefault()
        })


