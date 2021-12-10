let kitty;
let button;
let playButton;
let title;

function setup() {
    createCanvas(windowWidth, windowHeight);

    kitty = new Cat();
    imageMode(CENTER);

    // creating a buttton that controls feeding
    let feedButton = createMyButton(
        'feed meh!',
        'feedButton',
        width / 2 - 100,
        200
    );
    feedButton.mousePressed(feedPressed);

    // creating a button that controls playing
    let playButton = createMyButton('play!', 'playButton', width / 2, 200);
    playButton.mousePressed(playPressed);

    title = loadImage('Title.png');
}

function draw() {
    background(155);
    // display what's in the Cat class display method
    kitty.display();
    // allows the cat to poop if needed.
    kitty.displayPoops();
    displayTitle();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// controls the eating of the cat when the button is pressed to feed it
function feedPressed() {
    kitty.eats();
    console.log(kitty.energy);
    console.log('times ate:' + kitty.timesAte);
}

// same thing as above but with playing
function playPressed() {
    kitty.play();
    console.log(kitty.energy);
}

// displaying the title
function displayTitle() {
    // controlling the dimensions of the title
    let factor = 0.3;
    let w = title.width * factor;
    let h = title.height * factor;
    return image(title, width / 2, 100, w, h);
}

// more compact way to generate buttons > specifically if needed in the future.
function createMyButton(name, id, x, y) {
    let button = createButton(name);
    button.addClass(id);
    button.position(x, y);

    return button;
}
