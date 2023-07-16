class Scene1 extends Phaser.Scene{
    constructor(){
        super("bootGame");
    }

    preload(){
        this.load.image("background", "../level1/waterbg.png");
        this.load.image("underground", "../underground/underBG.png");
        this.load.image("row", "../underground/horizontalBlock.png");
        this.load.image("column", "../underground/verticalBlock.png");
        this.load.image("goal", "../underground/treasure.png");
        this.load.audio("undergroundSong", "../underground/marioUnderground.mp3");
        this.load.image("ship1","/level1/ship-large2.png");
        this.load.image("bridge-l6","/level1/bridge-l6.png");
        this.load.image("bridge-l5","/level1/bridge-l5.png");
        this.load.image("bridge-hl5","/level1/bridge-hl5.png");
        this.load.image("bridge-l3","/level1/bridge-l3.png");
        this.load.image("bridge-l2","/level1/bridge-l2.png");
        this.load.image("bridge-vl2","/level1/bridge-vl2.png");
        this.load.image("bridge","/level1/bridge.png");
        this.load.image("player", "/level1/player.png");
        this.load.image("door", "/level1/door.png")
    }
    
    create(){
        this.add.text(20, 20, "Loading the game....");
        this.scene.start("playGame");
    }

}
