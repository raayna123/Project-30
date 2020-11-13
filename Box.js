class Box{
    constructor(x, y, width, height, color) {
        var options = {
          isStatic: false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.color = color;
        this.visibility = 255;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }

  
    display(){
      if(this.body.speed < 3) {
        var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          stroke(0);
          fill(this.color);
          rect(0, 0, this.width, this.height);
          pop();
      } else {
          World.remove(world, this.body);
          push();
          this.visibility = this.visibility - 5;
          tint(255, this.visibility);
          //image(this.image, this.body.position.x, this.body.position.y, 50, 50);
          pop();
      }
        
     }
  }
