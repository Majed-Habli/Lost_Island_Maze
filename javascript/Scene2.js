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

        this.physics.world.enable([this.player, this.background]);
        this.background.body.setCollideWorldBounds(true);
        this.physics.add.collider(this.player, this.background, handleWaterCollision, null, this);
        this.curseorKeys = this.input.keyboard.createCursorKeys();

        function handleWaterCollision(player, water) {
        }
    }

    update(){
        this.movePlayerManager();
    }

    movePlayerManager(){
        var gameSettings={
        playerSpeed:100,
    }
        if(this.curseorKeys.left.isDown){
            this.player.setVelocityX(-gameSettings.playerSpeed);
        }else if (this.curseorKeys.right.isDown){
            this.player.setVelocityX(gameSettings.playerSpeed);
        }

        if(this.curseorKeys.up.isDown){
            this.player.setVelocityY(-gameSettings.playerSpeed);
        }else if (this.curseorKeys.down.isDown){
            this.player.setVelocityY(gameSettings.playerSpeed);
        }
    }

}