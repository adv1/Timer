var labelTimeLap = document.getElementById('timeLap'),
    labelTime = document.getElementById('timer'),
    startButton = document.getElementById('startBtn'),
    resetButton = document.getElementById('resetBtn'),
    lapResults = document.querySelector('.lap-results'),
    currentLapNumber = 0,
    lapCurrentTime = 0;


var mainTimer = new Timer();
	

function startTimer() {
	 	mainTimer.start();
		startButton.innerHTML = 'Стоп';
    	startButton.style.color = 'red';
    	resetButton.innerHTML = 'Круг';
};

function stopTimer() {
		mainTimer.stop();
		startButton.style.color = 'green';
    	startButton.innerHTML = 'Старт';
    	resetButton.innerHTML = 'Сброс';
};

function saveLap() {
		if (this.timerRunning) {
			currentLapNumber++;
        	lapResults.innerHTML += '<div class="resLine">' + '<span class="curLaps">' + "Круг" + " " + currentLapNumber + " " + '</span>'  + '<span class="curTime">' + this.prepareDisplayedTime(lapCurrentTime) + " " + '</span>' + '</div>';
        	lapCurrentTime = 0;
		}	
};

function resetTimer() {
		mainTimer.reset();
		labelTime.innerHTML = '00:00,00';
        labelTimeLap.innerHTML = '00:00,00';
        resetButton.innerHTML = 'Круг';
        lapResults.innerHTML = '';
        		currentLapNumber = 0;
                lapCurrentTime = 0;

};


startButton.addEventListener('click', function() {
	(mainTimer.timerRunning) ? stopTimer() : startTimer();
	
});

resetButton.addEventListener('click', function() {
	(mainTimer.timerRunning) ? saveLap() : resetTimer();
});

 
