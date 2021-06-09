// Get [hours, minutes, seconds] from Date().
function getTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    return [hours, minutes, seconds];
}

// Appends a zero before a number if number < 10, e.g 2 => 02. Else it returns the original number
function addZero(time) {
    if (time < 10) {
        time = "0" + time;
    }
    return time;
}

// Sets content of an element to hours:minutes:seconds with interval of 1 second
function printTime(elementId) {
    let times = getTime();
    // Update the contents in times array with the addZero method
    times.forEach((time, index) => {
        times[index] = addZero(time); // If time is below 10, add a zero e.g. 09
    });
    // Set element to current time joined with :, e.g. 08:59:01
    document.getElementById(elementId).innerHTML = times.join(':');
    // Run again after 1 second
    setTimeout(printTime, 1000, elementId);
}

// Run script
printTime('clockID')
