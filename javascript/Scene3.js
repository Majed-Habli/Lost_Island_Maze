class Scene3 extends Phaser.Scene{
    constructor(){
        super("island1");
    }
    create(){

        //Add borders, background and player + collision
        this.background = this.add.image(0,0,"bg-lvl2");
        this.background.setOrigin(0,0);

        this.map = this.physics.add.sprite(410, 65,"map");

        this.player = this.physics.add.sprite(173, 530,"player");

        this.outlinetop = this.physics.add.image(600/2-65, 600/2 -200,"outlinetop").setImmovable(true);
        this.physics.add.collider(this.player, this.outlinetop);
        
        this.outlineright = this.physics.add.image(500, 290,"outlineright").setImmovable(true);
        this.physics.add.collider(this.player, this.outlineright);
        
        this.outlineleft = this.physics.add.image(90, 290,"outlineleft").setImmovable(true);
        this.physics.add.collider(this.player, this.outlineleft);
        
        this.outlinebot = this.physics.add.image(357, 498,"outlinebot").setImmovable(true);
        this.physics.add.collider(this.player, this.outlinebot);

        //create columns and collision
        this.columns = [];
        this.columns.push (
            this.column = this.physics.add.image(145, 519,"verticalshort").setImmovable(true),
            this.column = this.physics.add.image(200, 519,"verticalshort").setImmovable(true),
            this.column = this.physics.add.image(378, 78,"verticalshort").setImmovable(true),
            this.column = this.physics.add.image(440, 80,"verticalshort").setImmovable(true),   
        )

        this.columns.forEach(column => {this.physics.add.collider(this.player, column);});

        //create rows and collision
        this.rows = [];
        this.rows.push (
            this.row = this.physics.add.image(462, 99,"horizontalshort").setImmovable(true),
            this.row = this.physics.add.image(110, 496,"horizontalshort").setImmovable(true),   
        )

        this.rows.forEach(row => {this.physics.add.collider(this.player, row);});

        

        //Overlap over the map to go to next level
        this.physics.add.overlap(this.player, this.map, this.nextLevel, null, this);
        function nextLevel(player, map){
            alert("Next Level");
        }
  
        this.player.setCollideWorldBounds(true);

        //key binders
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.keys = this.input.keyboard.addKeys("W,A,S,D");

        
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