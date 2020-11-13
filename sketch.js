const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1, ground2;

var boxes = [];

var score = 0;


function setup() {
  createCanvas(800,400);
  // createSprite(400, 200, 50, 50);

  engine = Engine.create();
	world = engine.world;

  ground1 = new Ground(350, 350, 200, 15);
  ground2 = new Ground(650, 200, 160, 15);

  //boxes on ground1
  createBox(270, 332, 9, "lightBlue");
  createBox(290, 312, 7, "pink");
  createBox(310, 292, 5, "lightGreen");
  createBox(330, 272, 3, "purple");
  createBox(350, 252, 1, "lightGrey");
  
  
  //boxes on ground2
  createBox(590, 182, 7, "lightBlue");
  createBox(610, 162, 5, "pink");
  createBox(630, 142, 3, "lightGreen");
  createBox(650, 122, 1, "purple");

  hexagon = new Polygon(50, 270, 40, 40);
  sling = new SlingShot(hexagon.body,{x:70, y: 270})



  Engine.run(engine);
}

function draw() {
  background(0);  
  strokeWeight(3);
  stroke("white");
  textSize(18);
  text("score :" + score, 50, 50);

  stroke("white");
  textSize(18);
  text("Press Space To Get Another Chance", 220, 50);

ground1.display();
ground2.display();
hexagon.display();
sling.display();

for(i = 0; i < boxes.length; i++){
  boxes[i].display();
}


  drawSprites();
}

function createBox(x, y, count, color) {
  var posX = x;
  for(i = 0; i < count; i++) {
    boxes.push(new Box(posX, y, 20, 20, color));
    posX = posX + 20;
  }
}

function mouseDragged() {
	//console.log(`x: ${mouseX}, y: ${mouseY}`)
  Matter.Body.setPosition(hexagon.body,{x: mouseX, y: mouseY});
  
}

function mouseReleased() {
	//console.log("mouse released")
  sling.fly();
  strokeWeight(3);
  score = score + 1;
}

function keyPressed() {
  if(keyCode == 32) {
      sling.attach(hexagon.body);
      Matter.Body.setPosition(hexagon.body, {x: 50 , y: 270});
  }
}