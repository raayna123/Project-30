class Polygon {

    constructor(x, y, width, height) {
        var options ={
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2 
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.color = color;
        //this.sides = sides;
        this.image = loadImage("sprites/polygon.png");
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        //fill("yellow");
        image(this.image, pos.x, pos.y, 40, 40);
    }

}