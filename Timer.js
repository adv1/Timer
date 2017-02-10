function Timer() {
    this.timerRunning = false;
    this._timerCurrentTime = 0;
};

    Timer.prototype._prepareDisplayedTime = function prepareDisplayedTime(time) {
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
        if (!this.timerRunning) {
            this.timerRunning = true;
            this._timerIntervalId = this.getDisplayedTime(labelTime, 100);
        } 
};

Timer.prototype.stop = function() {
        if (this.timerRunning) {
           this.timerRunning = false;
           this.clearTimer();
           console.log(Timer)
        } 
};

Timer.prototype.reset = function () {
        if (!this.timerRunning) {
            this._timerCurrentTime = 0;
            this.clearTimer();
        }
};

Timer.prototype.clearTimer = function() {
        clearInterval(this._timerIntervalId);
};



Timer.prototype.getDisplayedTime = function(timerElement, interval) {
        return setInterval(function() {
            this._timerCurrentTime += interval;
            
            timerElement.innerHTML = this.prepareDisplayedTime(this._timerCurrentTime);
        }, interval)
};