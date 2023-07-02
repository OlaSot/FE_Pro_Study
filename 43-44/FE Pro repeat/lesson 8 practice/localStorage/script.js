// Дан массив с товарами

// ДЗ
// Стилизовать карточки
// Добавить форму с двумя инпутами для сбора данных о названии продукта и его цене. По умолчанию все добавляемые продукты должны иметь свойство in_stock со значением true
// При отправке формы выводить собранные данные из формы в консоль в виде объекта
// При отправке формы отрисовывать карточку из собранных данных
// При обновлении страницы добавленные карточки не пропадают

const goods = [
    {
      id: 1, 
      product: 'iPhone 14',
      price: 1500,
      in_stock: true
    },
    {
      id: 2, 
      product: 'Samsung A53',
      price: 1000,
      in_stock: true
    },
    {
      id: 3, 
      product: 'Huawei 11',
      price: 900,
      in_stock: true
    },
    {
      id: 4, 
      product: 'Nokia N4',
      price: 500,
      in_stock: false
    },
    {
      id: 5, 
      product: 'iPhone 12',
      price: 1100,
      in_stock: false
    }
  ]

  
// 1. Сформировать карточки товаров (название, цену, наличие на складе). Если товар есть на складе, то выводить 'in stock', если нет - 'not in stock'. Добавить карточки в div products_container

const products_container = document.querySelector('.products_container')

//если нужно дальше работать с информацие то метод forEach не подойдет, так как он ничего не возвращает, к примеру если нужно удаления либо сортировка карточек, то нужно использовать метод map

//он подходит тогда, когда нужно только отобразить информацию


const product_cards = goods.map(function({product, price, in_stock}) {

    const productCard = document.createElement('div')
    const product_elem = document.createElement('p')
    const price_elem = document.createElement('p')
    const instock_elem = document.createElement('p')
    
    const inStock = in_stock ? 'Yes' : 'NO'

    product_elem.innerText = `Title: ${product}`;
    price_elem.innerText = `Price: ${price}`;
    instock_elem.innerText =`In Stock: ${inStock}`
    productCard.append(product_elem, price_elem, instock_elem)
    return productCard //потому что map должен что-то возвращать

})

products_container.append(...product_cards) //product_cards это массив и с помощью спредоператора его надо разбить на элементы. Здесь мы аппендим не массив, а каждый элемент массива, потому что масси разобран на элементы


// const a = [1, 2, 3, 4, 5]
// console.log(a);
// console.log(...a);