
// const canvas = document.getElementById('canvas1');

class Ball {
     constructor () {
          this.x = 400
          this.y= 300;
          this.size = Math.random()*20 +10;
          this.speedX= ((Math.random()*2)-1);
          this.speedY= ((Math.random()*2)-1);
         
// /         this.color ='hsla(' + hue + ',90%, 60%, 0.3)';
         this.color= "Green";
       this.transparency = 1;
         //
//          this.hue = hue;


     }

     update () {
            this.speedY +=0.15
         if ( 
             (
             (this.y >= bird.y && this.y <= bird.y+bird.height) && 
             ((this.x >= bird.x)&&(this.x<= bird.x+bird.width)) 
             ) 
             ) {
             this.speedY =  this.speedY * (-1);
             this.speedY +=bird.vy;
             this.speedX = this.speedX +rightPressed *0.5 - leftPressed *0.5;
             
         }
         
         if ( 
              this.y <=2 || this.y>= canvas.height
             ) {
             this.speedY =  this.speedY * (-0.9);
         }
         
         if (this.x <= 2 || this.x >= canvas.width-2 ) {
             this.speedX = this.speedX * (-0.9);
         }
         
          this.speedX = this.speedX*0.995
           this.speedY = this.speedY*0.995
      
          this.x += this.speedX;
          this.y += this.speedY;
//          this.size +=0.1;
       //  this.transparency -=0.015;
     
         
        this.color= 'hsla(' + hue + ',90%, 60%,' + this.transparency
          +')';
         //
          

     }

     draw(){
          ctx.fillStyle =this.color;
      //ctx.fillstyle= '
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2 );
          ctx.fill();

     }
     

}

const ball = new Ball();

//function handleBall () {
//    
//}