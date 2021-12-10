class Cat {
    constructor() {
        this.timesAte = 0;
        // energy is on a scale from 1 - 10, and normally would just be 5 as a baseline

        // this.poopsies = loadImage('poop.png');
        this.poopsies = [];
        // preference for foods in here?
        this.personalities = [
            {
                img: 'siamese.png', // change this to the initialization of different images
                label: 'affectionate',
                isPositive: true,
                play: 15,
                poops: 10,
                energy: 50,
            },
            {
                img: 'siamese.png',
                label: 'foodie',
                isPositive: true,
                play: 10,
                poops: 15,
                energy: 10,
            },
            {
                img: 'siamese.png',
                label: 'cold-hearted',
                isPositive: false,
                play: 5,
                poops: 10,
                energy: 50,
            },
            {
                img: 'siamese.png',
                label: 'picky',
                isPositive: false,
                play: 10,
                poops: 5,
                energy: 50,
            },
        ];
        this.personality = random(this.personalities);
        this.energy = this.personality.energy;
        this.image = loadImage(this.personality.img);
        console.log(this.personality);
        // this.title = loadImage("Title.png");
    }

    display() {
        // exchanging the energy to size
        /*
        image(
            this.image,
            windowWidth / 2,
            windowHeight / 2 + 100,
            this.getSize(),
            this.getSize()
        );
        */
    }

    eats() {
        // console.log("eating!");
        this.energy += 1;

        if (this.energy >= 10) {
            // console.log("bro stop feeding me.");
            this.energy = 10;
        }

        this.timesAte += 1;
        if (this.timesAte >= 6) {
            console.log('exploding!');
            this.timesAte = 6;
        }

        // this.poop();
        this.poopsies.push(new Poop());
    }

    getSize() {
        // doesn't let the energy go below 1, because errors will throw - deBB
        if (this.energy == 0) {
            this.energy = 1;
        }
        return this.energy * 50;
    }

    play() {
        // console.log("playing");
        this.energy -= 0.5;

        if (this.energy <= 5 && this.energy > 4) {
            console.log("I really can't play anymore.");
        }

        if (this.energy <= 3) {
            // console.log("literally dying from exhaustion");
            this.energy = 3;
        }
    }

    displayPoops() {
        // controlling the dimensions of the poop image.

        for (let i = 0; i < this.poopsies.length; i++) {
            this.poopsies[i].display();
        }
        /*
        let factor = 0.3;
        let wid = this.poopsies.width * factor;
        let hei = this.poopsies.height * factor;
        if (this.timesAte <= 3) {
            // makes sure they are generated in the same place each time.
            randomSeed(0);
            // whenever it eats after a certain amount of time, it poops.
            for (let i = 0; i < this.timesAte; i++) {
                // a random height and width for the poop to generate.
                let x = random(width);
                let y = random(height);
                image(this.poopsies, x, y, wid / 2, hei / 2);
            }
        }
        */
        // this.energy -= 1;
        // this.timesAte -= 0.5;
    }

    personalityTrait() {
        /*
        this.personality = [
            // 2d array of the different personalities. separated in to positive and negative.
            ['affectionate', 'foodie'],
            ['cold-hearted', 'picky'],
        ];
        */

        for (let i = 0; i < personalities.length; i++) {
            let type = personalities[i];
            for (let j = 0; j < type; j++) {
                /*
                 what exactly can I put here? 
                 I'm looking to have it generate a random personality
                 */
            }
        }
    }
}
