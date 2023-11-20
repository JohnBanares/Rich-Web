const { fromEvent, switchMap, takeUntil } = rxjs;

document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startCountdown");
    const hourInput = document.getElementById("hour");
    const minInput = document.getElementById("min");
    const secInput = document.getElementById("sec");
    const count = document.getElementById("count");
    let intervalId;

    function startCountdown() {
        const startClick$ = fromEvent(startButton, "click");

        startClick$.pipe(
            //switchmap is used to switch to a new observalbe each time the button is clicked
            //and stopping previous observables and clearing the previous interbal
            switchMap(() => {
                // Clear the previous interval, if any
                clearInterval(intervalId);

                const hours = parseInt(hourInput.value) || 0;
                const minutes = parseInt(minInput.value) || 0;
                const seconds = parseInt(secInput.value) || 0;
                let totalSeconds = hours * 3600 + minutes * 60 + seconds;

                // Set up a new interval an observale to send update seconds every second
                intervalId = setInterval(() => {
                    if (totalSeconds <= 0) {
                        clearInterval(intervalId);
                    } else {
                        totalSeconds--;
                        count.textContent = `${formatTime(totalSeconds)}`;
                    }
                }, 1000);

                // Use takeUntil to stop the interval when the start button is clicked again
                return startClick$.pipe(takeUntil(fromEvent(startButton, "click")));
            })
        ).subscribe(() => {
            clearInterval(intervalId);
            console.log("Countdown stopped!");
        });
    }

    function formatTime(totalSeconds) {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    startCountdown();
});
