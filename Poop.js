class Poop {
    constructor() {
        this.x = random(width);
        this.y = random(height);

        this.w = 200;
        this.image = loadImage('Poop.png');
    }

    display() {
        image(
            this.image,
            this.x,
            this.y,
            this.image.width * 0.3,
            this.image.height * 0.3
        );
    }
    checkClicked() {}

    checkClicked() {
        let d = dist(mouseX, mouseY, this.x, this.y);

        if (d < this.w / 2 && mouseClicked() == true) {
            this.removeChild(this.image);
        }
    }
}
