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


  const products_container = document.querySelector('.products_container')

  const products_cards = goods.map(function({product, price, in_stock}) {
    const productCard = document.createElement('div')
    const titleElem = document.createElement('div')
    const priceElem = document.createElement('div')
    const inStockElem = document.createElement('div')

    const inStock = in_stock ? 'Yes we have it' : "No we don't have it"

    titleElem.innerText = `Title: ${product}`;
    priceElem.innerText = `Price: ${price}`;
    inStockElem.innerText = `Aailibility: ${inStock}`



    productCard.append(titleElem, priceElem, inStockElem);
    return productCard

  })

  products_container.append(...products_cards)
  
  // 1. Сформировать карточки товаров (название, цену, наличие на складе). Если товар есть на складе, то выводить 'in stock', если нет - 'not in stock'. Добавить карточки в div products_container


  // const products_container = document.querySelector('.products_container');

  // const products_cards = goods.map(function({ product, price, in_stock }){
  //   const productCard = document.createElement('div');
  //   const titleElem = document.createElement('p');
  //   const priceElem = document.createElement('p');
  //   const inStockElem = document.createElement('p');
  
  //   const inStock = in_stock ? 'in stock' : 'not in stock';
  
  //   titleElem.innerText = `Title: ${product}`;
  //   priceElem.innerText = `Price: ${price}`;
  //   inStockElem.innerText = `Availiability: ${inStock}`;
  
  //   productCard.append(titleElem, priceElem, inStockElem);
  //   return productCard
  // });
  
  // products_container.append(...products_cards);

//   const a = [1, 2, 3, 4, 5];

// console.log(a);
// console.log(...a);

//ЧЕРЕЗ МЕТОД FOREACH()
// goods.forEach(function({ product, price, in_stock }){
//     const productCard = document.createElement('div');
//     const titleElem = document.createElement('p');
//     const priceElem = document.createElement('p');
//     const inStockElem = document.createElement('p');
  
//     const inStock = in_stock ? 'in stock' : 'not in stock';
  
//     titleElem.innerText = `Title: ${product}`;
//     priceElem.innerText = `Price: ${price}`;
//     inStockElem.innerText = `Availiability: ${inStock}`;
  
//     productCard.append(titleElem, priceElem, inStockElem);
//     products_container.append(productCard);
//   });


  

// ДЗ
// Стилизовать карточки
// Добавить форму с двумя инпутами для сбора данных о названии продукта и его цене. По умолчанию все добавляемые продукты должны иметь свойство in_stock со значением true
// При отправке формы выводить собранные данные из формы в консоль в виде объекта
// При отправке формы отрисовывать карточку из собранных данных
// При обновлении страницы добавленные карточки не пропадают