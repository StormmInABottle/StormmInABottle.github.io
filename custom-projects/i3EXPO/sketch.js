const density = "Ñ@#W$9876543210?!abc;:+=-,._          ";
// const density = '       .:-i|=+%O#@'
// const density = '        .:░▒▓█';
// const density = "█▓▒:.  ";




let gloria;
let apple;
var colorsEnabled = true

// function preload() {
//   gloria = loadImage("assets/gloria.png")
//   apple = loadImage("assets/apple.png")
// }

function setup() {
  createCanvas(800, 800);
  video = createCapture(VIDEO);
  // video = createCanvas(VIDEO, {flipped: true})
  // deletes the ASCII part for some reason???? dont enable
  video.size(100,100);
  video.hide()
}

function enableColors() {
  colorsEnabled = !colorsEnabled
  console.log(colorsEnabled)
}

function draw() {
  var colorButton = document.getElementById("changeColors");
  background(0);

  let w = width / video.width;
  let h = height / video.height;
  
  video.loadPixels();
  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {

      const pixelIndex = (i + j * video.width) * 4;
      var r = video.pixels[pixelIndex + 0]
      var g = video.pixels[pixelIndex + 1]
      var b = video.pixels[pixelIndex + 2]
      const avg = (r + g + b) / 3

      noStroke();
      if (colorsEnabled) {
        fill(r,g,b)
        colorButton.innerHTML = "Disable Colors"
      }
      else {
        fill(255)
        colorButton.innerHTML = "Enable Colors"

      }
      
      // fill(0, g, 5)
      // square(i*w, j*h, w)

      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, len, 0));

      textSize(w)
      textAlign(CENTER, CENTER)
      text(density.charAt(charIndex), i*w+w*0.5, j*h+h*0.5)
    }
  }
  // filter(INVERT)
}
