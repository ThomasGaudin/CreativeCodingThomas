// EASING ON CLICK

class App {
  constructor() {
    this.pixelRatio = window.devicePixelRatio || 1;
    this.canvas = document.createElement("canvas");
    this.canvas.width = window.innerWidth * this.pixelRatio;
    this.canvas.height = window.innerHeight * this.pixelRatio;
    this.canvas.style.width = window.innerWidth;
    this.canvas.style.height = window.innerHeight;
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.all_blocks = [];
    this.theBody = [];
    this.thepattes =[];
    this.thebras =[];
    this.setup();
  }

  setup() {

    this.mouse = { x: 0, y: 0 };

    this.pattes = new Array(
      new Pattes(window.innerWidth/2 * this.pixelRatio - 130, window.innerHeight/2 * this.pixelRatio + 580, 3, 150, this.ctx ),
      new Pattes(window.innerWidth/2 * this.pixelRatio + 130, window.innerHeight/2 * this.pixelRatio + 580, -3, 150, this.ctx )
      )

      this.body = new Body (
        window.innerWidth/2 * this.pixelRatio ,
        window.innerHeight/2 * this.pixelRatio,
        this.ctx
      )

      this.bras = new Bras(
        window.innerWidth/2 * this.pixelRatio,
        window.innerHeight/2 * this.pixelRatio,
        60,
        this.ctx
      )

      this.eyes = new Array(
        new Eye(window.innerWidth/2 * this.pixelRatio - 100,  window.innerHeight/2 * this.pixelRatio - 295, 80, this.ctx),
        new Eye(window.innerWidth/2 * this.pixelRatio + 100, window.innerHeight/2 * this.pixelRatio - 295, 80, this.ctx)
      );
      
    document.addEventListener("click", this.click.bind(this));
    document.addEventListener("mousemove", this.move.bind(this));
    this.draw();


  }

  draw() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.pattes.forEach((pattes) => {
      pattes.draw();
    })

    this.body.draw();

    this.eyes.forEach((eye) => {
      eye.draw(this.mouse.x, this.mouse.y);
    });

    this.bras.draw()
    requestAnimationFrame(this.draw.bind(this));
  }

  click(e) {
    this.bras.resetAndGo()
  }  


  move(e) {
    this.mouse = {
      x: e.clientX * this.pixelRatio,
      y: e.clientY * this.pixelRatio,
    };
    this.pattes.forEach((pattes) =>{
      if (
        pattes.checkiftouched(
          e.clientX * this.pixelRatio,
          e.clientY * this.pixelRatio
        )
      ) {
       pattes.resetAndGo();
       console.log("cc");
      }
    
  })
  }
}

window.onload = function () {
  new App();
};
