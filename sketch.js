const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground;
var engine;
var world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, 
box11, box12, box13, box14, box15, box16, box17, box18, box19, box20;
var ball, rope;

function setup() {
  createCanvas(1600,600);
   engine = Engine.create();
   world = engine.world;

  ground = new Ground(800,580,1600,20);

  box1 = new Box(800,100,50,50);
  box2 = new Box(800,100,50,50);
  box3 = new Box(800,100,50,50);
  box4 = new Box(800,100,50,50);
  box5 = new Box(800,100,50,50);
  box6 = new Box(800,100,50,50);
  box7 = new Box(800,100,50,50);
  box8 = new Box(800,100,50,50);
  box9 = new Box(800,100,50,50);
  box10 = new Box(800,100,50,50);
  box11 = new Box(1000,100,50,50);
  box12 = new Box(1000,100,50,50);
  box13 = new Box(1000,100,50,50);
  box14 = new Box(1000,100,50,50);
  box15 = new Box(1000,100,50,50);
  box16 = new Box(1000,100,50,50);
  box17 = new Box(1000,100,50,50);
  box18 = new Box(1000,100,50,50);
  box19 = new Box(1000,100,50,50);
  box20 = new Box(1000,100,50,50);

  ball = new Ball(500,450,50,50);
  rope = new Rope(ball.body, {x:500, y:50});
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  
  ground.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  ball.display();
  rope.display();
  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
  
  }

  function mouseReleased(){
    rope.fly();   
    
    
    }

    function keyPressed(){
      if(keyCode === 32){
          rope.attach(ball.body);
          Matter.Body.setPosition(ball.body, {x: 500 , y: 450});
        }
  }