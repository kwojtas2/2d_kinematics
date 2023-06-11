class Kinematics {
  constructor() {
    this.firstColor  = color(255, 204, 0);
    this.secondColor = color(235, 52, 86);

    this.firstLength  = 300;
    this.secondLength = 300;

    this.firstAngle  = 0;
    this.secondAngle = 0;

    this.anchor = createVector(400, 200);

    this.precision = 1;
  }

  calculateKinematics(x, y) { // x - X translation; y - Y translations
    let height =  Math.sqrt(Math.pow(y, 2) + Math.pow(x, 2));

    let angleOffset = asin(-x / height);

    let cosSecond = acos((Math.pow(this.firstLength, 2) + Math.pow(this.secondLength, 2) - Math.pow(height, 2)) / (2 * this.firstLength * this.secondLength));
    let cosFirst  = acos((Math.pow(height, 2) + Math.pow(this.firstLength, 2) - Math.pow(this.secondLength, 2)) / (2 * height * this.firstLength));

    this.firstAngle = cosFirst + angleOffset;
    this.secondAngle = cosSecond;

    this.firstAngle  = Math.floor(this.firstAngle  * Math.pow(10, this.precision)) / Math.pow(10, this.precision);
    this.secondAngle = Math.floor(this.secondAngle * Math.pow(10, this.precision)) / Math.pow(10, this.precision);
  }

  draw() {
    angleMode(DEGREES);

    fill(192, 52, 235);
    noStroke();
    circle(this.anchor.x, this.anchor.y, 20);
    push();
      strokeWeight(4);
      // first:
      translate(this.anchor.x, this.anchor.y);
      rotate(this.firstAngle + 90);
      stroke(this.firstColor);
      line(0, 0, this.firstLength, 0);
      fill(this.firstColor);
      circle(this.firstLength, 0, 20);

      // second
      translate(this.firstLength, 0);
      rotate(this.secondAngle - 180);
      stroke(this.secondColor);

      line(0, 0, this.secondLength, 0);
      fill(this.secondColor);
      circle(this.secondLength, 0, 20);

    pop();


    // document.getElementById("angleA").innerHTML = "Angle A: " + this.first.angle;
    // document.getElementById("angleB").innerHTML = "Angle B: " + this.second.angle;
  }
}


class Linkage {
  constructor(startPoint, length, initialAngle, color) {
    this.startPoint = startPoint;
    this.length = length;
    this.angle = initialAngle;
    this.color = color;
  }

  draw(addAngle) {
    push();
      strokeWeight(4);
      stroke(this.color);
      translate(this.startPoint.x, this.startPoint.y);
      rotate(this.angle);
      line(0, 0, this.length, 0);
      fill(this.color);
      circle(this.length, 0, 20);
      // if(this.child != null) {
      //   translate(this.length, 0);
      //   this.child.draw();
      // }
    pop();
  }
}
