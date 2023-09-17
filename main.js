const canvas = document.getElementById('canvas1');

const ctx = canvas.getContext('2d');


canvas.width = 600;
canvas.height = 400;

let prShir= 70;
let  prVys= 50;

let x = 400;
let y= 0;


ctx.fillStyle ="orange"

// скорость по горизонтали и вертикали
let vx=2;
let vy =1;

// Треугольник
/*
        point3
         /*\
        /   \
       /     \
      *-------*
    point1  point2  
*/


    
const point1 = {x: 230,  y: 250};
const point2 = {x: 370, y: 250};
const point3 = {x: 300, y: 130 };




 function drawTriangle(context, point1, point2, point3, color) {
        context.beginPath();
        context.moveTo(point1.x, point1.y);
        context.lineTo(point2.x, point2.y);
        context.lineTo(point3.x, point3.y);
        context.closePath();
        context.fillStyle = color;
        context.fill();
    }

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.fillRect(10, temp, 50, 50);
    ctx.fillStyle = "orange";

    ctx.fillRect(x, y, prShir, prVys);
    
    drawTriangle(ctx, point1, point2, point3, 'red');
    
     
    x = x+vx;
    y = y+vy;

    point1.x-=vx/6
    point1.y-=vy/6
    point2.x-=vx/6
    point2.y-=vy/6
    point3.x-=vx/6
    point3.y-=vy/6

    

    if (x >= 600 -prShir || x<=0)  {
    //   сделать чтобы пошел назад !!!!  
      // как ? - а как идет вперед? - прибавляется х!
      // а как чтобы пошел назад? - убавлять х, то есть
      // сделать скорость обратной, умножить на -1
       vx= vx * -1;
    }

    if (y <= 0 || y >= 400 - prVys)
        vy = vy * -1;
        // это по вертикали, верхняя стенка

    



    requestAnimationFrame(animate);

}
animate();





    // Usage example:
    
    


