let currMinutes = 0;
let currSeconds = 0;
let currentString = "00:00"; 
let timerOn = false; 
let container = document;
let abortable = false;
let current = "start";
let missionSelected = false;
let timerInterval;


container.addEventListener('click', (event) => {
    if (event.target.classList.contains("btn")) {

        if (event.target.id === 'start') {
            //start timer
            if (!timerOn && (missionSelected)) {
                if (current === "Pomodoro") {
                    document.getElementsByClassName('mainImage')[0].src = 'space.png';
                }
                else if (current === "break") {
                    document.getElementsByClassName('mainImage')[0].src = 'refuel.png';
                }
                else if (current === "longBreak") {
                    document.getElementsByClassName('mainImage')[0].src = 'night.png';
                }
                event.target.style.backgroundColor = 'rgb(185, 5, 5)';
                document.getElementById('abort').style.backgroundColor = 'rgb(233, 60, 60)';
                timerOn = true;
                timerInterval = setInterval(timerIncrease, 1000);
            }

        }
        if (event.target.id === 'abort') {
            if (timerOn && missionSelected) {
                event.target.style.backgroundColor = 'rgb(185, 5, 5)';
                document.getElementById('start').style.backgroundColor = 'rgb(233, 60, 60)';
                timerOn = false;
                clearInterval(timerInterval);
            }
        }
        updateDisplay();
    }
});

function timerIncrease() {
    if (timerOn) {
        if (currSeconds === 0) {
            if (currMinutes === 0) {
                timerOn = false;
                clearInterval(timerInterval);
            } else {
                currMinutes--;
                currSeconds = 59;
            }
        } else {
            currSeconds--;
        }
        updateDisplay();
    }
}

function updateDisplay() {
    currentString = `${currMinutes.toString().padStart(2, '0')}:${currSeconds.toString().padStart(2, '0')}`;
    document.getElementById('counter').textContent = currentString;
}

function mission(id) {
    clearInterval(timerInterval);
    if (id === "Pomodoro") {
        current = id;
        missionSelected = true;
        timerOn = false;
        currMinutes = 25;
        currSeconds = 0;
        document.getElementById('start').style.backgroundColor = 'rgb(233, 60, 60)';
        document.getElementById('abort').style.backgroundColor = 'rgb(185, 5, 5)';
        document.getElementById('body').style.backgroundColor = 'rgb(255, 245, 245)';
        document.getElementById('break').src="break.png";
        document.getElementById('pomodoro').src="pomoON.png";
        document.getElementById('longBreak').src="longBreak.png";
        document.getElementsByClassName('mainImage')[0].src = "start.png";
        updateDisplay();
    }
    if (id === "break") {
        current = id;
        missionSelected = true;
        timerOn = false;
        currMinutes = 5;
        currSeconds = 0;
        updateDisplay();
        document.getElementById('start').style.backgroundColor = 'rgb(233, 60, 60)';
        document.getElementById('abort').style.backgroundColor = 'rgb(185, 5, 5)';
        document.getElementById('body').style.backgroundColor = 'rgb(223, 224, 255)';
        document.getElementById('break').src="breakOn.png";
        document.getElementById('pomodoro').src="pomo.png";
        document.getElementById('longBreak').src="longBreak.png";
        document.getElementsByClassName('mainImage')[0].src = "start.png";

    }
    if (id === "longBreak") {
        missionSelected = true;
        current = id;
        document.getElementById('start').style.backgroundColor = 'rgb(233, 60, 60)';
        document.getElementById('abort').style.backgroundColor = 'rgb(185, 5, 5)';
        document.getElementById('body').style.backgroundColor = 'rgb(1, 0, 18)';
        document.getElementById('break').src="break.png";
        document.getElementById('pomodoro').src="pomo.png";
        document.getElementById('longBreak').src="longBreakON.png";
        document.getElementById('break').src = "break.png";
        document.getElementsByClassName('mainImage')[0].src = "night.png";
        timerOn = false;
        currMinutes = 15;
        currSeconds = 0;
        updateDisplay();
    }
}