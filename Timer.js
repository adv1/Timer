function Timer() {
    this.timerRunning = false;
    this._timerCurrentTime = 0;
};

Timer.prototype._prepareDisplayedTime = function(time) {
    var milliSeconds = time % 1000,
        seconds = Math.floor((time / 1000) % 60) ,
        minutes = Math.floor((time / 1000 / 60) % 60);

        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds >= 60) {
            seconds = seconds % 60;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
            }
        if (milliSeconds < 10) {
             milliSeconds = '0' + milliSeconds;
        }
        if (milliSeconds > 99 ) {
           milliSeconds = milliSeconds / 10;
        }
    return minutes + ':' + seconds + ',' + milliSeconds;
};


Timer.prototype.start = function() {
    this.timerRunning = true;
};

Timer.prototype.stop = function() {
    this.timerRunning = false;
    this.clearTimer();
};

Timer.prototype.reset = function () {
    this._timerCurrentTime = 0;
    this.clearTimer();
};

Timer.prototype.clearTimer = function(timerElement) {
    clearInterval(timerElement);
};

Timer.prototype.getDisplayedTime = function(timerElement, interval) {
    var self = this;
    return setInterval(function() {
        self._timerCurrentTime += interval;
            
        timerElement.innerHTML = self._prepareDisplayedTime(self._timerCurrentTime);
    }, interval)
};