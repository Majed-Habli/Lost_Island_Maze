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


        this.createObstacle(600/2+40, 600/2 +100,"bridge");
        this.createObstacle(600/2+40, 600/2 -140,"bridge");
        this.createObstacle(600/2+250, 600/2 -20,"bridge-l6");
        this.createObstacle(600/2-220, 600/2 -20,"bridge-l6");
        this.createObstacle(600/2-20, 600/2 +200,"bridge-hl5");
        this.createObstacle(600/2+190, 600/2 +20,"bridge-l5");
        this.createObstacle(600/2-140, 600/2 +20,"bridge-l5");
        this.createObstacle(600/2+130, 600/2 -110,"bridge-l3");
        this.createObstacle(600/2 +70, 600/2 -10,"bridge-l3");
        this.createObstacle(600/2-70, 600/2 -20,"bridge-l3");
        this.createObstacle(600/2-0, 600/2 -20,"bridge-l2");
        this.createObstacle(600/2+130, 600/2 +130,"bridge-l2");
        this.createObstacle(600/2+180, 600/2 -240,"bridge-vl2");
        this.createObstacle(600/2+60, 600/2 -200,"bridge-vl2");
        this.createObstacle(600/2+100, 600/2 -100,"bomb");
        this.createObstacle(600/2+100, 600/2 -120,"bomb");

        this.door = this.physics.add.staticSprite(300, 50, "door")

        this.player = this.physics.add.sprite(600/2-0, 600/2 +240,"player");

        this.player.body.setCollideWorldBounds(true);
        this.physics.add.collider(this.player,this.obstacleGroup,this.handleCollision, null, this);

        this.keys = this.input.keyboard.addKeys("W,A,S,D");
        window.score=5;

        function enterCollision() {
            this.IncrementScore();
            this.showWinModal();
            this.player.body.moves = false;
        }

        this.scoreText = this.add.text(20, 20, "Score: " + score);

        this.physics.add.collider(this.player, this.door,enterCollision, undefined, this);

        this.music = this.sound.add('lvl1Audio',
        {
            volume: 0.2,
            loop: true
        });
        this.music.play();
    }

    createObstacle(x,y,image){

        let obstacle = this.physics.add.image(x,y,image);
        this.obstacleGroup.add(obstacle);
 
        obstacle.setCollideWorldBounds(true);
        obstacle.body.setImmovable(true);
        obstacle.body.setAllowGravity(true);
        
    }

    handleCollision(player, object) {
        if (object.texture.key === "bomb") {
            this.DecrementScore();
            this.scoreText.setText('Score: ' + score);

        } else {
            player.setVelocity(0, 0);
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

        if(score==0){
            this.showWinModal();
        }
        
    }

    IncrementScore() {
        score= score+5;
        console.log(score);
        return;
    }

    DecrementScore(){
        score= score-1;
        console.log(score);
        return;
    }


    showWinModal() {
        const modalBackground = this.add.graphics();

        modalBackground.fillStyle(0x000000, 0.9);
        modalBackground.fillRect(0, 0, this.game.config.width, this.game.config.height);

        var winText = this.add.text(this.game.config.width / 2, this.game.config.height / 2 - 50, "Congratulations! You won!", {
                fontSize: "32px",
                fill: "#ffffff"
            });
        winText.setOrigin(0.5);
        
        var winScore = this.add.text(this.game.config.width / 2, this.game.config.height / 2 - 90, 
        "score is :"+score,)
        
        const nextLevelButton = this
                .add
                .text(this.game.config.width / 2 + 100, this.game.config.height / 2 + 50, "Next Level", {
                    fontSize: "24px",
                    fill: "#ffffff"
                });
            nextLevelButton.setOrigin(0.5);

            if(score==0){

                nextLevelButton.inputEnabled=false;
                winText.setText('You lost!!');
                this.player.body.moves = false;
            }
            else{
                
                nextLevelButton.setInteractive();

                nextLevelButton.on("pointerup", () => {
                    this.music.destroy();
                    this.scene.start("lvl6");
                    modalBackground.destroy();
                    winText.destroy();
                    nextLevelButton.destroy();
                    restart.destroy();
                });
            }
        

        const restart = this.add.text(this.game.config.width / 2 - 150, this.game.config.height / 2 + 50, "Restart", {
                fontSize: "24px",
                fill: "#ffffff"
            });
        restart.setOrigin(0.5);
        restart.setInteractive();

        restart.on("pointerup", () => {
            // this.restart();
            this.music.destroy();
            modalBackground.destroy();
            winText.destroy();
            restart.destroy();
            nextLevelButton.destroy();
        });
    }

}