class Scene3 extends Phaser.Scene{
    constructor(){
        super("island2");
    }
    create(){

        //Add borders, background and player + collision
        this.background = this.add.image(0,0,"bg-lvl2");
        this.background.setOrigin(0,0);

        //Create mini-map
        this.map = this.physics.add.sprite(410, 65,"map");

        //Create Player
        this.player = this.physics.add.sprite(173, 530,"player");

        //Create Bombs
        this.bomb = this.physics.add.image(285, 400,"bomb").setImmovable(true);
        this.bomb = this.physics.add.image(170, 200,"bomb").setImmovable(true);
        // this.physics.add.collider(this.player, this.bomb);
        this.bomb.setCollideWorldBounds(true);
        this.bomb.body.setAllowGravity(true);

        //Create Maze Borders
        this.outlineTop = this.physics.add.image(600/2-65, 600/2 -200,"outlineTop").setImmovable(true);
        this.physics.add.collider(this.player, this.outlineTop);
        
        this.outlineRight = this.physics.add.image(500, 290,"outlineRight").setImmovable(true);
        this.physics.add.collider(this.player, this.outlineRight);
        
        this.outlineLeft = this.physics.add.image(90, 290,"outlineLeft").setImmovable(true);
        this.physics.add.collider(this.player, this.outlineLeft);
        
        this.outlineBot = this.physics.add.image(357, 498,"outlineBot").setImmovable(true);
        this.physics.add.collider(this.player, this.outlineBot);

        //create columns and collision
        this.columns = [];
        this.columns.push (
            this.column = this.physics.add.image(145, 519,"verticalShort").setImmovable(true),
            this.column = this.physics.add.image(200, 519,"verticalShort").setImmovable(true),
            this.column = this.physics.add.image(378, 78,"verticalShort").setImmovable(true),
            this.column = this.physics.add.image(440, 80,"verticalShort").setImmovable(true),
            this.column = this.physics.add.image(259, 373,"verticalShort").setImmovable(true),
            this.column = this.physics.add.image(452, 403,"verticalShort").setImmovable(true),
            this.column = this.physics.add.image(440, 180,"verticalShort").setImmovable(true),
            this.column = this.physics.add.image(381, 240,"verticalShort").setImmovable(true),
            this.column = this.physics.add.image(381, 300,"verticalShort").setImmovable(true)  
        )

        this.columns.forEach(column => {this.physics.add.collider(this.player, column);});

        //create rows and collision
        this.rows = [];
        this.rows.push (
            this.row = this.physics.add.image(462, 99,"horizontalShort").setImmovable(true),
            this.row = this.physics.add.image(110, 496,"horizontalShort").setImmovable(true),
            this.row = this.physics.add.image(238, 301,"horizontalShort").setImmovable(true),
            this.row = this.physics.add.image(238, 230,"horizontalShort").setImmovable(true),
            this.row = this.physics.add.image(238, 160,"horizontalShort").setImmovable(true),
            this.row = this.physics.add.image(222, 350,"horizontalShort").setImmovable(true),  
            this.row = this.physics.add.image(222, 397,"horizontalShort").setImmovable(true),
            this.row = this.physics.add.image(475, 440,"horizontalShort").setImmovable(true),
            this.row = this.physics.add.image(355, 440,"horizontalShort").setImmovable(true),   
            this.row = this.physics.add.image(418, 149,"horizontalShort").setImmovable(true),
            this.row = this.physics.add.image(404, 203,"horizontalShort").setImmovable(true),
            this.row = this.physics.add.image(417, 265,"horizontalShort").setImmovable(true),
            this.row = this.physics.add.image(417, 323,"horizontalShort").setImmovable(true)  
        )

        this.rows.forEach(row => {this.physics.add.collider(this.player, row);});

        //Create long columns and collisons
        this.longColumns = [];
        this.longColumns.push (
            this.longColumn = this.physics.add.image(145, 230,"verticalLong").setImmovable(true),
            this.longColumn = this.physics.add.image(145, 370,"verticalLong").setImmovable(true),
            this.longColumn = this.physics.add.image(200, 230,"verticalLong").setImmovable(true),
            this.longColumn = this.physics.add.image(320, 230,"verticalLong").setImmovable(true),
            this.longColumn = this.physics.add.image(320, 370,"verticalLong").setImmovable(true),    
        )

        this.longColumns.forEach(longColumn => {this.physics.add.collider(this.player, longColumn);});

          //Create long rows and collisons
          this.longRows = [];
          this.longRows.push (
              this.longRow = this.physics.add.image(390, 380,"horizontalLong").setImmovable(true), 
          )
  
          this.longRows.forEach(longRow => {this.physics.add.collider(this.player, longRow);});

          //Create long rows and collisons
          
          this.crates = [];
          this.crates.push (
            this.crate = this.physics.add.image(230, 445,"crate").setImmovable(true),
            this.crate = this.physics.add.image(398, 445,"crate").setImmovable(true),
            this.crate = this.physics.add.image(375, 121,"crate").setImmovable(true),
            this.crate = this.physics.add.image(375, 145,"crate").setImmovable(true)
          )

          this.crates.forEach(crate => {this.physics.add.collider(this.player, crate);});
            
          

        //key binders
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.keys = this.input.keyboard.addKeys("W,A,S,D");
        window.score=5;

        function enterCollision() {
            this.IncrementScore();
            this.showWinModal();
            this.player.body.moves = false;
        }

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

    // createObstacle(x,y,image){

    //     let obstacle = this.physics.add.image(x,y,image);
    //     this.obstacleGroup.add(obstacle);
 
    //     obstacle.setCollideWorldBounds(true);
    //     obstacle.body.setImmovable(true);
    //     obstacle.body.setAllowGravity(true);
        
    // }

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
                    this.scene.start("island2");
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