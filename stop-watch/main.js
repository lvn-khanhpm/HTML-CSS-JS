// Handling click start button.
var startButtonElement = document.querySelector('#button-start');
var interval;

startButtonElement.onclick = () => {
    if (!interval) {
        interval = setInterval(function countTens() {
            var tensElement = document.querySelector('#tens');
            var tensCurent = tensElement.innerHTML;
            var secondsElement = document.querySelector('#seconds');
            var secondCurent = secondsElement.innerHTML;

            if (tensCurent == 99) {
                secondsElement.innerHTML = secondCurent < 9 ? '0' + ++secondCurent : ++secondCurent;

                tensCurent = 0;
            }

            tensElement.innerHTML = tensCurent < 9 ? '0' + ++tensCurent : ++tensCurent;
        }, 10);
    }
}

// Handling click stop button.
var startButtonElement = document.querySelector('#button-stop');

startButtonElement.onclick = () => {
    handlingClearAndRefreshInterval();
}

// Handling click reset button.
var startButtonElement = document.querySelector('#button-reset');

startButtonElement.onclick = () => {
    handlingClearAndRefreshInterval();
    document.querySelector('#seconds').innerHTML = '00';
    document.querySelector('#tens').innerHTML = '00';
}

// Handling clear and refresh Interval
var handlingClearAndRefreshInterval = () => {
    clearInterval(interval);
    interval = undefined;
}