$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();
    // x, y, width, height, color, minX, maxX, speed, minY, maxY, speedY
    createPlatform(50,700,250,15); // beginning platform
    createPlatform(300, 600, 30, 140); //first spire
    createBadPlatform(330, 600, 30, 15, "red"); //first spire KILLER
    createPlatform(500,485,80,255); //second spire
    createPlatform(725,400,150,30); //first landing pad
    createBadPlatform(860,300,15,100, "red"); //wall
    createPlatform(500,290,100,25); // second landing
    createPlatform(725,200,150,15); // toppest landing pad
    createPlatform(1100,600,120,15, "gray", 1100, 1200, 2); //landing pad

    // type, x, y, gravity, bounce, minX, maxX, speed
    createCollectable("database", 520, 450, 0, 0); // 1
    createCollectable("database", 520, 250, 0, 0); // 2
    createCollectable("database", 800, 160, 0, 0); //3 
    createCollectable("database", 1100, 560, 0, 0, 1150, 1250, 2); //4

    // wallLocation, position, timeBetweenShots, width, height
    createCannon("left", 675, 50)
    createCannon("bottom", 350, 600)
    createCannon("bottom", 620, 600)
    createCannon("top", 1050, 600)


    // "database", "diamond", "grace", "kennedi", "max", and "steve"

    // TODO 2 - Create Platforms




    // TODO 3 - Create Collectables



    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
