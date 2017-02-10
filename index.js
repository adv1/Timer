var labelTimeLap = document.getElementById('timeLap'),
    labelTime = document.getElementById('timer'),
    startButton = document.getElementById('startBtn'),
    resetButton = document.getElementById('resetBtn'),
    lapResults = document.querySelector('.lap-results'),
    currentLapNumber = 0,
    lapCurrentTime = 0;


var mainTimer = new Timer(),
	lapTimer = new Timer();
	

function startTimer() {
	 	mainTimer.start();
	 	lapTimer.start();
		startButton.innerHTML = 'Стоп';
    	startButton.style.color = 'red';
    	resetButton.innerHTML = 'Круг';
};

function stopTimer() {
		mainTimer.stop();
		lapTimer.stop();
		startButton.style.color = 'green';
    	startButton.innerHTML = 'Старт';
    	resetButton.innerHTML = 'Сброс';
};

function saveLap() {
		if (this.timerRunning) {
			currentLapNumber++;
        	lapResults.innerHTML += '<div class="resLine">' + '<span class="curLaps">' + "Круг" + " " + currentLapNumber + " " + '</span>'  + '<span class="curTime">' + this.prepareDisplayedTime(lapCurrentTime) + " " + '</span>' + '</div>';
        	lapTimer.reset();
		}	
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

 
