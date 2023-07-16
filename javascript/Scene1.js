class Scene1 extends Phaser.Scene{
    constructor(){
        super("bootGame");
    }

    preload(){
        this.load.image("background", "../level1/waterbg.png");
        this.load.image("underground", "../underground/underBG.png");
        this.load.image("row", "../underground/horizontalBlock.png");
        this.load.image("column", "../underground/verticalBlock.png");
        this.load.image("goal", "../underground/treasure.png");
        this.load.image("ghost", "../underground/ghostPic.png");
        this.load.image("ship1","/level1/ship-large2.png");
        this.load.image("bridge-l6","/level1/bridge-l6.png");
        this.load.image("bridge-l5","/level1/bridge-l5.png");
        this.load.image("bridge-hl5","/level1/bridge-hl5.png");
        this.load.image("bridge-l3","/level1/bridge-l3.png");
        this.load.image("bridge-l2","/level1/bridge-l2.png");
        this.load.image("bridge-vl2","/level1/bridge-vl2.png");
        this.load.image("bridge","/level1/bridge.png");
        this.load.image("player", "/level1/player.png");
        this.load.image("bomb", "/level1/bombpic.png");
        this.load.image("door", "/level1/door.png");

        this.load.image("Islandfloor", "/level3/islandFloor.png");
        this.load.image("Islandback", "/level3/islandWater.png");
        this.load.image("grassblock", "/level3/grassblock.png");
        this.load.image("verGrassblock", "/level3/grassBlockver.png");
        this.load.image("thickgrass", "/level3/thickgrass.png");
        this.load.image("vertSmaller", "/level3/vertSmaller.png");
        this.load.image("horiSmaller", "/level3/horiSmaller.png");
        this.load.image("vertblock", "/level3/vertblock.png");
        this.load.image("square", "/level3/square.png");
        this.load.image("tree", "/level3/tree1.png");
        this.load.image("thorn", "/level3/thorn1.png");
        this.load.image("tree2", "/level3/tree2.png");

        this.load.audio("lvl6Audio", "../underground/marioUnderground.mp3");
        this.load.audio("lvl1Audio", "/level1/LegendOfZelda.mp3");
        this.load.audio("lvl3Audio", "/level3/lvl3Song.mp3");

    }
    
    create(){
        this.add.text(20, 20, "Loading the game....");
        this.scene.start("playGame");
    }

}

