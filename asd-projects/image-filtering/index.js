// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  // applyFilterNoBackground(decreaseBlue);
  // applyFilter(increaseGreenByBlue);
  // applyFilterNoBackground(reddify);
  // applyFilter(increaseGreenByBlue)

  applyFilter(grayscale)
  applyFilterNoBackground(increaseGreenByBlue)
  applyFilterNoBackground(decreaseBlue)
  applyFilter(reddify)
  applyFilter(grayscale)
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here

function applyFilter(filterFunction) {
  for (let i = 0; i < image.length; i++) {
    row = image[i]
    for (let j = 0; j < row.length; j++) {
      var pixel = image[i][j]
      pixelArray = rgbStringToArray(pixel)
      // This is where I’ll modify the color values later
      filterFunction(pixelArray)
    
      updatedPixel = rgbArrayToString(pixelArray)
      image[i][j] = updatedPixel
    }
  }
}    

// TODO 9 Create the applyFilterNoBackground function

function applyFilterNoBackground(filterFunction){
  var backgroundColor = image[0][0];
  for (let i = 0; i < image.length; i++) {
      row = image[i]
      for (let j = 0; j < row.length; j++) {
        var pixel = image[i][j]
        if (pixel !== backgroundColor){
          var pixelArray = rgbStringToArray(pixel);
          filterFunction(pixelArray);
          var updatedString = rgbArrayToString(pixelArray);
          image[i][j] = updatedString;
        }
      }
  }
}


// TODO 6: Create the keepInBounds function

function keepInBounds(number) {
  if (number < 0) {
    return 0
  }
  else if (number > 255) {
    return 255
  }
  else {
    return number
  }
}

// TODO 4: Create reddify filter function
function reddify(pixelArray) {
  pixelArray[RED] = 200
}

// TODO 7 & 8: Create more filter functions
function decreaseBlue(pixelArray){
  pixelArray[BLUE] -= 50
  keepInBounds(pixelArray[BLUE])
}

function increaseGreenByBlue(pixelArray){
  pixelArray[GREEN] += pixelArray[BLUE];
  keepInBounds(pixelArray[GREEN])

}

// CHALLENGE code goes below here

function grayscale(pixelArray){
  var averageValue = (pixelArray[GREEN] + pixelArray[BLUE] + pixelArray[RED]) / 3
  console.log(pixelArray)
  console.log("avgV: " + averageValue)
  pixelArray[GREEN] = averageValue
  pixelArray[BLUE] = averageValue
  pixelArray[RED] = averageValue
}