var labelTimeLap = document.getElementById('timeLap'),
    labelTime = document.getElementById('timer'),
    startButton = document.getElementById('startBtn'),
    resetButton = document.getElementById('resetBtn'),
    lapResults = document.querySelector('.lap-results'),
    currentLapNumber = 0;


var mainTimer = new Timer(),
	lapTimer = new Timer();
	

function startTimer() {
	mainTimer.start();
	lapTimer.start();
	mainIntervalId = mainTimer.getDisplayedTime(labelTime, 10);
	lapIntervalId = lapTimer.getDisplayedTime(labelTimeLap, 10);
	startButton.innerHTML = 'Стоп';
    startButton.style.color = 'red';
    resetButton.innerHTML = 'Круг';
};

function stopTimer() {
	mainTimer.stop();
	lapTimer.stop();
	mainTimer.clearTimer(mainIntervalId);
	lapTimer.clearTimer(lapIntervalId);
	startButton.style.color = 'green';
    startButton.innerHTML = 'Старт';
    resetButton.innerHTML = 'Сброс';
};

function saveLap() {
	currentLapNumber++;
    lapResults.innerHTML += '<div class="resLine">' + '<span class="curLaps">' + "Круг" + " " + currentLapNumber + " " + '</span>'  + '<span class="curTime">' + labelTimeLap.textContent + " " + '</span>' + '</div>';
    lapTimer.reset();
};

function resetTimer() {
	mainTimer.reset();
	labelTime.innerHTML = '00:00,00';
	labelTimeLap.innerHTML = '00:00,00';
	resetButton.innerHTML = 'Круг';
	lapResults.innerHTML = '';
	currentLapNumber = 0;
	lapTimer.reset();
};


startButton.addEventListener('click', function() {
	(mainTimer.timerRunning) ? stopTimer() : startTimer();
	
});

resetButton.addEventListener('click', function() {
	(mainTimer.timerRunning) ? saveLap() : resetTimer();
});