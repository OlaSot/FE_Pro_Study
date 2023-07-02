class Graph {

    constructor (cvs, func, cvsWidth=500, cvsHeight=500, scale=22) {
        this.func = func
        this.ctx = cvs.getContext('2d')
        this.cvsWidth = cvsWidth
        this.cvsHeight = cvsHeight
        this.scale = scale
        
        cvs.width = cvsWidth
        cvs.height = cvsHeight
        
    }

        axes() {
            // this.ctx.beginPath();
            // this.ctx.lineTo(this.cvsWidth / 2, 0);
            // this.ctx.lineTo(this.cvsWidth / 2, this.cvsHeight)
            // this.ctx.stroke()

            // this.ctx.beginPath()
            // this.ctx.lineTo(0, this.cvsHeight / 2);
            // this.ctx.lineTo(this.cvsWidth, this.cvsHeight / 2)
            // this.ctx.stroke()

            const {ctx, cvsWidth, cvsHeight} = this
            ctx.strokeStyle = '#000000'
            ctx.lineWidth = 4
            ctx.beginPath();
            ctx.lineTo(cvsWidth / 2, 0);
            ctx.lineTo(cvsWidth / 2, cvsHeight)
            ctx.stroke()

            ctx.beginPath()
            ctx.lineTo(0, cvsHeight / 2);
            ctx.lineTo(cvsWidth, cvsHeight / 2)
            ctx.stroke()
        }



            coordinatesToPixels(x,y) {
                const {ctx, cvsWidth, cvsHeight, scale } = this
                const left = cvsWidth /2 + x * scale
                const top = cvsHeight /2 -y * scale
                return [left, top]
            }

            grid(){
                const {ctx, cvsWidth, cvsHeight, scale } = this
                ctx.strokeStyle = '#bdc3c7'
                ctx.lineWidth = 1
                const leftShift = scale - (cvsWidth / 2) % scale
                const topShift = scale - (cvsHeight / 2) % scale

                for (let j = 0; j < cvsHeight / scale; j++){
                    for (let i = 0; i < cvsWidth / scale; i++){
                        ctx.strokeRect(-leftShift + i * scale, 
                            -topShift + j * scale, scale, scale)
                    }
                   //добавить рассчет отступов от левого и верхнего краев
            }

    }


            render () {
                const {ctx, func, scale} = this
                for (let i = -20; i <= 20; i++){
                    const y = func(i)
                    
                    ctx.beginPath()
                    ctx.arc(
                        ...this.coordinatesToPixels(i, y),
                         scale/4,
                         0,
                         Math.PI * 2 )

                         ctx.fill()
                   
                }
                // написать цикл от -20 до 20
        // он должен вывести в консоль отступы с лева и сверху для точек 
        // числа от -20 до 20 это x и пропустив этот x через функцию func мы получаем y
            }



}




const cvs = document.querySelector('#cvs')
const graph = new Graph (cvs, Math.sin)


graph.grid()
graph.axes()
graph.render()