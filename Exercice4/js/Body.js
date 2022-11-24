class Body {
    constructor(x, y, ctx) {
      this.x = x;
      this.y = y;
      this.ctx = ctx;
    }
  
    draw() {
      this.ctx.save();
      //CORPS
      this.ctx.lineWidth = 10
      this.ctx.strokeStyle = "rgb(255, 255, 255)"
      this.ctx.beginPath();
      this.ctx.fill();
      this.ctx.fillStyle = "black";
      this.ctx.beginPath();
      this.ctx.ellipse(this.x, this.y, 300, 600, 0, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.stroke()
      this.ctx.closePath();
      this.ctx.restore();

      //VISAGE
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.fillStyle = "white";
      this.ctx.beginPath();
      this.ctx.ellipse(window.innerWidth, window.innerHeight - 300, 250, 140, 0, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.restore();
      this.ctx.save();
      

      // //BRAS GAUCHE
      // this.ctx.lineWidth = 10
      // this.ctx.strokeStyle = "rgb(255, 255, 255)"
      // this.ctx.beginPath();
      // this.ctx.fill();
      // this.ctx.fillStyle = "black";
      // this.ctx.beginPath();
      // this.ctx.ellipse(window.innerWidth - 280, window.innerHeight+130, 60, 300, 0, 0, 2 * Math.PI);
      // this.ctx.fill();
      // this.ctx.stroke()
      // this.ctx.closePath();
      // this.ctx.restore();
      // this.ctx.save();


      // //BRAS DROITE
      // this.ctx.lineWidth = 10
      // this.ctx.strokeStyle = "rgb(255, 255, 255)"
      // this.ctx.beginPath();
      // this.ctx.fill();
      // this.ctx.fillStyle = "black";
      // this.ctx.beginPath();
      // this.ctx.ellipse(window.innerWidth + 280, window.innerHeight+130, 60, 300, 0, 0, 2 * Math.PI);
      // this.ctx.fill();
      // this.ctx.stroke()
      // this.ctx.restore();
      // this.ctx.save();

      //BEC
      this.ctx.lineWidth = 7
      this.ctx.strokeStyle = "rgb(255, 162, 0)"
      this.ctx.beginPath();
      this.ctx.fillStyle = "rgb(255, 140, 0)";
      this.ctx.moveTo(window.innerWidth+40, window.innerHeight-230);
      this.ctx.lineTo(window.innerWidth-40, window.innerHeight-230);
      this.ctx.lineTo(window.innerWidth,window.innerHeight-90);
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.stroke();
      this.ctx.restore();

      //VENTRE
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.fillStyle = "white";
      this.ctx.beginPath();
      this.ctx.ellipse(window.innerWidth, window.innerHeight + 300, 200, 300, 0, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.restore();



   
      
     
    }
  }