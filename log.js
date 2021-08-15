class Log {
    constructor(x, y, height,angle) {
      var options = {
          'restitution':0.08,
          'friction':1,
          'density':1.0
      }
      this.height = height;
      this.width = 20;
      this.body = Bodies.rectangle(x, y, 20 , height, options)
      Matter.Body.setAngle(this.body, angle)
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("brown");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  