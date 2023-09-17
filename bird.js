class Bird {
     constructor(){
          this.x= 250;
          this.y=500;
          this.vy=0;
          this.width=100;
          this.height=20;
          this.weight=1;
   
     }
     update () {
          let curve = Math.sin(angle  ) * 5;

          if (this.y > canvas.height - (this.height * 3) + curve) {
               this.y = canvas.height -(this.height * 3 ) + curve ;
               this.vy = 0;
          } else {
          this.vy += this.weight;         
          this.vy *=0.9;
          this.y += this.vy;
          }
               
           if (this.y < 0 + this.height *1 ) {
               this.y = 0 +this.height;  
               this.vy = 0;   
          }

          if (spacePressed && this.y > this.height * 1) this.flap();
         ///
          if(leftPressed && this.x >0 ) this.moveLeft();
          if (rightPressed && this.x < canvas.width-this.width) this.moveRight();
     }
          
                 

     
 
     draw() {               
               ctx.fillStyle ='blue';
               ctx.fillRect(this.x, this.y, this.width, this.height);
          }


     flap() {
     this.vy -=2;
          }
      moveLeft() {
        this.x=this.x-10
            }
     moveRight() {
        this.x=this.x+10
            }

          
 }

const bird = new Bird();

  
