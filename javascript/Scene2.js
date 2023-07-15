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

        var level1ObData = [
            { x: 600/2+40, y: 600/2 +100, texture: "bridge" },
            // { x: 5, y: 0, tex: 'bridge1' },
            // { x: 10, y: 42, tex: 'bridge2' },
            // { x: 0, y: 0, tex: 'bridge' }
        ]
        
        ObMan.makeObstacles(level1ObData, this);
        
        // var ObsNames = ["bridge","bridge-l6","bridge-l5","bridge-hl5","bridge-l3","bridge-l2","bridge-vl2"]
        // obWomen.GiveFeatures(ObsNames);

        // this.createObstacle(600/2+40, 600/2 +100,"bridge");
        // this.createObstacle(600/2+40, 600/2 -140,"bridge");
        // this.createObstacle(600/2+250, 600/2 -20,"bridge-l6");
        // this.createObstacle(600/2-220, 600/2 -20,"bridge-l6");
        // this.createObstacle(600/2-20, 600/2 +200,"bridge-hl5");
        // this.createObstacle(600/2+190, 600/2 +20,"bridge-l5");
        // this.createObstacle(600/2-140, 600/2 +20,"bridge-l5");
        // this.createObstacle(600/2+130, 600/2 -110,"bridge-l3");
        // this.createObstacle(600/2 +70, 600/2 -10,"bridge-l3");
        // this.createObstacle(600/2-70, 600/2 -20,"bridge-l3");
        // this.createObstacle(600/2-0, 600/2 -20,"bridge-l2");
        // this.createObstacle(600/2+130, 600/2 +130,"bridge-l2");
        // this.createObstacle(600/2+180, 600/2 -240,"bridge-vl2");
        // this.createObstacle(600/2+60, 600/2 -200,"bridge-vl2");

        this.door = this.physics.add.staticSprite(300, 50, "door")

        this.player = this.physics.add.image(600/2-0, 600/2 +240,"player");

        this.player.body.setCollideWorldBounds(true);
        // this.physics.add.collider(this.player,this.obstacleGroup,this.handleCollision, null, this);

        this.keys = this.input.keyboard.addKeys("W,A,S,D");
        
        function enterCollision() {
        this.scene.start("bootGame");  
        }

        this.physics.add.collider(this.player, this.door,enterCollision, undefined, this);

    }

    // createObstacle(x,y,image){

    //     let obstacle = this.physics.add.image(x,y,image);
    //     this.obstacleGroup.add(obstacle);
 
    //     obstacle.setCollideWorldBounds(true);
    //     obstacle.body.setImmovable(true);
    //     obstacle.body.setAllowGravity(true);
        
    // }

    
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
