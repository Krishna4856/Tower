const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;

var engine,world;
var stand1,stand2;
var b1,b2;
var holder,ball,ground;
var ball;
var slingShoot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup(){
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    stand1=new Stand(390,300,250,10);
    stand2=new Stand(700,200,200,10);
    b1=new Box(300,275,30,40);
    b2=new Box(330,275,30,40);
    b3=new Box(360,275,30,40);
    b4=new Box(390,275,30,40);
    b5=new Box(420,275,30,40);
    b6=new Box(450,275,30,40);
    b7=new Box(480,275,30,40);

    b8=new Box(330,235,30,40);
    b9=new Box(360,235,30,40);
    b10=new Box(390,235,30,40);
    b11=new Box(420,235,30,40);
    b12=new Box(450,235,30,40);

    b13=new Box(360,195,30,40);
    b14=new Box(390,195,30,40);
    b15=new Box(420,195,30,40);

    b16=new Box(390,155,30,40);

    bk1=new Box(640,175,30,40);
    bk2=new Box(670,175,30,40);
    bk3=new Box(700,175,30,40);
    bk4=new Box(730,175,30,40);
    bk5=new Box(760,175,30,40);

    bk6=new Box(670,135,30,40);
    bk7=new Box(700,135,30,40);
    bk8=new Box(730,135,30,40);

    bk9=new Box(700,9530,40);
    
    ball=Bodies.circle(50,200,20);
    World.add(world,ball);

    slingShoot=new Slingshoot(this.ball,{x:100,y:200});

}
function draw(){
    background("violet");
    //Engine.update(engine);
   
    textSize(20);
    fill("lightyellow");
    text("Drag to Hexagonal Stone and Release it,to launch it towards the blocks",100,30);
    ground.display();
    stand1.display();
    stand2.display();
    strokeWeight(2);
    stroke(15);
    fill("skyblue");
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    fill("pink");
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    fill("turquoise");
    b13.display();
    b14.display();
    b15.display();
    fill("grey");
    b16.display();
    fill("skyblue");

    bk1.display();
    bk2.display();
    bk3.display();
    bk4.display();
    bk5.display();
    fill("turquoise");
    bk6.display();
    bk7.display();
    bk8.display();
    fill("pink");
    bk9.display();
    fill("gold");
    imageMode(CENTER)
    image(polygon_img,ball.position.x,ball.position.y,40,40);
    
    slingShoot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShoot.fly();
}
