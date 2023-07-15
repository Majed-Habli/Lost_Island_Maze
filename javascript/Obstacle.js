class ObstacleManager {
    makeObstacles(levelData, scene) {
        
        levelData.forEach(obsData => {
            this.makeObstacle(obsData.x, obsData.y, obsData.texture, scene);
        })
    }
    // GiveFeatures(ObsNames){
    //     ObsNames.forEach(element=>{
    //         this.element=this.setCollideWorldBounds(true);
    //         this.element=this.body.setImmovable(true);
    //         this.element=this.body.setAllowGravity(true);
    //     })
    // }
    makeObstacle(x, y, texture, scene) {
        scene.physics.add.image(x, y, texture);

        // this.setCollideWorldBounds(true);
        // this.body.setImmovable(true);
        // this.body.setAllowGravity(true);
    }

    
}
const ObMan = new ObstacleManager();
// const obWomen = new ObstacleManager();

