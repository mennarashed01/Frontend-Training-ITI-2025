var seconds = 0;
var minutes = 0;
var interval = null; // Store the interval

function startFun() {
    if (!interval) {
        // Prevent multiple intervals
        interval = setInterval(function() {
            seconds++;
            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }
            watch.innerText = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
        }, 1000);
    }
}

function pauseFun() {
    clearInterval(interval);
    interval = null; // Reset interval so it can be restarted
}

function clearFun() {
    clearInterval(interval);
    interval = null; // Reset interval
    seconds = 0;
    minutes = 0;
    watch.innerText = "00:00";
}

