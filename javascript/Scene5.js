class Scene5 extends Phaser.Scene {
    constructor() {
        super("level5");
    }

    create() {
        this.background = this
            .add
            .image(0, 0, "level5Back");
        this
            .background
            .setOrigin(0, 0);

        this.player = this
            .physics
            .add
            .sprite(400, 600 / 2 + 90, "player");

        // create tree One
        this.createTreeFour(50, 40);
        this.createTreeFour(10, 40);
        this.createTreeFour(30, 40);
        this.createTreeFour(50, 40);
        this.createTreeFour(70, 40);
        this.createTreeFour(90, 40);
        this.createTreeFour(110, 40);
        this.createTreeFour(130, 40);
        this.createTreeFour(150, 40);
        this.createTreeFour(170, 40);
        this.createTreeFour(190, 40);
        this.createTreeFour(280, 40);
        this.createTreeFour(300, 40);
        this.createTreeFour(320, 40);
        this.createTreeFour(340, 40);
        this.createTreeFour(360, 40);
        this.createTreeFour(380, 40);
        this.createTreeFour(400, 40);
        this.createTreeFour(420, 40);
        this.createTreeFour(440, 40);
        this.createTreeFour(460, 40);
        this.createTreeFour(480, 40);
        this.createTreeFour(500, 40);
        this.createTreeFour(520, 40);
        this.createTreeFour(540, 40);
        this.createTreeFour(560, 40);
        this.createTreeFour(580, 40);

        this.createTreeFour(20, 100);
        this.createTreeFour(20, 150);
        this.createTreeFour(20, 200);
        this.createTreeFour(20, 250);
        this.createTreeFour(20, 300);
        this.createTreeFour(20, 350);

        this.createBushTwo(590, 100);
        this.createBushTwo(590, 130);
        this.createBushTwo(590, 160);
        this.createBushTwo(590, 190);
        this.createBushOne(590, 220);
        this.createBushTwo(590, 250);
        this.createBushTwo(590, 280);
        this.createBushTwo(590, 310);
        this.createBushTwo(590, 340);
        this.createBushOne(590, 220);

        this.createBush(100, 360);
        this.createBush(200, 360);
        this.createBush(300, 360);
        this.createBushOne(360, 360);
        this.createBush(470, 360);
        this.createBushOne(360, 300);
        this.createBushOne(360, 270);
        this.createBushOne(360, 240);
        this.createBushOne(330, 240);

        this.createBushOne(270, 240);
        this.createBushOne(240, 240);
        this.createBushOne(240, 270);
        this.createBushOne(240, 300);
        this.createBushOne(270, 300);
        this.createBushOne(300, 300);

        this.createBushOne(440, 270);
        this.createBushOne(440, 240);
        this.createBushOne(440, 210);
        this.createBushOne(410, 190);
        this.createBushOne(380, 190);
        this.createBushOne(350, 190);
        this.createBushOne(320, 190);
        this.createBushOne(290, 190);
        this.createBushOne(270, 190);
        this.createBushOne(270, 165);
        this.createBushOne(270, 210);

        this.createBushOne(500, 250);
        this.createBushOne(500, 220);
        this.createBushOne(500, 190);
        this.createBushOne(500, 170);
        this.createBushOne(500, 140);
        this.createBushOne(470, 140);
        this.createBushOne(440, 140);
        this.createBushOne(410, 140);

        this.createBushOne(350, 100);
        this.createBushOne(350, 120);
        this.createBushOne(350, 140);
        this.createBushOne(380, 140);
        this.createBushOne(290, 140);
        
        this.createBushOne(290, 90);
        this.createBushOne(260, 140);
        this.createBushOne(230, 140);
        this.createBushOne(200, 140);
        this.createBushOne(200, 160);
        this.createBushOne(200, 180);
        this.createBushOne(180, 200);

        this.createBushOne(180, 260);
        this.createBushOne(180, 280);
        this.createBushOne(180, 300);
        this.createBushOne(160, 300);
        this.createBushOne(140, 300);
        this.createBushOne(80, 300);
        this.createBushOne(60, 300);
        this.createBushOne(80, 275);
        this.createBushOne(80, 250);
        this.createBushOne(80, 225);
        this.createBushOne(80, 200);
        this.createBushOne(100, 200);
        this.createBushOne(125, 200);
        this.createBushOne(125, 175);
        this.createBushOne(125, 125);
        this.createBushOne(100, 125);
        this.createBushOne(75, 125);
        this.createBushOne(75, 150);
        this.createBushOne(130, 250);
        this.createBushOne(130, 275);
        this.createBushOne(130, 300);
        this.createBushOne(200, 75);
        this.createBushOne(175, 75);
        this.createBushOne(150, 75);
        this.createBushOne(125, 75);
        this.createBushOne(100, 75);
        this.createBushOne(75, 75);
        this.createBushOne(50, 75);
        this.createBushOne(220, 70);
        this.createBushOne(220, 95);
        this.createBushOne(220, 120);

        this.createBush(570, 360);
        this.createBush(470, 300);

        this
            .physics
            .world
            .enable([this.player, this.background]);

        this
            .background
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
            .collider(this.player, this.treeGroup, this.handleCollision, null, this);

        this.showWinModal();
    }

    createBushOne(x, y) {
        const tree = this
            .physics
            .add
            .sprite(x, y, "bushOne");

        if (!this.treeGroup) {
            this.treeGroup = this
                .physics
                .add
                .group();
        }

        this
            .treeGroup
            .add(tree);

        tree.setCollideWorldBounds(true);
        tree
            .body
            .setAllowGravity(false);
        tree
            .body
            .setImmovable(true);
    }

    createBushTwo(x, y) {
        const tree = this
            .physics
            .add
            .sprite(x, y, "bushTwo");

        if (!this.treeGroup) {
            this.treeGroup = this
                .physics
                .add
                .group();
        }

        this
            .treeGroup
            .add(tree);

        tree.setCollideWorldBounds(true);
        tree
            .body
            .setAllowGravity(false);
        tree
            .body
            .setImmovable(true);
    }

    createBushThree(x, y) {
        const tree = this
            .physics
            .add
            .sprite(x, y, "bushThree");

        if (!this.treeGroup) {
            this.treeGroup = this
                .physics
                .add
                .group();
        }

        this
            .treeGroup
            .add(tree);

        tree.setCollideWorldBounds(true);
        tree
            .body
            .setAllowGravity(false);
        tree
            .body
            .setImmovable(true);
    }

    createBushTB(x, y) {
        const tree = this
            .physics
            .add
            .sprite(x, y, "bushTB");

        if (!this.treeGroup) {
            this.treeGroup = this
                .physics
                .add
                .group();
        }

        this
            .treeGroup
            .add(tree);

        tree.setCollideWorldBounds(true);
        tree
            .body
            .setAllowGravity(false);
        tree
            .body
            .setImmovable(true);
    }

    createBush(x, y) {
        const tree = this
            .physics
            .add
            .sprite(x, y, "bush");

        if (!this.treeGroup) {
            this.treeGroup = this
                .physics
                .add
                .group();
        }

        this
            .treeGroup
            .add(tree);

        tree.setCollideWorldBounds(true);
        tree
            .body
            .setAllowGravity(false);
        tree
            .body
            .setImmovable(true);
    }

    createTreeFour(x, y) {
        const tree = this
            .physics
            .add
            .sprite(x, y, "tree4");

        if (!this.treeGroup) {
            this.treeGroup = this
                .physics
                .add
                .group();
        }

        this
            .treeGroup
            .add(tree);

        tree.setCollideWorldBounds(true);
        tree
            .body
            .setAllowGravity(false);
        tree
            .body
            .setImmovable(true);
    }

    createTreeThree(x, y) {
        const tree = this
            .physics
            .add
            .sprite(x, y, "tree3");

        if (!this.treeGroup) {
            this.treeGroup = this
                .physics
                .add
                .group();
        }

        this
            .treeGroup
            .add(tree);

        tree.setCollideWorldBounds(true);
        tree
            .body
            .setAllowGravity(false);
        tree
            .body
            .setImmovable(true);
    }

    createTreeTwo(x, y) {
        const tree = this
            .physics
            .add
            .sprite(x, y, "tree2");

        if (!this.treeGroup) {
            this.treeGroup = this
                .physics
                .add
                .group();
        }

        this
            .treeGroup
            .add(tree);

        tree.setCollideWorldBounds(true);
        tree
            .body
            .setAllowGravity(false);
        tree
            .body
            .setImmovable(true);
    }

    createTreeOne(x, y) {
        const tree = this
            .physics
            .add
            .sprite(x, y, "tree1");

        if (!this.treeGroup) {
            this.treeGroup = this
                .physics
                .add
                .group();
        }

        this
            .treeGroup
            .add(tree);

        tree.setCollideWorldBounds(true);
        tree
            .body
            .setAllowGravity(false);
        tree
            .body
            .setImmovable(true);
    }

    handleCollision(player, object) {
        player.setVelocity(0, 0);
    }

    update() {
        this.movePlayerManager();
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
        var modalBackground = this
            .add
            .graphics();
        modalBackground.fillStyle(0x000000, 0.7);
        modalBackground.fillRect(0, 0, this.game.config.width, this.game.config.height);

        var winText = this
            .add
            .text(this.game.config.width / 2, this.game.config.height / 2 - 50, "Congratulations! You won!", {
                fontSize: "32px",
                fill: "#ffffff"
            });
        winText.setOrigin(0.5);

        var nextLevelButton = this
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
            restart.destroy()
        });

        var restart = this
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
            nextLevelButton.destroy()
        });
    }

    goToNextLevel() {
        console.log("go to next level")
    }

    restart() {
        console.log("restart")
    }
}
