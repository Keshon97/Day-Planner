var displayTime = $('#currentDay');
//function to get current time using moment(format Dec 21st, 2022, 2:10pm)
function getTime () {
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