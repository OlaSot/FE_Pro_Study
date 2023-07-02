const cvs = document.querySelector('#cvs')
const ctx = cvs.getContext('2d')

cvs.width = window.innerWidth
cvs.height = window.innerHeight
// ctx.fillRect(0, 0, 100, 100) //первые два это координаты точки, затем ширина и высота
// ctx.fillRect(100, 100, 100, 100)
// ctx.fillRect(200, 300, 100, 100)

// использование циклов

// for (let i = 0; i <10; i++) {
//     ctx.strokeRect(cvs.width / 2, cvs.height / 2 - i * 50, 50, 50 ) 
// }

// const size = 50;
// const count = 10


// for (let i = 0; i < 6; i++) {
//     ctx.fillRect(0 + size * i, 0 + size * i, size, size ) 
//     // 0 + 50 * 0, 0 + 50 * 0, 50, 50
//     // 0 + 50 * 1, 1 + 50 * 1, 50, 50
// }

// for (let i = 0; i < 6; i++) {
//     ctx.fillRect(250 - size * i, 0 + size * i, size, size ) 

// }


// for (let i = 0; i < count; i++) {
//     ctx.fillRect(size * (count -1) - size * i, size * i, size, size ) 
// // 50 * (6-1) - 50 * 0, 50 * 0, 50 - 0, 50, 50
// }

const size = 50;
const count = 10

// for (let j = 0; j < count; j++ ) {
//     for (let i = 0; i < count; i++){
//         ctx.fillRect(0 + size * i, 0 + size * i, size, size)
//     }
//     ctx.strokeRect(0 + size * j, 0, size, size )
//     ctx.strokeRect(0, 0 + size * j, size, size )
//     ctx.strokeRect(0 + size * j, 0, size, size )
//     ctx.strokeRect(0, size - size * j, size, size )
// }

function handler (count) {
    for (let i = 0; i < count; i++ ){
        for (let i = 0; i < count; i++) {
            if (j === 0 || j === count - 1 || i === 0 || i === count - 1 || i === j){
                ctx.fillRect(i * size, j * size, size, size )
            }
        }
    }
}