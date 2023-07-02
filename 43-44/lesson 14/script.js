// class Dog {

//     constructor(name, weight) {
//         this.name = name;
//         this.weight = weight
//     }
//     // init(name, weight) {
//     //     this.name = name;
//     //     this.weight = weight
//     // }

//     bark () {
//         console.log('bark-bark');
//     }
// }

// const dog_1 = new Dog('Sharik', 25)
// // dog_1.init('Sharik', 25)

// const dog_2 = new Dog('Bobik', 15)
// // dog_2.init('Bobik', 15)

// console.log(dog_1);
// console.log(dog_2);

// Создать класс User со свойствами name, username, age.


// class User {

//     constructor(name, username, age=30) { //можно ввести значение по умолчание, если оно не указывается
//         this.name = name;
//         this.username = username;
//         this.age = age
//     }


//     bDay(){
//         this.age++
//     }
//     // Добавить метод changeUsername, который получает в качестве аргумента новое имя пользователя и меняет его.
//     changeUsername(newusername) {
//         this.username = newusername;
//       }
    
//  }



// const user_1 = new User ('Olha', 'sot', 26)
// const user_2 = 


// console.log(user_1);
// user_1.bDay()
// console.log(user_1);
// user_1.changeUsername('Olala')
// console.log(user_1);


// Создать класс Product со свойствами title, price, count.

class Product {

    static all = []
    static totalSum(){
        return this.all.reduce(function(acc, {price}){
            return acc + price
        },0)
    }
    // создать статическое свойство totalSale, которое содержит в себе общую сумму проданных товаров

    constructor (title, price, count) {

    this.title = title
    this.price = price
    this.count = count
    Product.all.push(this)
}
 // создать статическое свойство totalSale, которое содержит в себе общую сумму проданных товаров
static totalSale = 0


// Добавить метод  changePrice, который принимает в качестве аргумента новую цену и делает проверку, если цена меньше нуля то цена не меняется и выводится в консоль “цена не может быть отрицательной”.

    // changePrice (price) {
    //     this.price = price
    //     if (price < 0) {
    //         console.log('Price cant be negative');
    //     }
    //     else {
    //         this.price = price
    //        console.log(price);
    //     }
    // }

    changePrice (newprice) {
        if (newprice < 0) {
            console.log('Price cant be negative');
        }
        else {
            this.price = newprice
           console.log(price);
        }
    }

// Доработать метод sale, который уменьшает count на единицу. Но если count уже равен нулю, то выводится сообщение “товар закончился”.

    sale () {
        if (this.count === 0) {
            console.log('товар закончился');
        }
        else {
            this.count--
            Product.totalSale += this.price
        }
    }

}



// const product_1 = new Product('bicycle', 4500, 12)
// console.log(product_1);

// product_1.changePrice(-2000)
// product_1.sale()
// console.log(product_1);

//создать пустой массив и добавить в него 5 продуктов (экземпляров класса Product)


new Product('bicycle', 4500, 12)
new Product('skate', 2000, 15)
new Product('snowboard', 3500, 45)
new Product('rollers', 4200, 5)
new Product('ski', 1000, 20)

console.log(Product.all);
console.log(Product.totalSum());
console.log(Product.totalSale());

Product.all[3].sale()
Product.all[3].sale()
console.log(Product.totalSale);


//используя методы массивов найти общую сумму товаров

// const sum = productsArr.forEach(function (el){
//     return el = Product.price +
// })
// console.log(sum);


// const sum = productsArr.reduce(function(acc, {price}){
// return acc + price
// },0)

// console.log(sum);

