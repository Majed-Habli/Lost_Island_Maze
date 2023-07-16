class Scene5 extends Phaser.Scene {
    constructor() {
        super("level5");
    }

    create() {
        this.backgroundLevel5 = this
            .add
            .image(0, 0, "level5Back");
        this
            .backgroundLevel5
            .setOrigin(0, 0);

        this.player = this
            .physics
            .add
            .sprite(400, 600 / 2 + 90, "player");

        this.music = this
            .sound
            .add("level5BackgroundMusic", {
                volume: 0.2,
                loop: true
            });
        this
            .music
            .play();
        // this     .cameras     .main     .startFollow(this.player); this     .cameras
        //    .main     .setZoom(Math.max(this.scale.width / 430, this.scale.width /
        // 430)); const camera = this.cameras.main; // camera.scaleMode =
        // Phaser.ScaleManager.SHOW_RESIZE; camera.startFollow(this.player)

        this.obstacleGroup = this
            .physics
            .add
            .group();

        // put the bomb here
        this.createObstacle(400, 500 / 2, "bomb")
        this.createObstacle(350, 600 / 2 + 30, "bomb");

        this.createObstacle(50, 40, "tree4");
        this.createObstacle(10, 40, "tree4");
        this.createObstacle(30, 40, "tree4");
        this.createObstacle(50, 40, "tree4");
        this.createObstacle(70, 40, "tree4");
        this.createObstacle(90, 40, "tree4");
        this.createObstacle(110, 40, "tree4");
        this.createObstacle(130, 40, "tree4");
        this.createObstacle(150, 40, "tree4");
        this.createObstacle(170, 40, "tree4");
        this.createObstacle(190, 40, "tree4");
        this.createObstacle(280, 40, "tree4");
        this.createObstacle(300, 40, "tree4");
        this.createObstacle(320, 40, "tree4");
        this.createObstacle(340, 40, 'tree4');
        this.createObstacle(360, 40, 'tree4');
        this.createObstacle(380, 40, 'tree4');
        this.createObstacle(400, 40, 'tree4');
        this.createObstacle(420, 40, 'tree4');
        this.createObstacle(440, 40, 'tree4');
        this.createObstacle(460, 40, 'tree4');
        this.createObstacle(480, 40, 'tree4');
        this.createObstacle(500, 40, 'tree4');
        this.createObstacle(520, 40, 'tree4');
        this.createObstacle(540, 40, 'tree4');
        this.createObstacle(560, 40, 'tree4');
        this.createObstacle(580, 40, 'tree4');
        this.createObstacle(20, 100, "tree4");
        this.createObstacle(20, 150, "tree4");
        this.createObstacle(20, 200, "tree4");
        this.createObstacle(20, 250, "tree4");
        this.createObstacle(20, 300, "tree4");
        this.createObstacle(20, 350, "tree4");

        this.createObstacle(590, 100, "bushTwo");
        this.createObstacle(590, 130, "bushTwo");
        this.createObstacle(590, 160, "bushTwo");
        this.createObstacle(590, 190, "bushTwo");
        this.createObstacle(590, 220, "bushOne");
        this.createObstacle(590, 250, "bushTwo");
        this.createObstacle(590, 280, "bushTwo");
        this.createObstacle(590, 310, "bushTwo");
        this.createObstacle(590, 340, "bushTwo");
        this.createObstacle(590, 220, "bushOne");
        this.createObstacle(100, 360, "bush");
        this.createObstacle(200, 360, "bush");
        this.createObstacle(300, 360, "bush");
        this.createObstacle(360, 360, "bushOne");
        this.createObstacle(470, 360, "bush");
        this.createObstacle(360, 300, "bushOne");
        this.createObstacle(360, 270, "bushOne");
        this.createObstacle(360, 240, "bushOne");
        this.createObstacle(330, 240, "bushOne");
        this.createObstacle(270, 240, "bushOne");
        this.createObstacle(240, 240, "bushOne");
        this.createObstacle(240, 270, "bushOne");
        this.createObstacle(240, 300, "bushOne");
        this.createObstacle(270, 300, "bushOne");
        this.createObstacle(300, 300, "bushOne");
        this.createObstacle(440, 270, "bushOne");
        this.createObstacle(440, 240, "bushOne");
        this.createObstacle(440, 210, "bushOne");
        this.createObstacle(410, 190, "bushOne");
        this.createObstacle(380, 190, "bushOne");
        this.createObstacle(350, 190, "bushOne");
        this.createObstacle(320, 190, "bushOne");
        this.createObstacle(290, 190, "bushOne");
        this.createObstacle(270, 190, "bushOne");
        this.createObstacle(270, 165, "bushOne");
        this.createObstacle(270, 210, "bushOne");
        this.createObstacle(500, 250, "bushOne");
        this.createObstacle(500, 220, "bushOne");
        this.createObstacle(500, 190, "bushOne");
        this.createObstacle(500, 170, "bushOne");
        this.createObstacle(500, 140, "bushOne");
        this.createObstacle(470, 140, "bushOne");
        this.createObstacle(440, 140, "bushOne");
        this.createObstacle(410, 140, "bushOne");
        this.createObstacle(350, 100, "bushOne");
        this.createObstacle(350, 120, "bushOne");
        this.createObstacle(350, 140, "bushOne");
        this.createObstacle(380, 140, "bushOne");
        this.createObstacle(290, 140, "bushOne");
        this.createObstacle(260, 140, "bushOne");
        this.createObstacle(290, 90, "bushOne");
        this.createObstacle(230, 140, "bushOne");
        this.createObstacle(200, 140, "bushOne");
        this.createObstacle(200, 160, "bushOne");
        this.createObstacle(200, 180, "bushOne");
        this.createObstacle(180, 200, "bushOne");
        this.createObstacle(180, 230, "bushOne");
        this.createObstacle(180, 260, "bushOne");
        this.createObstacle(180, 280, "bushOne");
        this.createObstacle(180, 300, "bushOne");
        this.createObstacle(160, 300, "bushOne");
        this.createObstacle(140, 300, "bushOne");
        this.createObstacle(80, 300, "bushOne");
        this.createObstacle(60, 300, "bushOne");
        this.createObstacle(80, 275, "bushOne");
        this.createObstacle(80, 250, "bushOne");
        this.createObstacle(80, 225, "bushOne");
        this.createObstacle(80, 200, "bushOne");
        this.createObstacle(100, 200, "bushOne");
        this.createObstacle(125, 200, "bushOne");
        this.createObstacle(125, 175, "bushOne");
        this.createObstacle(125, 125, "bushOne");
        this.createObstacle(100, 125, "bushOne");
        this.createObstacle(75, 125, "bushOne");
        this.createObstacle(75, 150, "bushOne");
        this.createObstacle(130, 250, "bushOne");
        this.createObstacle(130, 275, "bushOne");
        this.createObstacle(130, 300, "bushOne");
        this.createObstacle(200, 75, "bushOne");
        this.createObstacle(175, 75, "bushOne");
        this.createObstacle(150, 75, "bushOne");
        this.createObstacle(125, 75, "bushOne");
        this.createObstacle(100, 75, "bushOne");
        this.createObstacle(75, 75, "bushOne");
        this.createObstacle(50, 75, "bushOne");
        this.createObstacle(220, 70, "bushOne");
        this.createObstacle(220, 95, "bushOne");
        this.createObstacle(220, 120, "bushOne");

        this.createObstacle(570, 360, 'bush');
        this.createObstacle(470, 300, 'bush');

        this
            .physics
            .world
            .enable([this.player, this.backgroundLevel5]);

        this
            .backgroundLevel5
            .body
            .setCollideWorldBounds(true);
        this
            .player
            .body
            .setCollideWorldBounds(true);

        this.cursors = this
            .input
            .keyboard
            .createCursorKeys();

        this.keys = this
            .input
            .keyboard
            .addKeys("W,A,S,D");

        this
            .physics
            .add
            .collider(this.player, this.obstacleGroup, this.handleCollision, null, this);
    }

    handleCollision(player, object) {
        if (object.texture.key === "bomb") {
            this.restart();
            console.log(window.score)
        } else {
            player.setVelocity(0, 0);
        }
    }

    update() {
        this.movePlayerManager();

        const targetX = 245;
        const targetY = 35;
        const tolerance = 5; // Adjust the tolerance as needed

        if (Math.abs(this.player.x - targetX) <= tolerance && Math.abs(this.player.y - targetY) <= tolerance) {
            this.showWinModal();
        }
    }

    movePlayerManager() {
        this
            .player
            .setVelocity(0);

        if (this.keys.A.isDown) {
            this
                .player
                .setVelocityX(-120);
        } else if (this.keys.D.isDown) {
            this
                .player
                .setVelocityX(120);
        }

        if (this.keys.W.isDown) {
            this
                .player
                .setVelocityY(-120);
        } else if (this.keys.S.isDown) {
            this
                .player
                .setVelocityY(120);
        }
    }

    showWinModal() {
        // Create a modal background
        const modalBackground = this
            .add
            .graphics();
        modalBackground.fillStyle(0x000000, 0.4);
        modalBackground.fillRect(0, 0, this.game.config.width, this.game.config.height);

        var winText = this
            .add
            .text(this.game.config.width / 2, this.game.config.height / 2 - 50, "Congratulations! You won!", {
                fontSize: "32px",
                fill: "#ffffff"
            });
        winText.setOrigin(0.5);

        const nextLevelButton = this
            .add
            .text(this.game.config.width / 2 + 100, this.game.config.height / 2 + 50, "Next Level", {
                fontSize: "24px",
                fill: "#ffffff"
            });
        nextLevelButton.setOrigin(0.5);
        nextLevelButton.setInteractive();

        nextLevelButton.on("pointerup", () => {
            this.goToNextLevel();

            modalBackground.destroy();
            winText.destroy();
            nextLevelButton.destroy();
            restart.destroy();
        });

        const restart = this
            .add
            .text(this.game.config.width / 2 - 150, this.game.config.height / 2 + 50, "Restart", {
                fontSize: "24px",
                fill: "#ffffff"
            });
        restart.setOrigin(0.5);
        restart.setInteractive();

        restart.on("pointerup", () => {
            this.restart();

            modalBackground.destroy();
            winText.destroy();
            restart.destroy();
            nextLevelButton.destroy();
        });
    }

    goToNextLevel() {
        console.log("go to next level");
    }

    restart() {
        console.log("restart");
        this
            .scene
            .start("level5");
    }

    createObstacle(x, y, image) {
        let obstacle = this
            .physics
            .add
            .sprite(x, y, image);
        this
            .obstacleGroup
            .add(obstacle);

        obstacle.setCollideWorldBounds(true);
        obstacle
            .body
            .setImmovable(true);
        obstacle
            .body
            .setAllowGravity(true);
    }

}