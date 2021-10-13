class Wheel {
    cards = Card[24];

    constructor() {
        // create wheel cards (example)
        cards[0] = new cardValue(500);
        cards[1] = new cardValue(900);
        cards[2] = new cardValue(700);
        cards[3] = new cardSpecial("bankrupt");
    }
}