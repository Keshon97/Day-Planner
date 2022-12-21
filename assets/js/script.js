var displayTime = $('#currentDay');

function getTime () {
    var currentTime = moment().format('MMM Do, YYYY, hh:mm a');
    displayTime.html(currentTime);
}

setInterval(getTime, 1000);