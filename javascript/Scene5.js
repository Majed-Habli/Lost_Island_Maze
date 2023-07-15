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
            .sprite(600 / 2 - 60, 600 / 2 + 60, "player");

        // create tree One
        this.createTreeOne(300, 300);
        this.createTreeOne(200, 200);
        this.createTreeOne(100, 300);
        this.createTreeOne(150, 150);
        this.createTreeOne(400, 350);
        this.createTreeOne(500, 100);
        this.createTreeOne(400, 200);
        this.createTreeOne(500, 300);
        this.createTreeOne(500, 200);
        this.createTreeOne(50, 150);

        // create tree Two
        this.createTreeTwo(50, 230);
        this.createTreeTwo(350, 150);
        this.createTreeTwo(50, 150);
        this.createTreeTwo(200, 300);
        this.createTreeTwo(250, 230);
        this.createTreeTwo(390, 270);
        this.createTreeTwo(570, 220);
        this.createTreeTwo(200, 100);
        this.createTreeTwo(50, 350);

        // create tree three
        this.createTreeTwo(150, 250);
        this.createTreeTwo(450, 150);
        this.createTreeTwo(320, 220);
        this.createTreeTwo(350, 100);
        this.createTreeTwo(150, 150);

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
}
