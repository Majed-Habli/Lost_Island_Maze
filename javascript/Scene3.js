class Scene3 extends Phaser.Scene{
    constructor(){
        super("island1");
    }
    create(){

        //Add borders, background and player + collision
        this.background = this.add.image(0,0,"bg-lvl2");
        this.background.setOrigin(0,0);

        //Create mini-map
        this.map = this.physics.add.sprite(410, 65,"map");

        //Create Player
        this.player = this.physics.add.sprite(173, 530,"player");

        //Create Maze Borders
        this.outlineTop = this.physics.add.image(600/2-65, 600/2 -200,"outlineTop").setImmovable(true);
        this.physics.add.collider(this.player, this.outlineTop);
        
        this.outlineRight = this.physics.add.image(500, 290,"outlineRight").setImmovable(true);
        this.physics.add.collider(this.player, this.outlineRight);
        
        this.outlineLeft = this.physics.add.image(90, 290,"outlineLeft").setImmovable(true);
        this.physics.add.collider(this.player, this.outlineLeft);
        
        this.outlineBot = this.physics.add.image(357, 498,"outlineBot").setImmovable(true);
        this.physics.add.collider(this.player, this.outlineBot);

        //create columns and collision
        this.columns = [];
        this.columns.push (
            this.column = this.physics.add.image(145, 519,"verticalShort").setImmovable(true),
            this.column = this.physics.add.image(200, 519,"verticalShort").setImmovable(true),
            this.column = this.physics.add.image(378, 78,"verticalShort").setImmovable(true),
            this.column = this.physics.add.image(440, 80,"verticalShort").setImmovable(true),
            this.column = this.physics.add.image(259, 373,"verticalShort").setImmovable(true),
            this.column = this.physics.add.image(452, 403,"verticalShort").setImmovable(true),
            this.column = this.physics.add.image(440, 180,"verticalShort").setImmovable(true),
            this.column = this.physics.add.image(381, 240,"verticalShort").setImmovable(true),
            this.column = this.physics.add.image(381, 300,"verticalShort").setImmovable(true)  
        )

        this.columns.forEach(column => {this.physics.add.collider(this.player, column);});

        //create rows and collision
        this.rows = [];
        this.rows.push (
            this.row = this.physics.add.image(462, 99,"horizontalShort").setImmovable(true),
            this.row = this.physics.add.image(110, 496,"horizontalShort").setImmovable(true),
            this.row = this.physics.add.image(238, 301,"horizontalShort").setImmovable(true),
            this.row = this.physics.add.image(238, 230,"horizontalShort").setImmovable(true),
            this.row = this.physics.add.image(238, 160,"horizontalShort").setImmovable(true),
            this.row = this.physics.add.image(222, 350,"horizontalShort").setImmovable(true),  
            this.row = this.physics.add.image(222, 397,"horizontalShort").setImmovable(true),
            this.row = this.physics.add.image(475, 440,"horizontalShort").setImmovable(true),
            this.row = this.physics.add.image(355, 440,"horizontalShort").setImmovable(true),   
            this.row = this.physics.add.image(418, 149,"horizontalShort").setImmovable(true),
            this.row = this.physics.add.image(404, 203,"horizontalShort").setImmovable(true),
            this.row = this.physics.add.image(417, 265,"horizontalShort").setImmovable(true),
            this.row = this.physics.add.image(417, 323,"horizontalShort").setImmovable(true)  
        )

        this.rows.forEach(row => {this.physics.add.collider(this.player, row);});

        //Create long columns and collisons
        this.longColumns = [];
        this.longColumns.push (
            this.longColumn = this.physics.add.image(145, 230,"verticalLong").setImmovable(true),
            this.longColumn = this.physics.add.image(145, 370,"verticalLong").setImmovable(true),
            this.longColumn = this.physics.add.image(200, 230,"verticalLong").setImmovable(true),
            this.longColumn = this.physics.add.image(320, 230,"verticalLong").setImmovable(true),
            this.longColumn = this.physics.add.image(320, 370,"verticalLong").setImmovable(true),    
        )

        this.longColumns.forEach(longColumn => {this.physics.add.collider(this.player, longColumn);});

          //Create long rows and collisons
          this.longRows = [];
          this.longRows.push (
              this.longRow = this.physics.add.image(390, 380,"horizontalLong").setImmovable(true), 
          )
  
          this.longRows.forEach(longRow => {this.physics.add.collider(this.player, longRow);});

          //Create long rows and collisons
          this.crates = [];
          this.crates.push (
            this.crate = this.physics.add.image(230, 445,"crate").setImmovable(true),
            this.crate = this.physics.add.image(398, 445,"crate").setImmovable(true),
            this.crate = this.physics.add.image(375, 121,"crate").setImmovable(true),
            this.crate = this.physics.add.image(375, 145,"crate").setImmovable(true)
          )

          this.crates.forEach(crate => {this.physics.add.collider(this.player, crate);});

        //Overlap over the map to go to next level
        this.physics.add.overlap(this.player, this.map, this.nextLevel, null, this);
        function nextLevel(player, map){
            alert("Next Level");
        }
  
        

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