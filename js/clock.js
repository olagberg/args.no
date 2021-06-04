function getTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    return [hours, minutes, seconds];
}

// appends a zero in the
function addZero(time) {
    if (time < 10) {
        time = "0" + time;
    }
    return time;
}

function printTime() {
    let arr = getTime();
    arr.forEach((num, index) => {
        return arr[index] = addZero(num); // If time is below 9, add a zero e.g. 09
    });
    setInterval(printTime, 1000)
    document.getElementById('clockID').innerHTML = arr.join(':');

}

printTime();
