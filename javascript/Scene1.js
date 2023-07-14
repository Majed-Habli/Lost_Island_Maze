class Scene1 extends Phaser.Scene{
    constructor(){
        super("bootGame");
    }

    preload(){
        this.load.image("background", "../level1/waterbg.png");
        this.load.image("ship1","/level1/ship-large2.png");
        this.load.image("bridge","/level1/bridge-vertical.png");
    }
    
    create(){
        this.add.text(20, 20, "Loading the game....");
        this.scene.start("playGame");
    }
}