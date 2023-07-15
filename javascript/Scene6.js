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
        this.column= this.physics.add.sprite(355, 540, "column").setImmovable(true);
        this.column= this.physics.add.sprite(355, 50, "column").setImmovable(true);
        this.column= this.physics.add.sprite(470, 50, "column").setImmovable(true);
        this.column= this.physics.add.sprite(270, 540, "column").setImmovable(true);
        this.column= this.physics.add.sprite(15, 425, "column").setImmovable(true);
        this.column= this.physics.add.sprite(580, 430, "column").setImmovable(true);
        this.column= this.physics.add.sprite(580, 315, "column").setImmovable(true);
        this.column= this.physics.add.sprite(230, 230, "column").setImmovable(true);
        this.column= this.physics.add.sprite(100, 230, "column").setImmovable(true);
        

        this.row = this.physics.add.sprite(400, 470, "row").setImmovable(true);
        this.row = this.physics.add.sprite(510, 470, "row").setImmovable(true);
        this.row = this.physics.add.sprite(540, 200, "row").setImmovable(true);
        this.row = this.physics.add.sprite(430, 200, "row").setImmovable(true);
        this.row = this.physics.add.sprite(230, 470, "row").setImmovable(true);
        this.row = this.physics.add.sprite(115, 470, "row").setImmovable(true);
        this.row = this.physics.add.sprite(60, 470, "row").setImmovable(true);
        this.row = this.physics.add.sprite(60, 380, "row").setImmovable(true);
        this.row = this.physics.add.sprite(60, 275, "row").setImmovable(true);
        this.row = this.physics.add.sprite(160, 275, "row").setImmovable(true);
        this.row = this.physics.add.sprite(175, 380, "row").setImmovable(true);
        this.row = this.physics.add.sprite(270, 380, "row").setImmovable(true);
        this.row = this.physics.add.sprite(380, 380, "row").setImmovable(true);
        this.row = this.physics.add.sprite(440, 380, "row").setImmovable(true);
        this.row = this.physics.add.sprite(515, 275, "row").setImmovable(true);
        this.row = this.physics.add.sprite(400, 275, "row").setImmovable(true);
        this.row = this.physics.add.sprite(290, 95, "row").setImmovable(true);
        this.row = this.physics.add.sprite(200, 95, "row").setImmovable(true);
        this.row = this.physics.add.sprite(150, 95, "row").setImmovable(true);

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
