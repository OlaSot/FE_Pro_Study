const cvs = document.querySelector('#cvs')
const ctx = cvs.getContext('2d')



cvs.width = window.innerWidth
cvs.height = window.innerHeight



// const size = 50

// for (let i = 0; i < 6; i++) {
//  ctx.strokeRect(cvs.width / 2, cvs.height / 2 - i * 50, 50, 50)

// }
// cvs.fillRect (0, 0, 100, 100)

// const size = 50
// const count = 6

// for (let i = 0; i < count; i++) {
// //  ctx.strokeRect(cvs.width / 2, cvs.height / 2 - i * 50, 50, 50)

//     ctx.fillRect(size * (count -1) - size * i,  size * i, size, size)

// }
// cvs.fillRect (0, 0, 100, 100)

// создать функцию, которая получает число и рисует следующую фигуру

// 10 
// X  X  X  X  X  X  X  X  X  X
// X  X                       X
// X     X                    X
// X        X                 X
// X           X              X
// X              X           X
// X                 X        X
// X                    X     X
// X                       X  X
// X  X  X  X  X  X  X  X  X  X
// for (let i = 0; i < count; i++) {
// //  ctx.strokeRect(cvs.width / 2, cvs.height / 2 - i * 50, 50, 50)

//     ctx.fillRect(size * (count -1) - size * i,  size * i, size, size)

// }
// const size = 50
// const count = 10



// function handler (count) {
//     for (let j = 0; j < count; j++){
//         for (let i = 0; i < count; i++){
//             if(j === 0 || j === count -1 ||
//             i === 0 || i === count -1 ||
//             i === j){
//                 ctx.fillRect(i * size, j * size, size, size)
//             }
//         }
//     }
// }

// handler (20)

const size = 50
const count = 10



function handler (count) {
    for (let j = 0; j < count; j++){
        for (let i = 0; i < count; i++){
            if((i + j) % 2 === 1){
                ctx.fillRect(i * size, j * size, size, size)
            }
        }
    }
}

// handler (8)

// ctx.beginPath();
// ctx.moveTo(cvs.width/2, cvs.height/2 );
// ctx.lineTo(cvs.width/2 + 50, cvs.height/2 +50);
// ctx.lineTo(cvs.width/2 +50, cvs.height/2 -50)
// ctx.stroke()
// нарисовать квадрат при помощи линий
// квадрат должен быть в центре (центр квадрата совпадает с центром жкрана)
// сторона квадрата должна быть 200


// ctx.beginPath();
// ctx.moveTo(cvs.width/2 +100, cvs.height/2 +100);
// ctx.lineTo(cvs.width/2 + 100, cvs.height/2 -100);
// ctx.lineTo(cvs.width/2 - 100, cvs.height/2 -100)
// ctx.lineTo(cvs.width/2 - 100, cvs.height/2 +100)
// ctx.lineTo(cvs.width/2 + 100, cvs.height/2 +100)
// ctx.stroke()

// ctx.beginPath()
// ctx.arc(cvs.width/2, cvs.height/2, 100, 0, Math.PI*2, true)
// ctx.stroke()




const deg2PI = (deg) => {
    const oneDeg = Math.PI / 180
    return deg * oneDeg
}

// ctx.beginPath()
// ctx.arc(cvs.width/2, cvs.height/2, 100, deg2PI(180), deg2PI(270), false)
// ctx.stroke()

ctx.fillStyle = '#e67e22'
ctx.beginPath()
ctx.moveTo(cvs.width/2, cvs.height/2)
ctx.arc(cvs.width/2, cvs.height/2, 200, 0, deg2PI(30), false)

ctx.fill()
