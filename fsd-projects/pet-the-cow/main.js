import kaplay from "https://unpkg.com/kaplay@4000.0.0-alpha.26/dist/kaplay.mjs";
kaplay({
    background: "#56c4b9",
    debugKey: "d",
    debug: true
});

var score = 0;
var dragging = false
var pat = 0;
var patting = false
setLayers(["bg", "obj", "ui"], "obj");

const foods = [
    "apple",
    "grape",
    "jam",
    "pineapple",
    "watermelon"
] 

// load in these bad boys >:3
loadSound("chomp", "images/chomp.mp3");

loadSprite("heart", "images/heart.png");
loadSprite("cursor", "images/cursor.png");
loadSprite("cow", "images/cow.png");
loadSprite("cowMouth", "images/mouth_cow.png");
loadSprite("cowPat", "images/pat_cow.png");





for (var snack of foods) {
    loadSprite(`${snack}`, `images/${snack}.png`)
}


// returns the heart sprite
function addFood() {
    const type = foods[Math.floor(rand(foods.length))]
    // console.log(Math.floor(rand(foods.length)))
    // console.log(type)
    return add([
        // sprite("heart"),
        sprite(`${type}`),
        pos(rand(width()-45),rand(height()-45)),
        area({isSensor: true,}),
        "food"
    ]); 
}

function pats() {
    const parts = add([
        pos(mousePos()),
        particles({
            max: 1,
            speed: [50, 100],
            angle: [-90, 90],
            angularVelocity: [0, 90],
            lifeTime: [1.0, 1.5],
            opacities: [0.1, 1.0, 0.0],
            texture: getSprite("heart").data.tex,
            quads: [getSprite("heart").data.frames[0]],
        }, {
            lifetime: 1,
            rate: 100,
            direction: -90,
            spread: 30,
        }),
    ]);

    parts.emit(0);
}

function main() {
 

    // !------------------ SPRITES ---------------------!
    // cursor sprite
    const cursor = add([ 
        sprite("cursor"),
        anchor("center"),
        pos(),
        layer("ui"),
        scale(0.08,0.08),
        fakeMouse(),
        "cursor"
    ])
    // bye bye boring mouse
    setCursor("none");

    // visual score 
    const scoreText = add([
        text(`Score: ${score}`),
        pos(-100+width()/2,20),
        layer("ui"),
        "ui",
        "text"
    ])

    const titleText = add([
        text(`Feed the Cow!!! `),
        pos(-140+width()/2,height()-50),
        layer("ui"),
        "ui",
        "text"
    ])


    // my beloved cow sprite
    const cow = add([
        sprite("cow"),
        pos(width()/2, height()/2),
        anchor("center"),
        scale(.2,.2),
        area({isSensor: true, shape: new Rect(vec2(0,-400), 700, 500)}),
        layer("obj"),
        "cow",
        "normal"
    ]);

    const cowPat = add([
        sprite("cowPat"),
        pos(width()/2, height()/2),
        anchor("center"),
        scale(.2,.2),
        area({isSensor: true, shape: new Rect(vec2(0,-400), 700, 500)}),
        layer("obj"),
        "cow",
        "pat"
    ]);

    const cowMouth = add([
        sprite("cowMouth"),
        pos(width()/2, height()/2),
        anchor("center"),
        scale(.2,.2),
        area({isSensor: true, shape: new Rect(vec2(0,100), 400, 400)}),
        layer("obj"),
        "cow",
        "open_mouth"
    ]);

    
    // !------------------ GAME CODE ---------------------!

    // initial food spawn
    const food = addFood()
    cowPat.hidden = true
    cowMouth.hidden = true

    // eat it
    cowMouth.onCollide("food", (food) => {
        score += 1
        // console.log(score)
        // chomp noise
        const chompSound = play("chomp", {
            volume: 1,
            speed: 1,
            loop: false
    })
        destroy(food)
        dragging = false
        addFood()
    });
    
    // fun function for patting the cow <3
    onHoverUpdate("cow", () => {
        
        if (isMouseDown() && !dragging && mousePos().y <= 460) {
            patting = true
            pat += 1
            if (pat >= 10) {
                pats()
                pat = 0
            }
        }
        else {
            patting = false
            pat = 0
        }
    })

    
    cow.onUpdate(() => {
        if (dragging === true) {
            cow.hidden = true
        }
        else {
            cow.hidden = false
        }
        if (patting === true) {
            cow.hidden = true
        }
        else {
            cow.hidden = false
        }
    })

    cowMouth.onUpdate(() => {
        if (dragging === true) {
            cowMouth.hidden = false
        }
        else {
            cowMouth.hidden = true
        }
    })
    
    cowPat.onUpdate(() => {
        if (patting === true) {
            cowPat.hidden = false
        }
        else {
            cowPat.hidden = true
        }
    })

    // everytime u eat a food u get a point
    scoreText.onUpdate(() => {
        scoreText.text = `Score: ${score}`
        // console.log(dragging)        
    })

    onUpdate("food", () => {
        if (dragging === true) {
            if (isMouseDown()) {
                var foods = get("food")
                foods.forEach((food) => {
                    food.pos = mousePos()
                    food.pos.x -= 25
                    food.pos.y -= 65
                })
            } 
            else {
                dragging = false
            }
            
        }
    })

    // detect collision
    onHoverUpdate("food", () => {
        // console.log("hovering")
        if (!isMouseDown()) {
            // console.log("not mouse down")
            dragging = false
        }
        else {
            // console.log("mouse is down")
            dragging = true
        }

    })

}


main();