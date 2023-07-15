class Scene2 extends Phaser.Scene{
    constructor(){
        super("playGame");
    }
    preload(){
        this.obstacleGroup = this.physics.add.group();
    }
    
    create(){
        this.background = this.add.image(0,0,"background");
        this.background.setOrigin(0,0);

        this.player.setCollideWorldBounds(true);
        this.curseorKeys = this.input.keyboard.createCursorKeys();
        this.scene.start("lvl6");

        this.keys = this.input.keyboard.addKeys("W,A,S,D");
        
        function enterCollision() {
        this.scene.start("bootGame");  
        }

        this.physics.add.collider(this.player, this.door,enterCollision, undefined, this);

    }

    createObstacle(x,y,image){

        let obstacle = this.physics.add.image(x,y,image);
        this.obstacleGroup.add(obstacle);
 
        obstacle.setCollideWorldBounds(true);
        obstacle.body.setImmovable(true);
        obstacle.body.setAllowGravity(true);
        
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

    movePlayer(){
        
    }

}
