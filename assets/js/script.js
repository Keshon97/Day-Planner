var displayTime = $('#currentDay');
//function to get current time using moment(format Dec 21st, 2022, 2:10pm)
function getTime() {
  var currentTime = moment().format('MMM Do, YYYY, hh:mm a');
  displayTime.html(currentTime);
};
//fuction that saves the note in local storage whenever the svae button is cliecked
$(document).ready(function () {
  $('.saveBtn').on('click', function () {
    var note = $(this).siblings('.description').val();
    console.log(note);
    var time = $(this).parent().attr('id');
    console.log(time);
    localStorage.setItem(time, note);
  });
});

function colorNotes() {
  // get current number of hours
  var currentHour = moment().hours();

  // loop over time blocks
  $('.time-block').each(function () {
    var hour = parseInt($(this).attr('id').split('-')[1]);

    // check if we've moved past this time
    if (hour === currentHour) {
      $(this).removeClass('past');
      $(this).addClass('present');
    }
    else if (hour < currentHour) {
      $(this).addClass('past');
    } else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  });
}

colorNotes();

// set up interval to check if current time needs to be updated
setInterval(colorNotes, 5000);

// will load the saved notes from local storage by the hour
function getNotes() {
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
}
getNotes();

setInterval(getTime, 1000);