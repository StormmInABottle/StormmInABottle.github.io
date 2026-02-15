import kaplay from "https://unpkg.com/kaplay@4000.0.0-alpha.26/dist/kaplay.mjs";
kaplay({
    background: "#56c4b9",
    debug: false
});
var score = 0;
var dragging = false
setLayers(["bg", "obj", "ui"], "obj");

const foods = [
    "apple",
    "grape",
    "heart",
    "jam",
    "pineapple",
    "watermelon"
]


// returns the heart sprite
function addHeart() {
    const type = foods[Math.floor(rand(foods.length))]
    console.log(Math.floor(rand(foods.length)))
    console.log(type)
    return add([
        // sprite("heart"),
        sprite(`${type}`),
        pos(rand(width()-45),rand(height()-45)),
        area({isSensor: true,}),
        "heart"
    ]); 
    
    
}

function main() {
    // load in these bad boys >:3
    loadSprite("cursor", "images/cursor.png");
    loadSprite("cow", "images/cow.png");
    loadSprite("cowMouth", "images/mouth_cow.png");
    loadSound("chomp", "images/chomp.mp3");

    for (var food of foods) {
        loadSprite(`${food}`, `images/${food}.png`)
    }

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
        area({isSensor: true, shape: new Rect(vec2(0,0), 400, 500)}),
        layer("obj"),
        "cow"
    ]);

    const cowMouth = add([
        sprite("cowMouth"),
        pos(width()/2, height()/2),
        anchor("center"),
        scale(.2,.2),
        area({isSensor: true, shape: new Rect(vec2(0,0), 400, 500)}),
        layer("obj"),
        "cow"
    ]);

    
    // !------------------ GAME CODE ---------------------!

    // initial heart spawn
    const heart = addHeart()


    // eat it
    cow.onCollide("heart", (heart) => {
        score += 1
        // console.log(score)
        // chomp noise
        const chompSound = play("chomp", {
            volume: 1,
            speed: 1,
            loop: false
    })
        destroy(heart)
        dragging = false
        addHeart()
    });

    cow.onUpdate(() => {
        if (dragging === true) {
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
    

    // everytime u eat a heart u get a point
    scoreText.onUpdate(() => {
        scoreText.text = `Score: ${score}`        
    })

    onUpdate("heart", () => {
        if (dragging === true) {
            var hearts = get("heart")
            hearts.forEach((heart) => {
                heart.pos = mousePos()
                heart.pos.x -= 25
                heart.pos.y -= 65
            })
        }
    })

    // detect collision
    onHoverUpdate("heart", () => {
        // console.log("hovering")
        if (isMouseDown()) {
            dragging = true
        }
        else {
            dragging = false
        }
    })

}


main();