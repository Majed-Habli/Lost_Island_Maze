class Scene2 extends Phaser.Scene{
    constructor(){
        super("playGame");
    }
    
    create(){
        this.background = this.add.image(0,0,"background");
        this.background.setOrigin(0,0);
        this.background = this.add.image(600/2-70, 600/2 +100,"ship1");
        this.background = this.add.image(600/2-60, 600/2 +60,"bridge");
        this.player = this.physics.add.image(600/2-60, 600/2 +60,"player");

        this.player.setCollideWorldBounds(true);
        this.curseorKeys = this.input.keyboard.createCursorKeys();


        function handleWaterCollision(player, water) {
        }
        this.scene.start("island1");

        this.keys = this.input.keyboard.addKeys("W,A,S,D");


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
