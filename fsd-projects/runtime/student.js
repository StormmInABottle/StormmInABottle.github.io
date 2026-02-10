function moveScenery() {
  // TODO 2: Move background scenery based on current level speed

  for (i = 0; i < scenery.building.instances.length; i++) {
    var buildingInstance = scenery.building.instances[i];
    buildingInstance.x += buildingInstance.speedX
    if (buildingInstance.x + buildingInstance.width < 0) {
      buildingInstance.x = scenery.building.loopWidth;
    }
  }

  for (i = 0; i < scenery.lamp.instances.length; i++) {
    var lampInstance = scenery.lamp.instances[i];
    lampInstance.x += lampInstance.speedX
    if (lampInstance.x + lampInstance.width < 0) {
      lampInstance.x = scenery.lamp.loopWidth;
    }
  }


}



function generateLevel() {
  // TODO 3: Generate the current level's game objects
  console.log("level generated")
  for (i=0; i < currentLevel.gameObjects.length; i++) {
    var currentObject = currentLevel.gameObjects[i]
    create(currentObject)
    // console.log(currentObject)
  }
}

function create(obj) {
  // TODO 4: Create a game object based on its type and kind
  if (obj.type == "obstacle") {
    makeObstacle(obj);
    // console.log(obj.type + " object made")
  }
  else if (obj.type == "enemy") {
    makeEnemy(obj);
    // console.log(obj.type + " object made")
  }
  else if (obj.type == "powerup") {
    makePowerup(obj);
    // console.log(obj.type + " object made")
  }
  else if (obj.type == "platform") {
    makePlatform(obj);
    // console.log(obj.type + " object made")
  }
  else if (obj.type == "goal") {
    makeGoal(obj);
    // console.log(obj.type + " object made")
  }
}

function filterObjects(type) {
  // TODO 5: Return only the game objects of the specified type
  var filteredTypes = [];
  var bugarray = [];
  for (i=0; i < gameObjects.length; i++) {
    if (gameObjects[i].type == type) {
      filteredTypes.push(gameObjects[i])
      bugarray.push(gameObjects[i].type)
      // console.log("filtered object type " + type)
      // console.log(filteredTypes)
    }
  }
  console.log("bugarray: " + bugarray)
  return filteredTypes
  }

function moveGameObjects(objectList) {
  // TODO 6: Move all game objects of a single type based on speeds
  for (i=0; i < objectList.length; i++) {
    var currentObject = objectList[i]
    currentObject.x += currentObject.speedX
    currentObject.x -= currentLevel.speed
  }
// console.log(currentObject.x)
// console.log(currentLevel.speed)

}
 
function handleProjectileCollisions() {
  // TODO 8: Handle collisions between projectiles and enemies
  for (i=0; i < gameObjects.length; i++) { // loop over game objects
    var currentObject = gameObjects[i]; // get current object
    // console.log(currentObject)
    for (j=0; j < projectiles.length; j++ ) { // loop over projectiles
        var currentProjectile = projectiles[j]; // get current projectile
        // console.log(currentProjectile)
        if (isCollidingWithProjectile(currentObject, currentProjectile) === true) {
            handleProjectileObjectCollision(j, i)
            console.log("objects collided ;]")
        }
    }
}
}


function handleHallebotGenericCollisions() {
  // TODO 9: Handle collisions between Hallebot and game objects
  for (i=0; i < gameObjects.length; i++) {
    currentObject = gameObjects[i]
    // console.log(currentObject)
    if (currentObject.type != "platform" && isGenericCollision(currentObject)) {
      handleHallebotGenericCollision(i)
      console.log("collision")
    }
  }
}

function triggerLevelTransition() {
  // TODO 10: Transition to the next level or show win screen
  currentLevelIndex += 1
  currentLevel = LEVELS[currentLevelIndex]
  console.log(currentLevel)
  gameObjects = []
  if (currentLevelIndex >= LEVELS.length) {
    player.winConditionMet = true
  }
  else {
    generateLevel()
  }
}
