class Scene2 extends Phaser.Scene{
    constructor(){
        super("playGame");
    }

    
    
    create(){
        this.background = this.add.image(0,0,"background");
        this.background.setOrigin(0,0);
        this.background = this.add.image(600/2-70, 600/2 +100,"ship1");
        this.background = this.add.image(600/2-60, 600/2 +60,"bridge");
    }
}