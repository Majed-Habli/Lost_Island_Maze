class Scene6 extends Phaser.Scene {
    constructor() {
        super("lvl6");
    }

    create() {
        this.background = this.add.image(0, 0, "underground");
        this.background.setOrigin(0, 0);

        this.player = this.physics.add.sprite(600 / 2 - 60, 600 / 2 + 60, "player");
        this.player.setCollideWorldBounds(true);

        this.row = this.physics.add.sprite(300, 300, "row");
        this.row.setImmovable(true); // Make the row immovable

        this.curseorKeys = this.input.keyboard.createCursorKeys();
        this.keys = this.input.keyboard.addKeys("W,A,S,D");

        // Set up collision between player and row
        this.physics.add.collider(this.player, this.row);

    }

    update() {
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