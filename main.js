let kinematics;

function setup() {
  canvas = createCanvas(800, 800);

  kinematics = new Kinematics();

  frameRate(60);
}

function draw() {
  background(64);

  kinematics.draw();

  document.getElementById("heightVal").innerHTML = document.getElementById("height").value;
  document.getElementById("forwardVal").innerHTML = document.getElementById("forward").value;

  let height  = parseInt(document.getElementById("height").value);
  let forward = parseInt(document.getElementById("forward").value);
  kinematics.calculateKinematics(forward, height);

  document.getElementById("angleA").innerHTML = "Angle A: " + kinematics.firstAngle;
  document.getElementById("angleB").innerHTML = "Angle B: " + kinematics.secondAngle;

  strokeWeight(1);
  stroke(0,0,0);
  line(0, height + kinematics.anchor.y, 800, height + kinematics.anchor.y);
  line(forward + kinematics.anchor.x, 0, forward + kinematics.anchor.x, 800);
}
