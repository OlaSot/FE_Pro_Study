const obj_1 = {
    username: 'Olya',
    hello: function(){
        console.log(`Hi, ${this.username}!`);
    }

}
const obj_2 = {
    username: 'Anton'
}
obj_2.hello = obj_1.hello;

obj_1.hello()
obj_2.hello()