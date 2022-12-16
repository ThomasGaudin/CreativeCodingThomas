let move = false
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
    this.img_file = "./asset/andy.jpg";
    this.setup();
  }

  initWebcam() {
    //init webcam
    this.video = document.createElement("video");
    // document.body.appendChild(this.video);

    navigator.getMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia;

    navigator.getMedia(
      {
        video: { width: 640, height: 480 },
        audio: false,
      },
      (stream) => {
        // if (navigator.mozGetUserMedia || navigator.msGetUserMedia) {
        //   video.mozSrcObject = stream;
        // }
        this.video.srcObject = stream;
        this.video.play();
      },
      (err) => {
        console.log("An error occured! " + err);
      }
    );
  }

  setup() {
    // init webcam
    this.initWebcam();
    // create grid
    this.grid = [];
    this.scale = 2;
    //quel espace entre chaque cercle si on en veut 50 sur la largeur et la hauteur
    this.stepX = Math.floor(640 / 100);
    this.stepY = Math.floor(480 / 100);
    // coordonnee de décalage de la grille
    this.offsetX =
      (window.innerWidth / 2) * this.pixelRatio -
      (this.stepX * 100 * this.scale) / 2;
    this.offsetY =
      (window.innerHeight / 2) * this.pixelRatio -
      (this.stepY * 100 * this.scale) / 2;
    //creation de la grille
    for (let j = 0; j < 480; j += this.stepY) {
      for (let i = 0; i < 640; i += this.stepX) {
        this.grid.push(
          new Circle(
            this.offsetX + i * this.scale,
            this.offsetY + j * this.scale,
            10,
            this.ctx
          )
        );
      }
    }
    document.addEventListener("click", (event) => {
      this.mouse = {
        x: event.clientX * this.pixelRatio,
        y: event.clientY * this.pixelRatio,
      };
      this.mouvement()
      if(move == false){
        move = true
      }else{
        move = false
      }
    });
    this.draw();
  }

  detectPixels() {
    console.log("detectPixels");
    if (this.video) {
      this.ctx.drawImage(this.video, 0, 0, 640, 480);
    }
    // get image data from canvas
    this.imgData = this.ctx.getImageData(0, 0, 640, 480);
    // get pixel data
    this.pixels = this.imgData.data;

    // get rgb data for each step pixel in 100 x 100
    this.rgb = [];
    for (let j = 0; j < 480; j += this.stepY) {
      for (let i = 0; i < 640; i += this.stepX) {
        let index = (j * 640 + i) * 4;
        this.rgb.push({
          r: this.pixels[index],
          g: this.pixels[index + 1],
          b: this.pixels[index + 2],
          a: this.pixels[index + 3],
        });
      }
    }

    // this.draw();
  }

  mouvement(){
    let sinus = Math.sin(count/10)
    let mouvementX = sinus *10

    return mouvementX
  }

  draw() {
    count = count + 0.01
    console.log();
    this.detectPixels();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //draw all circle of the grid
    this.grid.forEach((circle, index) => {
      const color = this.rgb[index];
      circle.color = `rgba(${color.g}, ${color.g}, ${color.b},0.4)`;
      if(move == true){
       circle.x = circle.x + this.mouvement()
      }else{
        circle.x = circle.x
      }
      circle.draw();
    });

    requestAnimationFrame(this.draw.bind(this));
  }

  map(x, inMin, inMax, outMin, outMax) {
    return ((x - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  }
}

window.onload = function () {
  new App();
};


