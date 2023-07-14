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
            .image(600 / 2 - 60, 600 / 2 + 60, "player");

        this.treeOne = this
            .add
            .image(300, 300, "tree1");
        this.treeOne = this
            .add
            .image(200, 200, "tree1");
        this.treeOne = this
            .add
            .image(100, 300, "tree1");
        this.treeOne = this
            .add
            .image(150, 150, "tree1");
        this.treeOne = this
            .add
            .image(400, 350, "tree1");
        this.treeOne = this
            .add
            .image(500, 100, "tree1");
        this.treeOne = this
            .add
            .image(400, 200, "tree1");
        this.treeOne = this
            .add
            .image(500, 300, "tree1");
        this.treeOne = this
            .add
            .image(500, 200, "tree1");
        this.treeOne = this
            .add
            .image(50, 150, "tree1");

        this.treeTwo = this
            .add
            .image(50, 230, "tree2");
        this.treeTwo = this
            .add
            .image(300, 150, "tree2");
        this.treeTwo = this
            .add
            .image(50, 150, "tree2");
        this.treeTwo = this
            .add
            .image(200, 300, "tree2");
        this.treeTwo = this
            .add
            .image(250, 230, "tree2");
        this.treeTwo = this
            .add
            .image(390, 270, "tree2");
        this.treeTwo = this
            .add
            .image(570, 220, "tree2");
        this.treeTwo = this
            .add
            .image(200, 100, "tree2");
        this.treeTwo = this
            .add
            .image(50, 350, "tree2");

        this
            .physics
            .add
            .collider(this.player, this.treeOne, handleTreeCollision, null, this);

        this
            .physics
            .add
            .collider(this.player, this.treeTwo, handleTreeCollision, null, this);

        this
            .physics
            .world
            .enable([this.player, this.background]);
        this
            .background
            .body
            .setCollideWorldBounds(true);
        this
            .physics
            .add
            .collider(this.player, this.background, handleWaterCollision, null, this);
        this.curseorKeys = this
            .input
            .keyboard
            .createCursorKeys();

        function handleWaterCollision(player, water) {}

        function handleTreeCollision(player, tree) {
        // Handle collision between player and tree You can add custom logic here
    }
    }

    update() {
        this.movePlayerManager();
    }

    movePlayerManager() {
        var gameSettings = {
            playerSpeed: 100
        };
        if (this.curseorKeys.left.isDown) {
            this
                .player
                .setVelocityX(-gameSettings.playerSpeed);
        } else if (this.curseorKeys.right.isDown) {
            this
                .player
                .setVelocityX(gameSettings.playerSpeed);
        }

        if (this.curseorKeys.up.isDown) {
            this
                .player
                .setVelocityY(-gameSettings.playerSpeed);
        } else if (this.curseorKeys.down.isDown) {
            this
                .player
                .setVelocityY(gameSettings.playerSpeed);
        }
    }

    
}
