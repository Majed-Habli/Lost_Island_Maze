class Scene3 extends Phaser.Scene{
    constructor(){
        super("island1");
    }
    create(){
        this.background = this.add.image(0,0,"bg-lvl2");
        this.background.setOrigin(0,0);

        this.map = this.add.image(600/2-70, 600/2 +100,"map");
        this.physics.add.collider(this.player, this.outlinetop);

        this.outlinetop = this.add.image(600/2-65, 600/2 -200,"outlinetop");
        // this.outlinetop.setImmovable(true);
        
        
        // this.outlineright = this.add.image(500, 290,"outlineright");
        // this.outlineleft = this.add.image(90, 290,"outlineleft");
        // this.outlinebot = this.add.image(357, 498,"outlinebot")

        // this.verticalshort = this.add.image(378, 78,"verticalshort");
        // this.verticalshort = this.add.image(200, 520,"verticalshort");

        // this.horizontalshort = this.add.image(378, 78,"horizontalshort");
        // this.physics.add.collider(this.player, this.row);


        this.player = this.physics.add.image(600/2-60, 600/2 +60,"player");

        this.player.setCollideWorldBounds(true);
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.keys = this.input.keyboard.addKeys("W,A,S,D");

        function handleWaterCollision(player, water) {
        }
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
        
    }

}