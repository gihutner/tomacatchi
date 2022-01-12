let kitty;
let button;
let playButton;
let title;
let border;

function setup() {
    createCanvas(windowWidth, windowHeight);

    kitty = new Cat();
    imageMode(CENTER);

    let feedButton = createMyButton(
        'feed!',
        'feedButton',
        width / 5 + 200,
        300
    );
    feedButton.mousePressed(feedPressed);

    let playButton = createMyButton(
        'play!',
        'playButton',
        width / 5 + 200,
        400
    );
    playButton.mousePressed(playPressed);

    title = loadImage('Webpage.png');
    border = loadImage('Border.png');
}

function draw() {
    background(255);

    kitty.display();

    kitty.displayPoops();
    displayImg(title, width / 2, 85, 0.36);
    displayImg(border, width / 5, 400, 0.25);
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

function playPressed() {
    kitty.play();
    console.log(kitty.energy);
}

function displayImg(name, x, y, factor) {
    // controlling the dimensions of the title
    let w = name.width * factor;
    let h = name.height * factor;
    return image(name, x, y, w, h);
}

// more compact way to generate buttons > specifically if needed in the future.
function createMyButton(name, id, x, y) {
    let button = createButton(name);
    button.addClass(id);
    button.position(x, y);

    return button;
}
