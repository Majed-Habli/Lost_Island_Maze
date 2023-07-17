class Scene3 extends Phaser.Scene{
    constructor(){
        super("island2");
    }
    preload(){
        this.obstacleGroup = this.physics.add.group();
    }
    create(){

        //Add borders, background and player + collision
        this.background = this.add.image(0,0,"bg-lvl2");
        this.background.setOrigin(0,0);

        //Create Bombs

        this.createObstacle(285, 400,"bomb");
        this.createObstacle(170, 200,"bomb");

        //Create Maze Borders

        this.createObstacle(600/2-65, 600/2 -200,"outlineTop");
        this.createObstacle(500, 290,"outlineRight");
        this.createObstacle(90, 290,"outlineLeft");
        this.createObstacle(357, 498,"outlineBot");

        //create columns and collision

        this.createObstacle(145, 519,"verticalShort");
        this.createObstacle(200, 519,"verticalShort");
        this.createObstacle(378, 78,"verticalShort");
        this.createObstacle(440, 80,"verticalShort");
        this.createObstacle(259, 373,"verticalShort");
        this.createObstacle(452, 403,"verticalShort");
        this.createObstacle(440, 180,"verticalShort");
        this.createObstacle(381, 240,"verticalShort");
        this.createObstacle(381, 300,"verticalShort");

        //create rows and collision

        this.createObstacle(462, 99,"horizontalShort");
        this.createObstacle(110, 496,"horizontalShort");
        this.createObstacle(238, 301,"horizontalShort");
        this.createObstacle(238, 230,"horizontalShort");
        this.createObstacle(238, 160,"horizontalShort");
        this.createObstacle(222, 350,"horizontalShort");
        this.createObstacle(222, 397,"horizontalShort");
        this.createObstacle(475, 440,"horizontalShort");
        this.createObstacle(355, 440,"horizontalShort");
        this.createObstacle(418, 149,"horizontalShort");
        this.createObstacle(404, 203,"horizontalShort");
        this.createObstacle(417, 265,"horizontalShort");
        this.createObstacle(417, 323,"horizontalShort");

        //Create long columns and collisons

        this.createObstacle(145, 230,"verticalLong");
        this.createObstacle(145, 370,"verticalLong");
        this.createObstacle(200, 230,"verticalLong");
        this.createObstacle(320, 230,"verticalLong");
        this.createObstacle(320, 370,"verticalLong");

          //Create long rows and collisons
        this.createObstacle(390, 380,"horizontalLong");

          //Create long rows and collisons     
        this.createObstacle(230, 445,"crate");
        this.createObstacle(398, 445,"crate");
        this.createObstacle(375, 121,"crate");
        this.createObstacle(375, 145,"crate");

         //Create Player
        this.player = this.physics.add.image(173, 530,"player");

        //Create door
        this.door = this.physics.add.staticSprite(410, 50, "door")

        //key binders
        this.keys = this.input.keyboard.addKeys("W,A,S,D");
        window.score=5;

        function enterCollision() {
            this.IncrementScore();
            this.showWinModal();
            this.player.body.moves = false;
        }

        this.player.body.setCollideWorldBounds(true);
        this.physics.add.collider(this.player,this.obstacleGroup,this.handleCollision, null, this);

        this.scoreText =this.add.text(20, 20, "Score: " + score);
        this.physics.add.collider(this.player, this.door,enterCollision, undefined, this);
        
        this.music = this.sound.add('lvl2Audio',
        {
            volume: 0.2,
            loop: true
        });
        this.music.play();
    }

    update(){

        this.player.setVelocity(0);

        if (this.keys.A.isDown) {
            this.player.setVelocityX(-150);
        } else if (this.keys.D.isDown) {
            this.player.setVelocityX(150);
        }

        if (this.keys.W.isDown) {
            this.player.setVelocityY(-150);
        } else if (this.keys.S.isDown) {
            this.player.setVelocityY(150);
        }

        if(score==0){
            this.showWinModal();
        }
        
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
                    this.scene.start("level3");
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
            this.scene.start("island2");
        });
    }
}