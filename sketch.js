var bullet;
var gun, gunImage;
var wall;
var speed;
var thickness
var weight;
var damage;

function setup() {
  createCanvas(620, 300);

  speed = Math.round(random(223, 321));
  thickness = Math.round(random(22, 83));
  weight = Math.round(random(30, 52));
  damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

  bullet = createSprite(50, 150, 20, 5);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  gunImage = loadImage ("gun.png");
  gun = createSprite(50, 160, 5, 5);
  gun.addImage(gunImage);
  gun.scale = 0.1;

  wall = createSprite (600, 200, thickness, 700);

}

function draw() {
  background(10);

  bullet.collide (wall);

  if (damage < 10){
    wall.shapeColor = "green";
  } else if (damage => 10){
    wall.shapeColor = "red";
  }

  drawSprites();
  text("Thickness: " + thickness, width/2 - 50, 50);
  text("Total Damage: " + Math.round(damage), width/2 - 60, 70);
}
