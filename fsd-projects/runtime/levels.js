// === LEVELS DEFINITIONS ===
// TODOs 7, 11, and 12 will require changes to this section
const LEVELS = [
  { 
    name: "Level 1",
    speed: 5,
    gameObjects: [
      { type: "obstacle", kind: "spikes", x: 1200, y: groundY, contactHealthChange: - 10},
      { type: "enemy", kind: "bug", x: 1600, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 2000, y: groundY, contactHealthChange: - 10},


      { type: "platform", kind: "basicPlatform", x: 2600, y: groundY - 60, contactHealthChange: -5},
      { type: "platform", kind: "basicPlatform", x: 2900, y: groundY - 110, contactHealthChange: -5},
      { type: "platform", kind: "basicPlatform", x: 3200, y: groundY - 160, contactHealthChange: -5}, 
      { type: "platform", kind: "basicPlatform", x: 3400, y: groundY - 160 },
      { type: "platform", kind: "basicPlatform", x: 3600, y: groundY - 160 },      
      { type: "powerup", kind: "healthUp", x: 3600, y: groundY - 220, contactHealthChange: 10, projectileHealthChange: 15, collect: true},
      { type: "enemy", kind: "bug", x: 3600, y: groundY, contactHealthChange: - 10},
      

      { type: "obstacle", kind: "spikes", x: 4000, y: groundY, contactHealthChange: - 10},

      { type: "goal", kind: "flag", x: 4500, y: groundY, contactScoreChange: 1, collect: false},
    ],
  },
  {
    name: "Level 2",
    speed: 7,
    gameObjects: [
      { type: "platform", kind: "basicPlatform", x: 1600, y: groundY - 60, contactHealthChange: -5},
      { type: "obstacle", kind: "spikes", x: 1650, y: groundY, contactHealthChange: - 10},
      { type: "platform", kind: "basicPlatform", x: 1950, y: groundY - 100, contactHealthChange: -5},
      { type: "obstacle", kind: "spikes", x: 2050, y: groundY, contactHealthChange: - 10},
      { type: "platform", kind: "basicPlatform", x: 2250, y: groundY - 120, contactHealthChange: -5},
      { type: "powerup", kind: "healthUp", x: 2400, y: groundY - 200, contactHealthChange: 10, projectileHealthChange: 15, collect: true},
      { type: "platform", kind: "basicPlatform", x: 2664, y: groundY - 60, contactHealthChange: -5},
      { type: "obstacle", kind: "spikes", x: 2650, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 2750, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 2850, y: groundY, contactHealthChange: - 10},
      
      { type: "obstacle", kind: "spikes", x: 3200, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 3500, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 3850, y: groundY, contactHealthChange: - 10},

      { type: "platform", kind: "basicPlatform", x: 4300, y: groundY - 84, contactHealthChange: -5},
      { type: "platform", kind: "basicPlatform", x: 4300, y: groundY - 133, contactHealthChange: -5},
      { type: "platform", kind: "basicPlatform", x: 4300, y: groundY - 183, contactHealthChange: -5},
      
      { type: "obstacle", kind: "spikes", x: 4670, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 5070, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 5470, y: groundY, contactHealthChange: - 10},
      
      { type: "goal", kind: "flag", x: 6000, y: groundY },
    ],
  },
  {
    name: "Level 3",
    speed: 8,
    gameObjects: [
      { type: "obstacle", kind: "spikes", x: 1500, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 1985, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 2000, y: groundY, contactHealthChange: - 10},

      { type: "obstacle", kind: "spikes", x: 2450, y: groundY, contactHealthChange: - 10},
      { type: "platform", kind: "basicPlatform", x: 2500, y: groundY - 10, contactHealthChange: -5},

      { type: "obstacle", kind: "spikes", x: 2700, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 2750, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 2800, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 2850, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 2900, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 2950, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 3000, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 3050, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 3100, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 3150, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 3200, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 3250, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 3300, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 3350, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 3400, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 3450, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 3500, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 3550, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 3600, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 3650, y: groundY, contactHealthChange: - 10},

      { type: "platform", kind: "basicPlatform", x: 3000, y: groundY - 50, contactHealthChange: -5},

      { type: "platform", kind: "basicPlatform", x: 3500, y: groundY - 100, contactHealthChange: -5},

      { type: "powerup", kind: "healthUp", x: 3950, y: groundY, contactHealthChange: 10, projectileHealthChange: 15, collect: true},
      { type: "obstacle", kind: "spikes", x: 4000, y: groundY, contactHealthChange: - 10},

      { type: "platform", kind: "basicPlatform", x: 4500, y: groundY - 10},

      { type: "obstacle", kind: "spikes", x: 4700, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 4750, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 4800, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 4850, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 4900, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 4950, y: groundY, contactHealthChange: - 10},
      

      { type: "platform", kind: "basicPlatform", x: 5000, y: groundY - 10},
      { type: "obstacle", kind: "spikes", x: 5250, y: groundY - 60, contactHealthChange: - 10},
      { type: "platform", kind: "basicPlatform", x: 5200, y: groundY - 10},
      { type: "platform", kind: "basicPlatform", x: 5400, y: groundY - 10},

      { type: "obstacle", kind: "spikes", x: 5600, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 5650, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 5700, y: groundY, contactHealthChange: - 10},
      { type: "obstacle", kind: "spikes", x: 5750, y: groundY, contactHealthChange: - 10},
      
      { type: "platform", kind: "basicPlatform", x: 5800, y: groundY - 50},
      { type: "enemy", kind: "bug", x: 6000, y: groundY - 100, contactHealthChange: - 10},
      { type: "platform", kind: "basicPlatform", x: 6000, y: groundY - 50},
      { type: "platform", kind: "basicPlatform", x: 6200, y: groundY - 50},


      { type: "platform", kind: "basicPlatform", x: 6600, y: groundY - 100},
      { type: "enemy", kind: "bug", x: 6700, y: groundY - 150, contactHealthChange: - 10},

      { type: "enemy", kind: "bug", x: 7100, y: groundY, contactHealthChange: - 10},
      { type: "platform", kind: "basicPlatform", x: 7700, y: groundY - 20},
      { type: "powerup", kind: "healthUp", x: 7800, y: groundY - 70, contactHealthChange: 10, projectileHealthChange: 15, collect: true},
      


      
      { type: "goal", kind: "flag", x: 8300, y: groundY },
    ],
  },
];

let currentLevel = LEVELS[0];
let currentLevelIndex = 0;
// === END LEVELS DEFINITIONS ===

// === DEFAULT VALUES FOR EACH "type" AND "kind" OF OBJECT (STUDENT-EDITABLE) ===
const DEFAULT_VALUES = {
  obstacle: {
    spikes: {
      imageUrl: "images/interactable/spikes.png",
      width: 48,
      height: 48,
      hitWidth: 48,
      hitHeight: 48,
      speedX: 0,
      speedY: 0,
      minY: 0,
      maxY: 0,
      contactHealthChange: -20,
      contactScoreChange: 0,
      projectileHealthChange: 0,
      projectileScoreChange: 0,
      hp: 0,
      collect: false,
    },
  },
  enemy: {
    bug: {
      imageUrl: "images/interactable/bug.png",
      width: 75,
      height: 75,
      hitWidth: 75,
      hitHeight: 75,
      speedX: 0,
      speedY: 0,
      minY: 0,
      maxY: groundY - 75,
      contactHealthChange: -30,
      contactScoreChange: 0,
      projectileHealthChange: 0,
      projectileScoreChange: 50,
      hp: 1,
      collect: false,
    },
  },
  powerup: {
    healthUp: {
      imageUrl: "images/interactable/health-up.png",
      width: 32,
      height: 32,
      hitWidth: 32,
      hitHeight: 32,
      speedX: 0,
      speedY: 0,
      minY: 0,
      maxY: groundY - 32,
      contactHealthChange: +20,
      contactScoreChange: 0,
      projectileHealthChange: +25,
      projectileScoreChange: 0,
      hp: 1,
      collect: true,
    },
  },
  goal: {
    flag: {
      imageUrl: "images/interactable/flag.png",
      width: 100,
      height: 100,
      hitWidth: 100,
      hitHeight: 100,
      speedX: 0,
      speedY: 0,
      minY: 0,
      maxY: 0,
      contactHealthChange: 0,
      contactScoreChange: +100,
      projectileHealthChange: 0,
      projectileScoreChange: 0,
      hp: 0,
      collect: true,
    },
  },
  platform: {
    basicPlatform: {
      imageUrl: "images/interactable/basic-platform.png",
      width: 200,
      height: 50,
      hitWidth: 200,
      hitHeight: 50,
      speedX: 0,
      speedY: 0,
      minY: 0,
      maxY: groundY - 50,
      contactHealthChange: 0,
      contactScoreChange: 0,
      projectileHealthChange: 0,
      projectileScoreChange: 0,
      hp: Infinity,
      collect: false,
    },
  },
};
// === END DEFAULT VALUES ===
