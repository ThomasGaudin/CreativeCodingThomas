class Bras {
    constructor(x,y, radius, rotation, ctx, w, h){
        this.x = x;
        this.y = y;
        this.originRadius = radius;
        this.targetRadius = radius;
        this.radius = radius;
        this.originRotation = rotation;
        this.rotation = rotation
        this.ctx = ctx;
        this.w = w;
        this.h = h;
        this.zoneTouch = 10 // in percent
        this.speed = 0.01;
        this.isScaleUp=false;
        this.t = 0;
    }


    checkiftouched(x, y) {
      return (
        x > this.x - this.w/this.zoneTouch &&
        x < this.x + this.w/this.zoneTouch &&
        y > this.y-this.h/this.zoneTouch &&
        y < this.y + this.h/this.zoneTouch
      );
    }

    movingButNotouching(){
      this.t = 0;
      this.originRadius = this.radius;
      this.isScaleUp = false;
      this.targetRadius = 150;
    }

draw() {

 if (Math.abs(this.targetRadius - this.radius) > 0.01) this.scale();
else this.radius = this.targetRadius; //on force la position finale


this.ctx.lineWidth = 10
this.ctx.strokeStyle = "rgb(255, 255, 255)"
this.ctx.beginPath();
this.ctx.fill();
this.ctx.fillStyle = "black";
this.ctx.beginPath();
this.ctx.ellipse(this.x,this.y, this.radius, 300, this.rotation, 0, 2 * Math.PI);
this.ctx.fill();
this.ctx.stroke()
this.ctx.closePath();
this.ctx.restore();
this.ctx.save();
}

// resetAndGo(x, y) {
//   console.log("isTouched")
//   this.t = 0;
//   this.originRadius = this.radius;
//     this.isScaleUp = true
//     this.targetRadius = 260;
// }
resetAndGo(x, y) {
    this.t = 0;
    this.originRadius = this.radius;
    if (this.radius == 60) {
      this.targetRadius = 100;
    } else {
      this.targetRadius = 60;
    }
  }

  scale() {
    this.t += this.speed;
    const ease = Easing.cubicOut(this.t);
    this.radius = Math.abs(
      this.originRadius + (this.targetRadius - this.originRadius) * ease
    );
  }

  distance(target, goal) {
    return Math.sqrt(
      Math.pow(target.x - goal.x, 2) + Math.pow(target.y - goal.y, 2)
    );
  }
}

