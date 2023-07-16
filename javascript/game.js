window.onload=function(){
    var config = {
        width : 600,
        height: 430,
        backgroundColor: 0x000000,
        scene: [Scene1,Scene2,Scene5],
        pixelArt:true,
        physics:{
            default:"arcade",
            arcade:{
                debug:false
            }
        },
    }

    var game = new Phaser.Game(config);
    window.score = 0;
}