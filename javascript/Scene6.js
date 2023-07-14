class Scene6 extends Phaser.Scene{
    constructor(){
        super("lvl6");
    }

create(){
    this.background = this.add.image(0,0,"underground");
    this.background.setOrigin(0,0);


}


}