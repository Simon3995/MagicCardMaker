class Card {
    constructor() {
        this.title = "";
        this.maxTitleLength = 415;
        this.manacost = "";
        this.type = "";
        this.subtype = "";
        this.description = "";
        this.flavor = "";
        this.power = 0;
        this.toughness = 0;
        this.meta = "";
        this.img = new Image();
        this.imgX = 0;
        this.imgY = 0;
        this.imgW = 0;
        this.imgH = 0;
        this.borderless = false;
        this.showPowerToughness = true;
    }
}