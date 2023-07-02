function multTwo(num){
    return num*2
}

const multTwo_arrow = num => num*2


const getMessage = (num1, num2) => {
    if(num1 + num2 >= 10){
        return 'more than 10'
    } else {
        return 'less than 10'
    }
}


const getMessage1 = (num1, num2) => num1 + num2 >= 10 ? 'more than 10' : 'less than 10'

console.log(getMessage(5,5));