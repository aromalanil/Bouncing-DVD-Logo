function setup() {
  createCanvas(1000,600);
  picktink();

}
var dvd;
function preload(){
  dvd= loadImage("dvd.png");
}
function picktink(){
  var r=random(256);
  var b=random(256);
  var g=random(256);
  tint(r,b,g);
}

var x=20;
var y=10;
var length_b=110;
var width_b=100;
var speed_left=3.5;
var speed_top=3.5;


function draw() {
  background(255, 204, 0);
  x=x+speed_left;
  y=y+speed_top;
  image(dvd,x,y,width_b,length_b);
  if(x+width_b>=width)
  {
   speed_left*=-1;
   picktink();
  }
  if(x<=0)
  {
    speed_left*=-1;
    picktink();
  }
  if(y+length_b>=height)
  {
   speed_top*=-1;
   picktink();
  }
  if(y<=0)
  {
    speed_top*=-1;
    picktink();
  }
}
