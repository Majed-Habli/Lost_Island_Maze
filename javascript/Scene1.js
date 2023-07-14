class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload() {
        this
            .load
            .image("background", "../level1/waterbg.png");
        this
            .load
            .image("ship1", "/level1/ship-large2.png");
        this
            .load
            .image("bridge", "/level1/bridge-vertical.png");
        this
            .load
            .image("player", "/level1/player.png");
        this
            .load
            .image("tree1", "./../website_images/level5Images/TreeOne.png");
        this
            .load
            .image("tree2", "./../website_images/level5Images/TreeTwo.png");
        this
            .load
            .image("tree3", "./../website_images/level5Images/TreeThree.png");
        this
            .load
            .image("tree4", "./../website_images/level5Images/TreeFour.png");
        this
            .load
            .image("level5Back", "./../website_images/level5Images/backgroundLevel5.png");
    }

    create() {
        this
            .add
            .text(20, 20, "Loading the game....");
        this
            .scene
            .start("level5");
    }
}