class Scene3 extends Phaser.Scene{
    constructor(){
        super("island1");
    }
    create(){
        this.background = this.add.image(0,0,"background-lvl2");
        this.background.setOrigin(0,0);

        this.player = this.physics.add.image(600/2-60, 600/2 +60,"player");

        this.player.setCollideWorldBounds(true);
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.keys = this.input.keyboard.addKeys("W,A,S,D");

        function handleWaterCollision(player, water) {
        }
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