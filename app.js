let homeScreen = document.getElementById('homeScreen');
let gameScreen = document.getElementById('gameScreen');
let startBtn = document.getElementById('startBtn');
let score = document.getElementById('score');
let tile = document.getElementsByClassName('tile');


let count = 0;


window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}


startBtn.addEventListener('click', function (e) {
    e.preventDefault();
    homeScreen.classList.add('transition');
    gameScreen.classList.add('transition');
});


document.addEventListener('click', function (event) {
    if (event.target.nodeName === 'BUTTON' && event.target.innerText !== 'Start!') {
        count++;
        score.innerText = count;
        event.target.classList.toggle('rotate');
        let rotate = document.getElementsByClassName('rotate');
        if (rotate.length === 2) {
            console.dir(rotate[1]);
            let val1 = rotate[1].classList.value;
            let val2 = rotate[2].classList.value;
            if (val1 === val2) {
                console.log('it worked!');
            }
        }


    } else if (event.target.classList.value === 'smileyFace') {
        count++;
        score.innerText = count;
        event.target.parentElement.classList.toggle('rotate');
    }
});
