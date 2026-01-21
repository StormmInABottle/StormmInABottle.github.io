// === SCENERY CREATION ===

/* Important Note:
    The background images will be drawn in order from top to bottom, so put the ones in the far background first, then work forward. Note that none of the background images can go in front of Hallebot.
*/

// TODO 1: Create more scenery instances
const scenery = {
  moon: {
    imageUrl: "images/backgrounds/moon.png",
    loopWidth: 0,
    instances: [{ x: 100, y: 175, width: 150, height: 150 }],
  },
  building: { //  { x: 400, width: 100, height: 300, speedX: -2 }
    imageUrl: "images/backgrounds/building.png",
    loopWidth: 1400,
    instances: [ // updates top to bottom, so the lowest code appears above the higher code
      // back buildings (slowest)
      { x: 0, width: 120, height: 250, speedX: -1.5},
      { x: 300, width: 130, height: 240, speedX: -1.5},
      { x: 550, width: 110, height: 260, speedX: -1.5},
      { x: 700, width: 135, height: 230, speedX: -1.5},
      { x: 900, width: 140, height: 270, speedX: -1.5},
      { x: 1150, width: 135, height: 245, speedX: -1.5},
      { x: 1400, width: 110, height: 260, speedX: -1.5},
      
      // front buildings (fastest)
      { x: 0, width: 120, height: 170, speedX: -2.5},
      { x: 90, width: 130, height: 190, speedX: -2.5},
      { x: 190, width: 110, height: 210, speedX: -2.5},
      { x: 250, width: 150, height: 155, speedX: -2.5},
      { x: 340, width: 150, height: 160, speedX: -2.5}, 
      { x: 490, width: 130, height: 190, speedX: -2.5},
      { x: 540, width: 160, height: 140, speedX: -2.5},
      { x: 640, width: 135, height: 180, speedX: -2.5},
      { x: 760, width: 150, height: 200, speedX: -2.5},
      { x: 850, width: 120, height: 160, speedX: -2.5},
      { x: 930, width: 150, height: 200, speedX: -2.5},
      { x: 1000, width: 130, height: 205, speedX: -2.5},
      { x: 1100, width: 120, height: 190, speedX: -2.5},
      { x: 1200, width: 150, height: 200, speedX: -2.5},
      { x: 1350, width: 130, height: 200, speedX: -2.5},
      { x: 1450, width: 110, height: 180, speedX: -2.5}
    ],
  },
  lamp: {
    imageUrl: "images/backgrounds/lamp.png",
    loopWidth: 1400,
    instances: [
      { x: 600, width: 50, height: 150, speedX: -4}, 
      { x: 300, width: 50, height: 160, speedX: -4}, 
      { x: 900, width: 50, height: 150, speedX: -4}, 
      { x: 1200, width: 50, height: 155, speedX: -4}, 
      { x: 1500, width: 50, height: 160, speedX: -4},
    ],
  },
};
