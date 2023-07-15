class Scene6 extends Phaser.Scene {
    constructor() {
        super("lvl6");
    }

    create() {
        //Adding background and player
        this.background = this.add.image(0, 0, "underground");
        this.background.setOrigin(0, 0);
        this.player = this.physics.add.sprite(300 , 600  + 60, "player");
        this.player.setCollideWorldBounds(true);

        //Adding column and row
        this.column= this.physics.add.sprite(300 + 60, 600 - 60, "column");
        this.column.setImmovable(true);
        this.row = this.physics.add.sprite(200 -60, 400  -60, "row");
        this.row.setImmovable(true);

        //Adding keybinds
        this.curseorKeys = this.input.keyboard.createCursorKeys();
        this.keys = this.input.keyboard.addKeys("W,A,S,D");

        //Creating collision
        this.physics.add.collider(this.player, this.column);
        this.physics.add.collider(this.player, this.row);
        
    }

    update() {
        //Movement
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
