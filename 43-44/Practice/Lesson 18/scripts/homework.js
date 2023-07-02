// Реализуйте класс Language (Язык), который будет иметь следующие свойства: 
// name (имя), alphabet, (латинский, кирилица и т.д.), country (страна, в которой говорят на этом языке)
//Создайте экземпляр этого класса
//Выведете в консоль все свойства созданного экземпляра класса
// Реализйуте метод get_info (выводит в консоль строку 'Язык: <name>, Алфавит: <alphabet>, Страна, в которой говорят на этом языке <country>)

class Language {
    constructor(name, alphabet, country){
    this.name = name;
    this.alphabet = alphabet;
    this.country = country
}
get_info (){
    console.log(`Name ${this.name}, Alphabet ${this.alphabet}, Country ${this.country}`);
}

}


const en_lang = new Language ('English', 'Latin', 'England,America')
en_lang.get_info()
