class Cat {
    constructor() {
        this.timesAte = 0;

        this.poopsies = [];

        /*
        this.personalities = [
            {
                //img: 'bengal.png', // change this to the initialization of different images
                label: 'affectionate',
                isPositive: true,
                play: 15,
                poops: 10,
                energy: 50,
            },
            {
                //img: 'ragdoll.png',
                label: 'foodie',
                isPositive: true,
                play: 10,
                poops: 15,
                energy: 10,
            },
            {
                //img: 'siamese.png',
                label: 'cold-hearted',
                isPositive: false,
                play: 5,
                poops: 10,
                energy: 50,
            },
            {
                //img: 'tabby.png',
                label: 'picky',
                isPositive: false,
                play: 10,
                poops: 5,
                energy: 50,
            },
        ];
        */
        // this.personality = random(this.personalities);
        this.energy = 5;
        this.image = loadImage('Cat.gif');
        // console.log(this.personality);
    }

    display() {
        image(
            this.image,
            windowWidth / 5 + 10,
            400,
            600, // exchanging the energy to size
            500
        );
    }

    eats() {
        this.energy += 1;

        if (this.energy >= 10) {
            this.energy = 10;
        }

        this.timesAte += 1;
        if (this.timesAte >= 6) {
            console.log('exploding!');
            this.timesAte = 6;
        }

        this.poopsies.push(new Poop());
    }

    getSize() {
        // doesn't let the energy go below 1, because errors will throw
        if (this.energy == 0) {
            this.energy = 1;
        }
        return this.energy / 5;
    }

    play() {
        this.energy -= 0.5;

        if (this.energy <= 5 && this.energy > 4) {
            console.log("I really can't play anymore.");
        }

        if (this.energy <= 3) {
            this.energy = 3;
        }
    }

    displayPoops() {
        for (let i = 0; i < this.poopsies.length; i++) {
            this.poopsies[i].display();
        }
    }

    personalityTrait() {
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
