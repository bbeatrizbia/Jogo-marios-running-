const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');
const nuvem = document.querySelector('.nuvem');
const gameOver = document.querySelector('.fim');

const pulo = () =>{
    mario.classList.add('pulo');

    setTimeout(() =>{
        mario.classList.remove('pulo');
    }, 500);
}

const loop = setInterval(() => {

    const tuboPosition = tubo.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const nuvemPosition = nuvem.offsetLeft
    
    if (tuboPosition <= 120 && tuboPosition > 0 && marioPosition < 80){
       
        tubo.style.animation = 'none';
        tubo.style.left = `${tuboPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './img/game-over.png';
        mario.style.width = '70px'
        mario.style.marginLeft = '50px'

        nuvem.style.animation = 'none';
        nuvem.style.left = `${nuvemPosition}px`;

        gameOver.style.display = 'block';

        clearInterval(loop);
    }
    
}, 10);

function reiniciarJogo(){
  
    window.location.href = "index.html";

}
    

document.addEventListener('keydown', pulo);