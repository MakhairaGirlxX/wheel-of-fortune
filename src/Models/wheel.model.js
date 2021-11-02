class Wheel {
    cards;
    timesSpun;

    constructor() {
        cards = Card[24];
        /*
        // create wheel cards (example)
        cards[0] = new cardValue(500);
        cards[1] = new cardValue(900);
        cards[2] = new cardValue(700);
        cards[3] = new cardSpecial("bankrupt");
        */
    }

    spin() {
        if (this.timesSpun >= this.cards.length) return null;    // all cards/spaces have been used
        this.timesSpun++;

        while (true) {
            random = Math.floor(Math.random()*24);     // Generates a number 0-23
            if (this.cards[random].isActive()) {
                this.cards[random].disable();
                return this.cards[random];
            }
        }
    }
}