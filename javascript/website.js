let anchor = document.getElementById('anchor')
let leftClouds = document.getElementById('left-clouds')
let rightCloudsBot = document.getElementById('right-clouds-bot')
let rightCloudsTop = document.getElementById('right-clouds-top')
let crabLeft = document.getElementById('crab1')
let crabRight = document.getElementById('crab2')
let title = document.getElementById('title')
let welcome =  document.getElementById('welcome')
let enjoy = document.getElementById('enjoy')


window.addEventListener('scroll', () => {
    let value = window.scrollY;

    anchor.style.marginTop = value * 1.9 + 'px';
    leftClouds.style.marginRight = value * 1 + 'px';
    rightCloudsBot.style.marginLeft = value * 0.5 + 'px';
    rightCloudsTop.style.marginLeft = value * 1 + 'px';
    crabLeft.style.marginRight = value * 0.6 + 'px';
    crabRight.style.marginLeft = value * 0.3 + 'px';
    title.style.marginTop = value * 0.87 + 'px';
    welcome.style.marginLeft = value * 0.65 + 'px';
    enjoy.style.marginRight = value * 0.6 + 'px';

});

let startBtn = document.getElementById('startBtn');
console.log(startBtn)

startBtn.addEventListener('click',() => {
    console.log('pressed');
    window.location.href = "/game.html";
       
});

  