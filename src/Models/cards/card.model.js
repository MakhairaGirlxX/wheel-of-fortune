class Card {
    enabled;
    color;

    constructor() {
        this.enabled = true;
    }

    get color() {
        return this.color;
    }
    set color(color) {
        this.color = color;
    }
    isActive() {
        return this.enabled;
    }
    disable() {
        this.enabled = false;
    }
}