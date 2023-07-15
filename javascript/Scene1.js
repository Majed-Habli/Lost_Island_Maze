class Scene1 extends Phaser.Scene{
    constructor(){
        super("bootGame");
    }

    preload(){
        this.load.image("background", "../level1/waterbg.png");
        this.load.image("ship1","/level1/ship-large2.png");
        this.load.image("bridge-l6","/level1/bridge-l6.png");
        this.load.image("bridge-l5","/level1/bridge-l5.png");
        this.load.image("bridge-hl5","/level1/bridge-hl5.png");
        this.load.image("bridge-l3","/level1/bridge-l3.png");
        this.load.image("bridge-l2","/level1/bridge-l2.png");
        this.load.image("bridge-vl2","/level1/bridge-vl2.png");
        this.load.image("bridge","/level1/bridge.png");
        this.load.image("player", "/level1/player.png");

        this.load.image("bg-lvl2", "../level2_images/bg-img-lvl2.png");
        this.load.image("map", "../level2_images/map.png");
        this.load.image("outlinetop", "../level2_images/outline-top.png");
        this.load.image("outlineleft", "../level2_images/outline-left.png");
        this.load.image("outlinebot", "../level2_images/outline-bot.png");
        this.load.image("outlineright", "../level2_images/outline-right.png");
        this.load.image("horizontallong", "../level2_images/horizontal-long.png");
        this.load.image("verticallong", "../level2_images/vertical-long.png");
        this.load.image("horizontalshort", "../level2_images/horizontal-short.png");
        this.load.image("verticalshort", "../level2_images/vertical-short.png");
        this.load.image("crate", "../level2_images/crate.png");
        
    }
    
    create(){
        this.add.text(20, 20, "Loading the game....");
        this.scene.start("playGame");
    }
}