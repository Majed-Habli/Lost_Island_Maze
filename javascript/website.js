let anchor = document.getElementById('anchor')
let leftClouds = document.getElementById('left-clouds')
let rightCloudsBot = document.getElementById('right-clouds-bot')
let rightCloudsTop = document.getElementById('right-clouds-top')
let rightIsland = document.getElementById('right-island')
let crabLeft = document.getElementById('crab1')
let crabRight = document.getElementById('crab2')
console.log(rightCloudsBot)

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    anchor.style.marginTop = value * 1.9 + 'px';
    leftClouds.style.marginRight = value * 1 + 'px';
    rightCloudsBot.style.marginLeft = value * 0.5 + 'px';
    rightCloudsTop.style.marginLeft = value * 1 + 'px';
    rightIsland.style.marginLeft = value * 0.5 + 'px';
    crabLeft.style.marginRight = value * 0.6 + 'px';
    crabRight.style.marginLeft = value * 0.3 + 'px';
    

    // leftIsland.style.marginTop = value * 1.9 + 'px';
    // shores.style.marginTop = value * 0.5 + 'px';
    // rightIsland.style.marginLeft = value * 0.5 + 'px';
});
