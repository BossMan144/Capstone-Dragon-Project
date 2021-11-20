
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world, backgroundImg;
var canvas, angle, dragon, ground, troll, minotaur;
var fireballs = [];
var trolls = [];
var minotaur = [];
var score = 0;
var trollAnimation = []; 
var minotaurAnimation = [];
var dragonAnimation = [];
var trollSpritedata, trollSpritesheet;
var minotaurSpritedata, minotaurSpritesheet;
var dragonSpritedata, dragonSpritesheet;

var deadTrollAnimation = [];
var deadMinotaurAnimation = [];
var deadDragonAnimation = [];
var deadTrollSpritedata, deadTrollSpritesheet;
var deadMinotaurSpritedata, deadMinotaurSpritesheet;
var deadDragonSpritedata, deadDragonSpritesheet;

var isGameOver = false;

function preload(){
  backgroundImg = loadImage("Images/Castle_bg.png");
  //trollSpritesheet = loadAnimation("Images/Troll_run1png", "Images/Troll_run2png", "Images/Troll_run3png", "Images/Troll_run4png", "Images/Troll_run5png", "Images/Troll_run6png", "Images/Troll_run7png");
 // minotaurSpritesheet = loadAnimation("Images/Minotaur_run1.png", "Images/Minotaur_run2.png", "Images/Minotaur_run3.png", "Images/Minotaur_run4.png", "Images/Minotaur_run5.png", "Images/Minotaur_run6.png", "Images/Minotaur_run7.png");
  //dragonSpritesheet = loadAnimation("Images/Dragon_still1.png", "Images/Dragon_still2.png", "Images/Dragon_still3.png");
  //deadTrollSpritesheet = loadAnimation("Images/Troll_die1.png", "Images/Troll_die2.png", "Images/Troll_die3.png", "Images/Troll_die4.png", "Images/Troll_die5.png", "Images/Troll_die6.png", "Images/Troll_die7.png");
  //deadMinotaurSpritesheet = loadAnimation("Images/Minotaur_die1.png", "Images/Minotaur_die2.png", "Images/Minotaur_die3.png", "Images/Minotaur_die4.png", "Images/Minotaur_die5.png", "Images/Minotaur_die6.png", "Images/Minotaur_die7.png");
  //deadDragonSpritesheet = loadAnimation("Images/Dragon_die1.png", "Images/Dragon_die2.png", "Images/Dragon_die3.png", "Images/Dragon_die4.png", "Images/Dragon_die5.png");
  // how to set up fire pos for dargon
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world =engine.world; 
  
  ground = Bodies.rectangle(0,height -10, width*2, 30, {isStatic: true});
  World.add(world,ground);

  dragon = Bodies.rectangle(100, height-100, 200, 200, {isStatic: true});
  World.add(world,dragon);
}


function draw() 
{
  background(backgroundImg);
  Engine.update(engine);
  rect(ground.position.x, ground.position.y, width*2, 1);
  rect(dragon.position.x, dragon.position.y, 50, 50);
  
}

