class Tile {
  constructor(x, y, size, color, ctx) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.rotation = false;
    this.angle = Math.round(Math.random()) * (Math.PI / 2);
    this.ctx = ctx;
    this.bgColor = "white";
  }

  updateAngle() {
    this.angle += Math.PI / 2;
  }

  draw() {
    this.ctx.save();
    this.ctx.translate(this.x, this.y);
    this.ctx.rotate(this.angle);
  
    this.ctx.fillStyle = this.bgColor;
    this.ctx.beginPath();
    this.ctx.rect(0 - this.size / 2, 0 - this.size / 2, this.size, this.size);
    this.ctx.fill();

    this.ctx.closePath();
    //
    this.ctx.fillStyle = "black";
    this.ctx.beginPath()
    this.ctx.moveTo(0 - this.size / 2, 0 - this.size / 2);
    this.ctx.lineTo(this.size / 2, 0-this.size/2);
    this.ctx.lineTo(0, 0);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();


    this.ctx.fillStyle = "black";
    this.ctx.beginPath()
    this.ctx.moveTo(0, this.size/2);
    this.ctx.lineTo(this.size/2,this.size/2);
    this.ctx.lineTo(this.size/2, 0);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
  

    this.ctx.fillStyle = "black";
    this.ctx.beginPath()
    this.ctx.moveTo(0 - this.size/2, 0 );
    this.ctx.lineTo(0,0);
    this.ctx.lineTo(0, this.size / 2);
    // this.ctx.lineTo(0, 0 - this.size / 2);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.restore();





  }
}
