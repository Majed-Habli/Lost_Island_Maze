class Scene2 extends Phaser.Scene{
    constructor(){
        super("playGame");
    }
    
    create(){
        this.background = this.add.image(0,0,"background");
        this.background.setOrigin(0,0);
        this.ship1 = this.add.image(600/2-70, 600/2 -100,"ship1");
        this.bridge = this.physics.add.image(600/2+40, 600/2 -140,"bridge");
        this.bridge.setImmovable(true);

        // this.bridge = this.add.image(600/2+40, 600/2 +100,"bridge");
        // this.bridge = this.add.image(600/2+250, 600/2 -20,"bridge-l6");
        // this.bridge = this.add.image(600/2-220, 600/2 -20,"bridge-l6");
        // this.bridge = this.add.image(600/2-20, 600/2 +200,"bridge-hl5");
        // this.bridge = this.add.image(600/2+190, 600/2 +20,"bridge-l5");
        // this.bridge = this.add.image(600/2-140, 600/2 +20,"bridge-l5");
        // this.bridge = this.add.image(600/2+130, 600/2 -110,"bridge-l3");
        // this.bridge = this.add.image(600/2 +70, 600/2 -10,"bridge-l3");
        // this.bridge = this.add.image(600/2-0, 600/2 -20,"bridge-l2");
        // this.bridge = this.add.image(600/2-70, 600/2 -20,"bridge-l3");
        // this.bridge = this.add.image(600/2+180, 600/2 -240,"bridge-vl2");
        // this.bridge = this.add.image(600/2+60, 600/2 -200,"bridge-vl2");
        this.player = this.physics.add.image(600/2-60, 600/2 +60,"player");

        // this.bridge_l6.setImmovable(true);
        // this.bridge_l5.setImmovable(true);
        // this.bridge_hl5.setImmovable(true);
        // this.bridge_3.setImmovable(true);
        // this.bridge_l2.setImmovable(true);
        // this.bridge_vl2.setImmovable(true);

        this.player.setCollideWorldBounds(true);
        this.curseorKeys = this.input.keyboard.createCursorKeys();

        this.keys = this.input.keyboard.addKeys("W,A,S,D");
        this.physics.add.collider(this.player, this.row);

    }

    update(){
        this.player.setVelocity(0);

        if (this.keys.A.isDown) {
            this.player.setVelocityX(-300);
        } else if (this.keys.D.isDown) {
            this.player.setVelocityX(300);
        }

        if (this.keys.W.isDown) {
            this.player.setVelocityY(-300);
        } else if (this.keys.S.isDown) {
            this.player.setVelocityY(300);
        }
        
    }

}
