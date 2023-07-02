// 1. Реализовать класс Car, который будет иметь следующие свойства:
// company, model, country, volume, color
// 2. Создать два экземпляра (объекта) этого класса
// // 3. Вывести в консоль по одному значению свойства на выбор из каждого экземпляра класса
class Car {

    constructor(company, model, country, volume, color){
    this.companyName = company 
    this.modelName = model
    this.countryName = country
    this.volumeName = volume
    this.colorName = color
    }
// 4. Реализовать метод get_info, который будет выводить в консоль строку в формате: Model: <model> (<company), Country: <country>, Color: <color>, Volume: <volume>
    get_info (){
        console.log(`Model ${this.modelName}; Country ${this.countryName}, Color:${this.colorName}, Volume:${this.volumeName}`);
    }
// 5. Реализовать метод incr_volume(), который будет увеличивать объем двигателя на единицу
// 6. Реализовать метод decr_volume(), который будет уменьшать объем двигателя на единицу
// 7. Проверить как работают методы incr_volume() и decr_volume()
    incr_volume(){
        this.volumeName++
    }
    decr_volume(){
        this.volumeName--
    }

// 8. Реализовать методы incr_volume_value() и decr_volume_value(), который будут увеличивать или уменьшать объем на переданное значение
    incr_volume_value(value){
    this.volumeName += value // this.volume + value
    }



    // 9. Создать функцию, которая будет создавать экземпляр класса Car и добавлять его в массив all_cars






}


const all_cars = []

 function add_car (company, model, country, volume, color) {
    const car = new Car(company, model, country, volume, color)
    all_cars.push(car)
}


add_car('Audi', 'i9', 'Germany', 2.0, 'white')

console.log(all_cars);


const car_1 = new Car ('BMV', 'b8', 'Germany', 1.8, 'Blue')
// console.log(car_1.country);

const car_2 = new Car ('Toyota', 'Rav4', 'Japan', 2.0, 'Red')
// console.log(car_2.company);

// car_1.get_info()
// car_1.incr_volume()
// console.log(car_1);
// car_2.decr_volume()
// console.log(car_2);

car_1.incr_volume_value(5)
console.log(car_1);