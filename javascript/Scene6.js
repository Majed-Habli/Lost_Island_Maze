class Scene6 extends Phaser.Scene
    {
    constructor(){
        super("lvl6");
    }

    preload(){
        this.obstacleGroup = this.physics.add.group();
    }

    create(){

        this.background = this.add.image(0, 0, "underground");
        this.background.setOrigin(0, 0);

        this.createObstacle(355, 540, "column");
        this.createObstacle(355, 50, "column");
        this.createObstacle(470, 50, "column");
        this.createObstacle(270, 540, "column");
        this.createObstacle(15, 425, "column");
        this.createObstacle(580, 430, "column");
        this.createObstacle(230, 230, "column");
        this.createObstacle(105, 160, "column");

        this.createObstacle(400, 470, "row");
        this.createObstacle(510, 470, "row");
        this.createObstacle(540, 200, "row");
        this.createObstacle(430, 200, "row");
        this.createObstacle(230, 470, "row");
        this.createObstacle(115, 470, "row");
        this.createObstacle(60, 470, "row");
        this.createObstacle(60, 380, "row");
        this.createObstacle(60, 275, "row");
        this.createObstacle(160, 275, "row");
        this.createObstacle(175, 380, "row");
        this.createObstacle(270, 380, "row");
        this.createObstacle(380, 380, "row");
        this.createObstacle(440, 380, "row");
        this.createObstacle(515, 275, "row");
        this.createObstacle(400, 275, "row");
        this.createObstacle(290, 95, "row");
        this.createObstacle(200, 95, "row");
        this.createObstacle(150, 95, "row");
        
        this.createObstacle(390, 40, "ghost");
        this.createObstacle(490, 240, "ghost");
        this.createObstacle(510, 50, "ghost");
        this.createObstacle(180, 400, "ghost");
        this.createObstacle(180, 340, "ghost");
        this.createObstacle(200, 240, "ghost");
        this.createObstacle(300, 120, "ghost");


        this.player = this.physics.add.image(310, 600 + 60, "player");
        this.goal = this.physics.add.staticSprite(300, 50, "goal");
        this.player.setCollideWorldBounds(true);

        this.physics.add.collider(this.player, this.obstacleGroup, this.handleCollision, null, this);

        this.keys = this.input.keyboard.addKeys("W,A,S,D");
        // window.score = 5;

        function enterCollision()
        {
            this.IncrementScore();
            this.showWinModal();
            this.player.body.moves = false;
        }

        this.scoreText = this.add.text(20, 20, "Score: " + score);

        this.physics.add.collider(this.player, this.goal, enterCollision, undefined, this);

        this.music = this.sound.add('lvl6Audio',
        {
            volume: 0.2,
            loop: true
        });
        this.music.play();

    }

    createObstacle(x, y, image)
    {

        let obstacle = this.physics.add.image(x, y, image);
        this.obstacleGroup.add(obstacle);

        obstacle.setCollideWorldBounds(true);
        obstacle.body.setImmovable(true);
        obstacle.body.setAllowGravity(true);

    }

    handleCollision(player, object)
    {
        if (object.texture.key === "ghost") 
        {
            this.DecrementScore();
            this.scoreText.setText('Score: ' + score);

        } 
        else
        {
            player.setVelocity(0, 0);
        }
    }


    update(){

        this.player.setVelocity(0);

        if (this.keys.A.isDown) {
            this.player.setVelocityX(-150);
        } else if (this.keys.D.isDown){
            this.player.setVelocityX(150);
        }

        if (this.keys.W.isDown) {
            this.player.setVelocityY(-300);
        } else if (this.keys.S.isDown) {
            this.player.setVelocityY(150);
        }

        if (score == 0) {
            this.showWinModal();
        }

    }

    IncrementScore() {
        score = score + 5;
        console.log(score);
        return;
    }

    DecrementScore() {
        score = score - 1;
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
            "score is :" + score,)

        const nextLevelButton = this
            .add
            .text(this.game.config.width / 2 + 100, this.game.config.height / 2 + 50, "Next Level", {
                fontSize: "24px",
                fill: "#ffffff"
            });
        nextLevelButton.setOrigin(0.5);

        if (score == 0) {

            nextLevelButton.inputEnabled = false;
            winText.setText('You lost!!');
            this.player.body.moves = false;
        } 
        else {

            nextLevelButton.setInteractive();

            nextLevelButton.on("pointerup", () => {
                this.music.destroy();
                this.scene.start("playGame");
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
            this.music.destroy();
            modalBackground.destroy();
            winText.destroy();
            restart.destroy();
            nextLevelButton.destroy();
            this.scene.start("lvl6");
          });
    }

}